"use client";

import { useRouter } from "next/navigation";

import Button from "@/components/ui/Button";
import {
  Checkbox,
  CheckboxFieldset,
  CheckboxGroup,
  CheckboxLabel
} from "@/components/ui/Checkbox";
import Input from "@/components/ui/Input";
import RadioGroupInputs from "@/components/ui/RadioGroup";
import countryDivisions from "@/mock/fixtures/countryDivisions.json";
import { PERSON_TYPE } from "@/models/savebys";
import { signupBuyer } from "@/services/lacre";
import savebysServices from "@/services/savebys";
import { useFormik } from "formik";
import { toast } from "sonner";
import * as yup from "yup";

import {
  CEP_MASK,
  CNAE_MASK,
  CNPJ_Mask,
  PHONE_NUMBER_MASK,
  unmask
} from "@/utils/masks";
import {
  CEP_REGEX,
  CNAE_REGEX,
  CNPJ_REGEX,
  PHONE_NUMBER_REGEX
} from "@/utils/regex";

import { INVALID, PAGE, REQUIRED } from "@/constants";

import { CaretRight } from "@phosphor-icons/react/dist/ssr";

export enum YES_NO {
  YES = "SIM",
  NO = "NÃO"
}

const RADIOS_AFFECTED = [
  {
    label: YES_NO.YES,
    value: YES_NO.YES,
    autoFocus: true
  },
  {
    label: YES_NO.NO,
    value: YES_NO.NO
  }
];

export type BuyerValues = {
  floodAffected: YES_NO;
  howWereYouAffected: string;
  personType: PERSON_TYPE.LEGAL;
  name: string;
  fullName: string;
  document: string;
  cnae: string;
  emailAddress: string;
  phoneNumber: string;
  isWhatsApp: boolean;
  postalCode: string;
  countryDivision: string;
  city: string;
  cityDivision: string;
  publicPlaceName: string;
  publicPlaceNumber: string;
  addOn: string;
  howCanWeHelp: string;
  terms: boolean;
};

const TEXT_AREA_MAX_LENGTH = 2000;

const validationSchema = yup.object().shape({
  floodAffected: yup
    .mixed<YES_NO>()
    .oneOf(Object.values(YES_NO), REQUIRED.RADIO)
    .required(REQUIRED.RADIO),
  howWereYouAffected: yup.string().when("floodAffected", {
    is: YES_NO.YES,
    then: (schema) =>
      schema
        .required(REQUIRED.FIELD)
        .max(TEXT_AREA_MAX_LENGTH, REQUIRED.MAX_LENGTH(TEXT_AREA_MAX_LENGTH))
  }),
  name: yup.string().required(REQUIRED.FIELD),
  fullName: yup.string().required(REQUIRED.FIELD),
  document: yup
    .string()
    .required(REQUIRED.FIELD)
    .matches(CNPJ_REGEX, INVALID.DOCUMENT_LEGAL),
  cnae: yup.string().matches(CNAE_REGEX, INVALID.DOCUMENT),
  emailAddress: yup.string().required(REQUIRED.FIELD).email(INVALID.EMAIL),
  phoneNumber: yup
    .string()
    .matches(PHONE_NUMBER_REGEX, INVALID.PHONE)
    .required(REQUIRED.FIELD),
  postalCode: yup
    .string()
    .matches(CEP_REGEX, INVALID.POSTAL_CODE)
    .required(REQUIRED.FIELD),
  countryDivision: yup
    .string()
    .max(2, REQUIRED.MAX_LENGTH(2))
    .oneOf(
      countryDivisions.map((countryDivision) => countryDivision.abbreviation)
    )
    .required(REQUIRED.FIELD),
  city: yup.string().required(REQUIRED.FIELD),
  cityDivision: yup.string().required(REQUIRED.FIELD),
  publicPlaceName: yup.string().required(REQUIRED.FIELD),
  publicPlaceNumber: yup.number().required(REQUIRED.FIELD),
  addOn: yup.string(),
  howCanWeHelp: yup
    .string()
    .max(TEXT_AREA_MAX_LENGTH, REQUIRED.MAX_LENGTH(TEXT_AREA_MAX_LENGTH)),
  terms: yup.boolean().oneOf([true], REQUIRED.CHECKBOX)
});

