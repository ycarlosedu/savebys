import { DonatorValues } from "@/app/fecomerciors/cadastro-doador/FormDonator";
import { FurnitureValues } from "@/app/fecomerciors/cadastro-movel/FormFurniture";
import { RecipientValues } from "@/components/Dialog/RecipientForm";
import fixtures from "@/mock/fixtures/fecomerciors.json";
import { ACCEPTED_DOCUMENTS, RegisterDonator } from "@/models/fecomerciors";

import { unmask } from "@/utils/masks";
import request from "@/utils/request";

import { BFFs } from "@/constants";

function isRecipient(
  values: DonatorValues | RecipientValues
): values is RecipientValues {
  return (<RecipientValues>values).cnae !== undefined;
}

const createDonatorBody = (values: DonatorValues | RecipientValues) => {
  const body: RegisterDonator = {
    companyName: values.companyName,
    fullName: values.fullName,
    documents: [
      {
        document: unmask(values.document),
        type: ACCEPTED_DOCUMENTS[values.personType]
      },
      {
        document: isRecipient(values) ? unmask(values.cnae) : "",
        type: ACCEPTED_DOCUMENTS.CNAE
      }
    ].filter((doc) => doc.document != ""),
    contactInfo: {
      personName: values.fullName,
      email: values.emailAddress,
      phone: unmask(values.phoneNumber),
      isWhatsApp: true
    },
    address: {
      postalCode: unmask(values.postalCode),
      country: "BR",
      countryDivision: values.countryDivision,
      city: values.city,
      publicPlaceName: values.publicPlaceName,
      publicPlaceNumber: values.publicPlaceNumber,
      addOn: values.addOn
    }
  };
  return body;
};

export type SignupCompanyResponse = {
  companyId: string;
};
export const generateSignupCompanyEndpoint = () =>
  `${BFFs.GATEKEEPER}/signup/companies`;
export const signupCompany = async (
  values: DonatorValues | RecipientValues
): Promise<SignupCompanyResponse> => {
  return request.post(
    generateSignupCompanyEndpoint(),
    createDonatorBody(values)
  );
};

export type SignupIndividualResponse = {
  individualId: string;
};
export const generateSignupIndividualEndpoint = () =>
  `${BFFs.GATEKEEPER}/signup/individuals`;
export const signupIndividual = async (
  values: DonatorValues
): Promise<SignupIndividualResponse> => {
  return request.post(
    generateSignupIndividualEndpoint(),
    createDonatorBody(values)
  );
};

export const generateReceiveDonationEndpoint = () =>
  `${BFFs.GATEKEEPER}/donation/receving`;
export const receiveDonation = async (
  products: Product[],
  recipientId: string
) => {
  const body = {
    products: products.map((product) => ({
      id: product.id,
      quantity: product.quantitySelected
    })),
    recipientId
  };
  return request.post(generateReceiveDonationEndpoint(), body);
};

export const generateRegisterDonationEndpoint = () =>
  `${BFFs.GATEKEEPER}/donation/giving`;
export const registerDonation = async (
  values: FurnitureValues,
  donatorId: string
) => {
  return request.post(generateRegisterDonationEndpoint(), {
    ...values,
    donatorId
  });
};

export type Product = {
  id: string;
  description: string;
  city: string;
  image: string;
  quantity: number;
  quantitySelected?: number;
  additionalInfo?: string;
};
export type getProductsResponse = {
  page: number;
  pageSize: number;
  numberOfPages: number;
  products: Product[];
};
export const generateGetProductsEndpoint = () => `${BFFs.GATEKEEPER}/products`;
export const getProducts = async (
  page: number = 1,
  category: string = "Todos"
): Promise<getProductsResponse> => {
  const categoryFilter = category === "Todos" ? "" : `&category=${category}`;
  return request.get(
    generateGetProductsEndpoint() + `?page=${page}${categoryFilter}`
  );
};

export const generateGetProductByIdEndpoint = (id: string = "1") =>
  `${BFFs.GATEKEEPER}/products/${id}`;
export const getProductById = async (id: string = "1"): Promise<Product> => {
  // return request.get(generateGetProductByIdEndpoint(id));
  const promise = new Promise<Product>((resolve) => {
    setTimeout(() => {
      const product = fixtures.furnitures.products.find(
        (furniture) => furniture.id === id
      );
      if (!product) {
        throw new Error("Product not found");
      }
      resolve(product);
    }, 1000);
  });
  return promise;
};

const fecomerciorsServices = {
  signupCompany,
  signupIndividual,
  receiveDonation,
  registerDonation,
  getProducts,
  getProductById
};

export default fecomerciorsServices;
