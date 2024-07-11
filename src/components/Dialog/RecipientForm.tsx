"use client";

import { useEffect } from "react";

import { ScrollArea } from "@/components/ScrollArea";
import countryDivisions from "@/mock/fixtures/countryDivisions.json";
import useMenuStore, { MENU } from "@/stores/menuStore";
import * as Dialog from "@radix-ui/react-dialog";
import { useFormik } from "formik";
import { toast } from "sonner";
import * as yup from "yup";

import { CEP_MASK, CNPJ_Mask, PHONE_NUMBER_MASK } from "@/utils/masks";
import { CEP_REGEX, CPF_REGEX, PHONE_NUMBER_REGEX } from "@/utils/regex";

import { INVALID, LOCAL_STORAGE, REQUIRED, getLocalStorage } from "@/constants";

import { X } from "@phosphor-icons/react";
import { CaretRight } from "@phosphor-icons/react/dist/ssr";

import Button from "../Button";
import Input from "../Input";

export type RecipientValues = {
  companyName: string;
  fullName: string;
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
  companyName: yup.string().required(REQUIRED.FIELD),
  fullName: yup.string().required(REQUIRED.FIELD),
  document: yup
    .string()
    .required(REQUIRED.FIELD)
    .matches(CPF_REGEX, INVALID.DOCUMENT_NATURAL),
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

export default function Dialog_RecipientForm() {
  const { toggleMenu, recipientFormOpened } = useMenuStore();

  const onSubmit = async (values: RecipientValues) => {
    console.log("🚀 ~ onSubmit ~ values:", values);
    try {
      // await mailing.registerInterest(values, lang);
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
    setValues
  } = useFormik({
    initialValues: {
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

    const previousRecipient = getLocalStorage(
      LOCAL_STORAGE.RECIPIENT
    ) as RecipientValues;
    if (Object.keys(previousRecipient).length) {
      setValues(previousRecipient);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggleModal = () => {
    toggleMenu(MENU.RECIPIENT_FORM);
  };

  return (
    <Dialog.Root open={recipientFormOpened} onOpenChange={toggleModal}>
      <Dialog.Portal>
        <Dialog.Overlay className="Dialog_Overlay" />
        <Dialog.Content className="Dialog_Container">
          <ScrollArea className="Scroll_Area">
            <section className="Dialog_Content">
              <Dialog.Title className="Dialog_Title">
                Cadastro de
                <br />
                <span className="text-primary">Donatário</span>
              </Dialog.Title>
              <Dialog.Description className="Dialog_Description">
                Insira seus dados para ser um dos nossos beneficiários.
              </Dialog.Description>
              <form className="Dialog_Form" onSubmit={handleSubmit} noValidate>
                <Input.Fieldset>
                  <Input.Label htmlFor="companyName" required>
                    Razão Social
                  </Input.Label>
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
                  <Input.Error>
                    {touched.document && errors.document}
                  </Input.Error>
                </Input.Fieldset>

                <Input.Fieldset>
                  <Input.Label htmlFor="fullName" required>
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
                  <Input.Error>
                    {touched.fullName && errors.fullName}
                  </Input.Error>
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
                  <Input.Error>
                    {touched.emailAddress && errors.emailAddress}
                  </Input.Error>
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
                  <Input.Error>
                    {touched.phoneNumber && errors.phoneNumber}
                  </Input.Error>
                </Input.Fieldset>

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
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.postalCode}
                      data-invalid={touched.postalCode && errors.postalCode}
                    />
                    <Input.Error>
                      {touched.postalCode && errors.postalCode}
                    </Input.Error>
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
                      data-invalid={
                        touched.countryDivision && errors.countryDivision
                      }
                    >
                      <option disabled value="0">
                        Selecione uma opção
                      </option>
                      {countryDivisions.map((countryDivision) => (
                        <option
                          key={countryDivision.abbreviation}
                          value={countryDivision.abbreviation}
                        >
                          {countryDivision.abbreviation} -{" "}
                          {countryDivision.name}
                        </option>
                      ))}
                    </Input.Select>
                    <Input.Error>
                      {touched.countryDivision && errors.countryDivision}
                    </Input.Error>
                  </Input.Fieldset>
                </Input.Group>

                <Input.Fieldset>
                  <Input.Label htmlFor="city" required>
                    Cidade
                  </Input.Label>
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
                  <Input.Label htmlFor="publicPlaceName" required>
                    Logradouro
                  </Input.Label>
                  <Input.Text
                    name="publicPlaceName"
                    id="publicPlaceName"
                    placeholder="Rua, Avenida, etc."
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.publicPlaceName}
                    data-invalid={
                      touched.publicPlaceName && errors.publicPlaceName
                    }
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
                      data-invalid={
                        touched.publicPlaceNumber && errors.publicPlaceNumber
                      }
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

                <Button
                  isLoading={isSubmitting}
                  type="submit"
                  className="h-[58px] px-8"
                >
                  Confirmar
                  <CaretRight size={16} />
                </Button>
              </form>
              <Dialog.Close asChild>
                <button className="Dialog_CloseButton" aria-label="Close">
                  <X size={32} />
                </button>
              </Dialog.Close>
            </section>
          </ScrollArea>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}