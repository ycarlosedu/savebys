"use client";
import Image from "next/image";

import Input from "@/components/Input";
import { DEFAULT_IMAGE_PATH, REQUIRED } from "@/contants";
import { useFormik } from "formik";
import { toast } from "sonner";
import * as yup from "yup";

import { CaretRight } from "@phosphor-icons/react/dist/ssr";

import furnitureCategories from "./furnitureCategories";

export type FurnitureValues = {
  image: string;
  description: string;
  quantity: number;
  category: string;
  sizeAndColor: string;
  material: string;
};

const validationSchema = yup.object().shape({
  image: yup
    .string()
    .required(REQUIRED.FILE)
    .notOneOf([DEFAULT_IMAGE_PATH], REQUIRED.FILE),
  description: yup.string().required(REQUIRED.FIELD),
  quantity: yup.number().required(REQUIRED.FIELD),
  category: yup
    .string()
    .required(REQUIRED.RADIO)
    .oneOf(
      furnitureCategories.map((category) => category.value),
      REQUIRED.RADIO
    ),
  sizeAndColor: yup.string(),
  material: yup.string()
});

export default function FormFurniture() {
  const onSubmit = async (values: FurnitureValues) => {
    try {
      setTimeout(() => {
        console.log("🚀 ~ onSubmit ~ values:", values);
      }, 2000);
      // await mailing.registerInterest(values, lang);
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
    setFieldError
  } = useFormik({
    initialValues: {
      image: DEFAULT_IMAGE_PATH,
      description: "",
      quantity: 1,
      category: furnitureCategories[0].value,
      sizeAndColor: "",
      material: ""
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

  return (
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
        <Input.Label htmlFor="description">Descrição</Input.Label>
        <Input.Text
          name="description"
          id="description"
          placeholder="ex: móvel rústico, de escritório, possui defeito na porta."
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.description}
          data-invalid={touched.description && errors.description}
        />
        <Input.Error>{touched.description && errors.description}</Input.Error>
      </Input.Fieldset>

      <Input.Fieldset>
        <Input.Label htmlFor="quantity">Quantidade</Input.Label>
        <Input.Text
          name="quantity"
          id="quantity"
          type="number"
          placeholder="Quantidade deste item disponível para doação."
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.quantity}
          data-invalid={touched.quantity && errors.quantity}
        />
        <Input.Error>{touched.quantity && errors.quantity}</Input.Error>
      </Input.Fieldset>

      <Input.Fieldset>
        <Input.Label htmlFor="category">Categoria</Input.Label>
        <Input.Select
          name="category"
          id="category"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.category}
          data-invalid={touched.category && errors.category}
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
        <Input.Error>{touched.category && errors.category}</Input.Error>
      </Input.Fieldset>

      <Input.Fieldset>
        <Input.Label htmlFor="sizeAndColor">
          Tamanho e Cor (Aproximados)
        </Input.Label>
        <Input.Text
          name="sizeAndColor"
          id="sizeAndColor"
          placeholder="ex: 2x2m, Vermelho"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.sizeAndColor}
          data-invalid={touched.sizeAndColor && errors.sizeAndColor}
        />
        <Input.Error>{touched.sizeAndColor && errors.sizeAndColor}</Input.Error>
      </Input.Fieldset>

      <Input.Fieldset>
        <Input.Label htmlFor="material">Material</Input.Label>
        <Input.Text
          name="material"
          id="material"
          placeholder="ex: Madeira"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.material}
          data-invalid={touched.material && errors.material}
        />
        <Input.Error>{touched.material && errors.material}</Input.Error>
      </Input.Fieldset>

      <button
        type="submit"
        disabled={isSubmitting}
        className="link-btn h-[58px] px-8"
      >
        Salvar Móvel
        <CaretRight size={16} />
      </button>
    </form>
  );
}