export default function FormBuyer() {
  const router = useRouter();

  const onSubmit = async (values: BuyerValues) => {
    try {
      await signupBuyer(values);
      toast.success("Dados enviados com sucesso!");
      resetForm();
      router.replace(PAGE.LACRE.HOME);
    } catch (error) {
      console.error("🚀 ~ onSubmit ~ error:", error);
      toast.error("Ocorreu um erro ao avançar, tente novamente mais tarde!");
    }
  };

  const {
    values,
    handleBlur,
    handleChange,
    handleSubmit,
    touched,
    errors,
    isSubmitting,
    setFieldValue,
    resetForm
  } = useFormik({
    initialValues: {
      floodAffected: YES_NO.YES,
      howWereYouAffected: "",
      personType: PERSON_TYPE.LEGAL,
      fullName: "",
      name: "",
      document: "",
      cnae: "",
      emailAddress: "",
      phoneNumber: "",
      isWhatsApp: false,
      postalCode: "",
      countryDivision: "RS",
      city: "",
      cityDivision: "",
      publicPlaceName: "",
      publicPlaceNumber: "",
      addOn: "",
      howCanWeHelp: "",
      terms: false
    },
    validationSchema,
    onSubmit
  });

  const fetchAddress = async (cep: string) => {
    try {
      const address = await savebysServices.getAddressByCEP(cep);
      if (address.erro) {
        throw new Error("CEP não encontrado");
      }
      setFieldValue("countryDivision", address.uf, true);
      setFieldValue("city", address.localidade, true);
      setFieldValue("cityDivision", address.bairro, true);
      setFieldValue("publicPlaceName", address.logradouro, true);
      setFieldValue("publicPlaceNumber", address.unidade, true);
      setFieldValue("addOn", address.complemento, true);
    } catch (error) {
      console.error("🚀 ~ fetchAddress ~ error:", error);
      toast.error(
        "Não foi possível buscar as informações do CEP informado, tente novamente ou cadastre manualmente."
      );
    }
  };

  return (
    <form
      noValidate
      onSubmit={handleSubmit}
      className="w-full flex flex-col gap-6"
    >
      <Input.Label required className="self-start">
        Você foi atingido pela enchente?
      </Input.Label>
      <RadioGroupInputs
        radios={RADIOS_AFFECTED}
        value={values.floodAffected}
        name="floodAffected"
        ariaLabel="Você foi atingido pela enchente?"
        onValueChange={(value) => setFieldValue("floodAffected", value)}
        invalid={Boolean(touched.floodAffected && errors.floodAffected)}
      />

      {values.floodAffected === YES_NO.YES && (
        <Input.Fieldset>
          <Input.Label htmlFor="howWereYouAffected" required>
            Pode nos descrever de que forma você foi afetado(a)?
          </Input.Label>
          <Input.Textarea
            name="howWereYouAffected"
            id="howWereYouAffected"
            placeholder="Minha loja foi alagada, perdi meus materiais..."
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.howWereYouAffected}
            data-invalid={
              touched.howWereYouAffected && errors.howWereYouAffected
            }
            rows={3}
            maxLength={TEXT_AREA_MAX_LENGTH}
          />
          <Input.Length
            length={values.howWereYouAffected.length}
            maxLength={TEXT_AREA_MAX_LENGTH}
          />
          <Input.Error>
            {touched.howWereYouAffected && errors.howWereYouAffected}
          </Input.Error>
        </Input.Fieldset>
      )}

      <Input.Fieldset>
        <Input.Label htmlFor="name" required>
          Razão Social
        </Input.Label>
        <Input.Text
          autoCapitalize="sentences"
          name="name"
          id="name"
          placeholder="Qual o nome da empresa?"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.name}
          data-invalid={touched.name && errors.name}
        />
        <Input.Error>{touched.name && errors.name}</Input.Error>
      </Input.Fieldset>

      <Input.Fieldset>
        <Input.Label htmlFor="document" required>
          CNPJ
        </Input.Label>
        <Input.Mask
          name="document"
          id="document"
          type="text"
          placeholder="11.111.111/0001-00"
          mask={CNPJ_Mask}
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.document}
          data-invalid={touched.document && errors.document}
        />
        <Input.Error>{touched.document && errors.document}</Input.Error>
      </Input.Fieldset>

      <Input.Fieldset>
        <Input.Label htmlFor="cnae">CNAE</Input.Label>
        <Input.Mask
          name="cnae"
          id="cnae"
          type="text"
          placeholder="0000-0/00"
          mask={CNAE_MASK}
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.cnae}
          data-invalid={touched.cnae && errors.cnae}
        />
        <Input.Error>{touched.cnae && errors.cnae}</Input.Error>
      </Input.Fieldset>

      <Input.Fieldset>
        <Input.Label htmlFor="fullName" required>
          Nome da Pessoa de Contato
        </Input.Label>
        <Input.Text
          autoCapitalize="sentences"
          name="fullName"
          id="fullName"
          placeholder="Como se chama?"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.fullName}
          data-invalid={touched.fullName && errors.fullName}
        />
        <Input.Error>{touched.fullName && errors.fullName}</Input.Error>
      </Input.Fieldset>

      <Input.Fieldset>
        <Input.Label htmlFor="emailAddress" required>
          Email
        </Input.Label>
        <Input.Text
          name="emailAddress"
          id="emailAddress"
          type="emailAddress"
          placeholder="exemplo@savebys.com"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.emailAddress}
          data-invalid={touched.emailAddress && errors.emailAddress}
        />
        <Input.Error>{touched.emailAddress && errors.emailAddress}</Input.Error>
      </Input.Fieldset>

      <Input.Fieldset>
        <Input.Label htmlFor="phoneNumber" required>
          Celular (WhatsApp)
        </Input.Label>
        <Input.Mask
          name="phoneNumber"
          id="phoneNumber"
          placeholder="(51) 98888-7777"
          mask={PHONE_NUMBER_MASK}
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.phoneNumber}
          data-invalid={touched.phoneNumber && errors.phoneNumber}
        />
        <Input.Error>{touched.phoneNumber && errors.phoneNumber}</Input.Error>
      </Input.Fieldset>

      <CheckboxFieldset>
        <CheckboxGroup>
          <Checkbox
            name="isWhatsApp"
            id="isWhatsApp"
            onCheckedChange={(value) => setFieldValue("isWhatsApp", value)}
            onBlur={handleBlur}
            checked={values.isWhatsApp}
          />
          <CheckboxLabel htmlFor="isWhatsApp">
            O número informado possui WhatsApp?
          </CheckboxLabel>
        </CheckboxGroup>
      </CheckboxFieldset>

      <Input.Group>
        <Input.Fieldset className="md:w-[38%]">
          <Input.Label htmlFor="postalCode" required>
            CEP
          </Input.Label>
          <Input.Mask
            name="postalCode"
            id="postalCode"
            placeholder="99999-999"
            mask={CEP_MASK}
            onChange={(event) => {
              handleChange(event);
              const cep = unmask(event.target.value);
              if (cep.length === 8) {
                fetchAddress(cep);
              }
            }}
            onBlur={handleBlur}
            value={values.postalCode}
            data-invalid={touched.postalCode && errors.postalCode}
          />
          <Input.Error>{touched.postalCode && errors.postalCode}</Input.Error>
        </Input.Fieldset>

        <Input.Fieldset>
          <Input.Label htmlFor="countryDivision" required>
            Estado
          </Input.Label>
          <Input.Select
            name="countryDivision"
            id="countryDivision"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.countryDivision}
            data-invalid={touched.countryDivision && errors.countryDivision}
          >
            <option disabled value="0">
              Selecione uma opção
            </option>
            {countryDivisions.map((countryDivision) => (
              <option
                key={countryDivision.abbreviation}
                value={countryDivision.abbreviation}
              >
                {countryDivision.abbreviation} - {countryDivision.name}
              </option>
            ))}
          </Input.Select>
          <Input.Error>
            {touched.countryDivision && errors.countryDivision}
          </Input.Error>
        </Input.Fieldset>
      </Input.Group>

      <Input.Group>
        <Input.Fieldset>
          <Input.Label htmlFor="city" required>
            Cidade
          </Input.Label>
          <Input.Text
            autoCapitalize="sentences"
            name="city"
            id="city"
            placeholder="De onde você é?"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.city}
            data-invalid={touched.city && errors.city}
          />
          <Input.Error>{touched.city && errors.city}</Input.Error>
        </Input.Fieldset>

        <Input.Fieldset>
          <Input.Label htmlFor="cityDivision" required>
            Bairro
          </Input.Label>
          <Input.Text
            autoCapitalize="sentences"
            name="cityDivision"
            id="cityDivision"
            placeholder="Qual bairro?"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.cityDivision}
            data-invalid={touched.cityDivision && errors.cityDivision}
          />
          <Input.Error>
            {touched.cityDivision && errors.cityDivision}
          </Input.Error>
        </Input.Fieldset>
      </Input.Group>

      <Input.Fieldset>
        <Input.Label htmlFor="publicPlaceName" required>
          Logradouro
        </Input.Label>
        <Input.Text
          autoCapitalize="sentences"
          name="publicPlaceName"
          id="publicPlaceName"
          placeholder="Rua, Avenida, etc."
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.publicPlaceName}
          data-invalid={touched.publicPlaceName && errors.publicPlaceName}
        />
        <Input.Error>
          {touched.publicPlaceName && errors.publicPlaceName}
        </Input.Error>
      </Input.Fieldset>

      <Input.Group>
        <Input.Fieldset className="md:w-[38%]">
          <Input.Label htmlFor="publicPlaceNumber" required>
            Número
          </Input.Label>
          <Input.Text
            type="number"
            name="publicPlaceNumber"
            id="publicPlaceNumber"
            placeholder="123"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.publicPlaceNumber}
            data-invalid={touched.publicPlaceNumber && errors.publicPlaceNumber}
          />
          <Input.Error>
            {touched.publicPlaceNumber && errors.publicPlaceNumber}
          </Input.Error>
        </Input.Fieldset>

        <Input.Fieldset>
          <Input.Label htmlFor="addOn">Complemento</Input.Label>
          <Input.Text
            autoCapitalize="sentences"
            name="addOn"
            id="addOn"
            placeholder="Bloco, Sala, etc."
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.addOn}
            data-invalid={touched.addOn && errors.addOn}
          />
          <Input.Error>{touched.addOn && errors.addOn}</Input.Error>
        </Input.Fieldset>
      </Input.Group>

      <Input.Fieldset>
        <Input.Label htmlFor="howCanWeHelp">
          Além da doação do kit, podemos lhe ajudar de alguma outra forma?
        </Input.Label>
        <Input.Textarea
          name="howCanWeHelp"
          id="howCanWeHelp"
          placeholder="Explique suas necessidades..."
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.howCanWeHelp}
          data-invalid={touched.howCanWeHelp && errors.howCanWeHelp}
          rows={3}
          maxLength={TEXT_AREA_MAX_LENGTH}
        />
        <Input.Length
          length={values.howCanWeHelp.length}
          maxLength={TEXT_AREA_MAX_LENGTH}
        />
        <Input.Error>{touched.howCanWeHelp && errors.howCanWeHelp}</Input.Error>
      </Input.Fieldset>

      <CheckboxFieldset>
        <CheckboxGroup>
          <Checkbox
            name="terms"
            id="terms"
            onCheckedChange={(value) => setFieldValue("terms", value)}
            onBlur={handleBlur}
            checked={values.terms}
          />
          <CheckboxLabel htmlFor="terms">
            Concordo em compartilhar meus dados com a Savebys e a Lacre, no
            âmbito da parceria entre as duas entidades, para que sejam
            repassados aos solicitantes para a realização da logística de
            entrega.
          </CheckboxLabel>
        </CheckboxGroup>
        <Input.Error>{touched.terms && errors.terms}</Input.Error>
      </CheckboxFieldset>

      <Button isLoading={isSubmitting} type="submit" className="h-[58px] px-8">
        Confirmar
        <CaretRight size={16} />
      </Button>
    </form>
  );
}
