"use client";
import Image from "next/image";

import Button from "@/components/Button";
import Dialog from "@/components/Dialog";
import { GLOBAL_SCROLL_QUERY } from "@/components/FloatingButton";
import Input from "@/components/Input";
import fecomerciorsServices from "@/services/fercomerciors";
import useMenuStore, { MENU } from "@/stores/menuStore";
import { useFormik } from "formik";
import { toast } from "sonner";
import * as yup from "yup";

import { scrollToTop } from "@/utils/scrollToTop";

import {
  DEFAULT_IMAGE_PATH,
  INVALID,
  LOCAL_STORAGE,
  REQUIRED,
  getLocalStorage
} from "@/constants";

import { CaretRight } from "@phosphor-icons/react/dist/ssr";

import furnitureCategories from "./furnitureCategories";

export type FurnitureValues = {
  image: string;
  productType: string;
  productDescription: string;
  quantity: number;
  aditionalInfo: string;
  city: string;
};

const validationSchema = yup.object().shape({
  image: yup
    .string()
    .required(REQUIRED.FILE)
    .notOneOf([DEFAULT_IMAGE_PATH], REQUIRED.FILE),
  productDescription: yup.string().required(REQUIRED.FIELD),
  productType: yup
    .string()
    .required(REQUIRED.RADIO)
    .oneOf(
      furnitureCategories.map((category) => category.value),
      REQUIRED.RADIO
    ),
  quantity: yup.number().min(1, INVALID.QUANTITY).required(REQUIRED.FIELD),
  aditionalInfo: yup.string(),
  city: yup.string().required(REQUIRED.FIELD)
});

export default function FormFurniture() {
  const { toggleMenu } = useMenuStore();
  const donatorId = getLocalStorage(LOCAL_STORAGE.DONATOR_ID, "");

  const onSubmit = async (values: FurnitureValues) => {
    try {
      await fecomerciorsServices.registerDonation(values, donatorId);
      toggleMenu(MENU.SUCESS_DONATE);
    } catch (error) {
      toast.error(
        "Ocorreu um erro ao cadastrar o móvel, tente novamente mais tarde!"
      );
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
    setFieldError,
    resetForm
  } = useFormik({
    initialValues: {
      image: DEFAULT_IMAGE_PATH,
      productDescription: "",
      quantity: 1,
      productType: furnitureCategories[0].value,
      aditionalInfo: "",
      city: ""
    },
    validationSchema,
    onSubmit
  });

  const onChangeImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files || !event.target.files[0]) return;

    const file = event.target.files[0];

    if (file.size > 1 * 1024 * 1024) {
      setFieldError("image", "A imagem deve ter menos de 1MB.");
      return toast.error("A imagem deve ter menos de 1MB.");
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      const image = e.target?.result as string;
      setFieldValue("image", image);
    };
    reader.readAsDataURL(event.target.files[0]);
  };

  const handleConfirmModal = () => {
    resetForm();
    toggleMenu(MENU.SUCESS_DONATE);
    scrollToTop({ element: GLOBAL_SCROLL_QUERY });
  };

  return (
    <>
      <form
        noValidate
        onSubmit={handleSubmit}
        className="w-full flex flex-col gap-6"
      >
        <Input.Fieldset>
          <div className="flex gap-5">
            <Image
              src={values.image}
              width={100}
              height={100}
              alt="Imagem do móvel a ser doado."
            />
            <div className="flex flex-col gap-3 justify-between">
              <p className="text-sm italic text-gray-dark">
                Selecione uma imagem (com menos de 1MB).
              </p>
              <Input.Label
                htmlFor="image"
                className="link-btn-secondary w-fit font-bold"
              >
                {values.image != DEFAULT_IMAGE_PATH
                  ? "Alterar Imagem"
                  : "Escolher Imagem"}
              </Input.Label>
              <Input.Text
                className="hidden"
                name="image"
                id="image"
                type="file"
                accept="image/*"
                onChange={onChangeImage}
                onBlur={handleBlur}
                value={""}
                data-invalid={touched.image && errors.image}
              />
            </div>
          </div>
          <Input.Error>{touched.image && errors.image}</Input.Error>
        </Input.Fieldset>

        <Input.Fieldset>
          <Input.Label htmlFor="productType" required>
            Categoria
          </Input.Label>
          <Input.Select
            name="productType"
            id="productType"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.productType}
            data-invalid={touched.productType && errors.productType}
          >
            <option disabled value="0">
              Selecione uma opção
            </option>
            {furnitureCategories.map((category) => (
              <option key={category.value} value={category.value}>
                {category.name}
              </option>
            ))}
          </Input.Select>
          <Input.Error>{touched.productType && errors.productType}</Input.Error>
        </Input.Fieldset>

        <Input.Fieldset>
          <Input.Label htmlFor="productDescription" required>
            Descrição
          </Input.Label>
          <Input.Text
            name="productDescription"
            id="productDescription"
            placeholder="ex: móvel rústico, de escritório, possui defeito na porta."
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.productDescription}
            data-invalid={
              touched.productDescription && errors.productDescription
            }
          />
          <Input.Error>
            {touched.productDescription && errors.productDescription}
          </Input.Error>
        </Input.Fieldset>

        <Input.Fieldset>
          <Input.Label htmlFor="quantity" required>
            Quantidade
          </Input.Label>
          <Input.Text
            name="quantity"
            id="quantity"
            type="number"
            min={1}
            placeholder="Quantidade deste item disponível para doação."
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.quantity}
            data-invalid={touched.quantity && errors.quantity}
          />
          <Input.Error>{touched.quantity && errors.quantity}</Input.Error>
        </Input.Fieldset>

        <Input.Fieldset>
          <Input.Label htmlFor="aditionalInfo">
            Informações Complementares (tamanho, cor, material)
          </Input.Label>
          <Input.Text
            name="aditionalInfo"
            id="aditionalInfo"
            placeholder="ex: 2m², vermelho, de madeira"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.aditionalInfo}
            data-invalid={touched.aditionalInfo && errors.aditionalInfo}
          />
          <Input.Error>
            {touched.aditionalInfo && errors.aditionalInfo}
          </Input.Error>
        </Input.Fieldset>

        <Input.Fieldset>
          <Input.Label htmlFor="city" required>
            Cidade
          </Input.Label>
          <Input.Text
            name="city"
            id="city"
            placeholder="Onde está localizado o móvel?"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.city}
            data-invalid={touched.city && errors.city}
          />
          <Input.Error>{touched.city && errors.city}</Input.Error>
        </Input.Fieldset>

        <Button
          type="submit"
          isLoading={isSubmitting}
          className="h-[58px] px-8"
        >
          Salvar Móvel
          <CaretRight size={16} />
        </Button>
      </form>
      <Dialog.DonateSuccess onConfirm={handleConfirmModal} />
    </>
  );
}
