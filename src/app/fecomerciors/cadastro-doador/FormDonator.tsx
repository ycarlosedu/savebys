"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

import Input from "@/components/Input";
import RadioGroupInputs from "@/components/RadioGroup";
import { INVALID, PAGE, REQUIRED } from "@/contants";
import countryDivisions from "@/mock/fixtures/countryDivisions.json";
import { PERSON_TYPE } from "@/models/fercomerciors";
import fecomerciorsServices from "@/services/fercomerciors";
import { useFormik } from "formik";
import { toast } from "sonner";
import * as yup from "yup";

import {
  CEP_MASK,
  CNPJ_Mask,
  CPF_MASK,
  PHONE_NUMBER_MASK
} from "@/utils/masks";
import {
  CEP_REGEX,
  CNPJ_REGEX,
  CPF_REGEX,
  PHONE_NUMBER_REGEX
} from "@/utils/regex";

import { CaretRight } from "@phosphor-icons/react/dist/ssr";

export type DonatorValues = {
  personType: PERSON_TYPE;
  fullName: string;
  companyName: string;
  document: string;
  emailAddress: string;
  phoneNumber: string;
  postalCode: string;
  countryDivision: string;
  city: string;
  publicPlaceName: string;
  publicPlaceNumber: string;
  addOn: string;
};

const validationSchema = yup.object().shape({
  personType: yup
    .mixed<PERSON_TYPE>()
    .oneOf(Object.values(PERSON_TYPE), REQUIRED.RADIO)
    .required(REQUIRED.RADIO),
  fullName: yup.string().required(REQUIRED.FIELD),
  companyName: yup.string().when("personType", {
    is: PERSON_TYPE.LEGAL,
    then: (schema) => schema.required(REQUIRED.FIELD)
  }),
  document: yup
    .string()
    .required(REQUIRED.FIELD)
    .when("personType", {
      is: PERSON_TYPE.LEGAL,
      then: (schema) => schema.matches(CNPJ_REGEX, INVALID.DOCUMENT_LEGAL)
    })
    .when("personType", {
      is: PERSON_TYPE.NATURAL,
      then: (schema) => schema.matches(CPF_REGEX, INVALID.DOCUMENT_NATURAL)
    }),
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
  publicPlaceName: yup.string().required(REQUIRED.FIELD),
  publicPlaceNumber: yup.number().required(REQUIRED.FIELD),
  addOn: yup.string()
});

const RADIOS_PROFILES = [
  {
    label: "Pessoa Jurídica",
    value: PERSON_TYPE.LEGAL,
    autoFocus: true
  },
  {
    label: "Pessoa Física",
    value: PERSON_TYPE.NATURAL
  }
];

export default function FormDonator() {
  const router = useRouter();

  const onSubmit = async (values: DonatorValues) => {
    try {
      values.personType === PERSON_TYPE.LEGAL
        ? await fecomerciorsServices.signupCompany(values)
        : await fecomerciorsServices.signupIndividual(values);
      if (typeof window != "undefined") {
        localStorage.setItem("donator", JSON.stringify(values));
      }

      router.push(PAGE.FECOMERCIO.REGISTER_FURNITURE);
    } catch (error) {
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
    setValues,
    setFieldValue
  } = useFormik({
    initialValues: {
      personType: PERSON_TYPE.LEGAL,
      fullName: "",
      companyName: "",
      document: "",
      emailAddress: "",
      phoneNumber: "",
      postalCode: "",
      countryDivision: "RS",
      city: "",
      publicPlaceName: "",
      publicPlaceNumber: "",
      addOn: ""
    },
    validationSchema,
    onSubmit
  });

  useEffect(() => {
    if (typeof window == "undefined") return;

    const previousDonator: DonatorValues = JSON.parse(
      localStorage.getItem("donator") || "{}"
    );
    if (Object.keys(previousDonator).length) {
      setValues(previousDonator);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <form
      noValidate
      onSubmit={handleSubmit}
      className="w-full flex flex-col gap-6"
    >
      <RadioGroupInputs
        radios={RADIOS_PROFILES}
        value={values.personType}
        name="personType"
        ariaLabel="Tipo de pessoa (PJ ou PF)"
        onValueChange={(value) => setFieldValue("personType", value)}
        invalid={Boolean(touched.personType && errors.personType)}
      />

      {values.personType === PERSON_TYPE.NATURAL ? (
        <>
          <Input.Fieldset>
            <Input.Label htmlFor="fullName">Nome Completo</Input.Label>
            <Input.Text
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
            <Input.Label htmlFor="document">CPF</Input.Label>
            <Input.Mask
              name="document"
              id="document"
              type="text"
              placeholder="111.111.111-11"
              mask={CPF_MASK}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.document}
              data-invalid={touched.document && errors.document}
            />
            <Input.Error>{touched.document && errors.document}</Input.Error>
          </Input.Fieldset>
        </>
      ) : (
        <>
          <Input.Fieldset>
            <Input.Label htmlFor="companyName">Razão Social</Input.Label>
            <Input.Text
              name="companyName"
              id="companyName"
              placeholder="Qual o nome da empresa?"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.companyName}
              data-invalid={touched.companyName && errors.companyName}
            />
            <Input.Error>
              {touched.companyName && errors.companyName}
            </Input.Error>
          </Input.Fieldset>

          <Input.Fieldset>
            <Input.Label htmlFor="document">CNPJ</Input.Label>
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
            <Input.Label htmlFor="fullName">
              Nome da Pessoa de Contato
            </Input.Label>
            <Input.Text
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
        </>
      )}

      <Input.Fieldset>
        <Input.Label htmlFor="emailAddress">Email</Input.Label>
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
        <Input.Label htmlFor="phoneNumber">Celular (WhatsApp)</Input.Label>
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

      <Input.Group>
        <Input.Fieldset className="w-[38%]">
          <Input.Label htmlFor="postalCode">CEP</Input.Label>
          <Input.Mask
            name="postalCode"
            id="postalCode"
            placeholder="99999-999"
            mask={CEP_MASK}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.postalCode}
            data-invalid={touched.postalCode && errors.postalCode}
          />
          <Input.Error>{touched.postalCode && errors.postalCode}</Input.Error>
        </Input.Fieldset>

        <Input.Fieldset>
          <Input.Label htmlFor="countryDivision">Estado</Input.Label>
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

      <Input.Fieldset>
        <Input.Label htmlFor="city">Cidade</Input.Label>
        <Input.Text
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
        <Input.Label htmlFor="publicPlaceName">Logradouro</Input.Label>
        <Input.Text
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
        <Input.Fieldset className="w-[38%]">
          <Input.Label htmlFor="publicPlaceNumber">Número</Input.Label>
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

      <button
        type="submit"
        disabled={isSubmitting}
        className="link-btn h-[58px] px-8"
      >
        {isSubmitting ? "Salvando..." : "Avançar"}
        <CaretRight size={16} />
      </button>
    </form>
  );
}
