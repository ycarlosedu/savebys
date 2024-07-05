"use client";

import { useRouter } from "next/navigation";

import Input from "@/components/Input";
import { INVALID, PAGE, REQUIRED } from "@/contants";
import { useFormik } from "formik";
import { toast } from "sonner";
import * as yup from "yup";

import { CEP_MASK, CNPJMask, CPF_MASK, PHONE_NUMBER_MASK } from "@/utils/masks";
import { CEP_REGEX, CPF_CNPJ_REGEX, PHONE_NUMBER_REGEX } from "@/utils/regex";

import { CaretRight } from "@phosphor-icons/react/dist/ssr";

export type DonatorValues = {
  name: string;
  document: string;
  emailAddress: string;
  phoneNumber: string;
  cep: string;
};

const validationSchema = yup.object().shape({
  name: yup.string().required(REQUIRED.FIELD),
  document: yup
    .string()
    .matches(CPF_CNPJ_REGEX, INVALID.DOCUMENT)
    .required(REQUIRED.FIELD),
  emailAddress: yup.string().required(REQUIRED.FIELD).email(INVALID.EMAIL),
  phoneNumber: yup
    .string()
    .matches(PHONE_NUMBER_REGEX, INVALID.PHONE)
    .required(REQUIRED.FIELD),
  cep: yup.string().matches(CEP_REGEX, INVALID.CEP).required(REQUIRED.FIELD)
});

export default function FormDonator() {
  const router = useRouter();

  const previousDonator: DonatorValues = JSON.parse(
    localStorage.getItem("donator") || "{}"
  );

  const onSubmit = async (values: DonatorValues) => {
    console.log("🚀 ~ onSubmit ~ values:", values);
    try {
      // await mailing.registerInterest(values, lang);
      localStorage.setItem("donator", JSON.stringify(values));
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
    isSubmitting
  } = useFormik({
    initialValues: {
      name: previousDonator.name || "",
      document: previousDonator.document || "",
      emailAddress: previousDonator.emailAddress || "",
      phoneNumber: previousDonator.phoneNumber || "",
      cep: previousDonator.cep || ""
    },
    validationSchema,
    onSubmit
  });

  return (
    <form
      noValidate
      onSubmit={handleSubmit}
      className="w-full flex flex-col gap-6"
    >
      <Input.Fieldset>
        <Input.Label htmlFor="name">Nome Completo</Input.Label>
        <Input.Text
          name="name"
          id="name"
          placeholder="Como se chama?"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.name}
          data-invalid={touched.name && errors.name}
        />
        <Input.Error>{touched.name && errors.name}</Input.Error>
      </Input.Fieldset>

      <Input.Fieldset>
        <Input.Label htmlFor="document">CPF ou CNPJ</Input.Label>
        <Input.Mask
          name="document"
          id="document"
          type="text"
          placeholder="11.111.111/0001-00"
          mask={values.document.length <= 14 ? CPF_MASK : CNPJMask}
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.document}
          data-invalid={touched.document && errors.document}
          guide={false}
        />
        <Input.Error>{touched.document && errors.document}</Input.Error>
      </Input.Fieldset>

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

      <Input.Fieldset>
        <Input.Label htmlFor="cep">CEP</Input.Label>
        <Input.Mask
          name="cep"
          id="cep"
          placeholder="99999-999"
          mask={CEP_MASK}
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.cep}
          data-invalid={touched.cep && errors.cep}
        />
        <Input.Error>{touched.cep && errors.cep}</Input.Error>
      </Input.Fieldset>

      <button
        type="submit"
        disabled={isSubmitting}
        className="link-btn h-[58px] px-8"
      >
        Avançar
        <CaretRight size={16} />
      </button>
    </form>
  );
}
