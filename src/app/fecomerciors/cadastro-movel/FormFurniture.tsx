"use client";
import Image from "next/image";

import Input from "@/components/Input";
import { REQUIRED } from "@/contants";
import { useFormik } from "formik";
import { toast } from "sonner";
import * as yup from "yup";

import { CaretRight } from "@phosphor-icons/react/dist/ssr";

export type FurnitureValues = {
  image: string;
  description: string;
  quantity: number;
  sector: string;
  sizeAndColor: string;
  material: string;
};

const validationSchema = yup.object().shape({
  image: yup.string().required(REQUIRED.FILE),
  description: yup.string().required(REQUIRED.FIELD),
  quantity: yup.number().required(REQUIRED.FIELD),
  sector: yup.string().required(REQUIRED.FIELD),
  sizeAndColor: yup.string().required(REQUIRED.FIELD),
  material: yup.string().required(REQUIRED.FIELD)
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
    isSubmitting
  } = useFormik({
    initialValues: {
      image: "",
      description: "",
      quantity: 1,
      sector: "",
      sizeAndColor: "",
      material: ""
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
        <div className="flex gap-5">
          <Image
            src="/images/placeholder-image.png"
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
              Escolher Imagem
            </Input.Label>
            <Input.Text
              className="hidden"
              name="image"
              id="image"
              type="file"
              accept="image/*"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.image}
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
        <Input.Label htmlFor="sector">Tipo</Input.Label>
        <Input.Select
          name="sector"
          id="sector"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.sector}
          data-invalid={touched.sector && errors.sector}
        >
          <option disabled selected value="0">
            Selecione uma opção
          </option>
          <option value="Educação">Educação</option>
          <option value="Hotelaria/Restaurantes">Hotelaria/Restaurantes</option>
          <option value="Materiais de Escritório">
            Materiais de Escritório
          </option>
          <option value="Salões de Beleza">Salões de Beleza</option>
          <option value="Supermercado">Supermercado</option>
          <option value="Varejo">Varejo</option>
          <option value="Outras">Outras</option>
        </Input.Select>
        <Input.Error>{touched.sector && errors.sector}</Input.Error>
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
