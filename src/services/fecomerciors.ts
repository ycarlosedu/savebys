import { DonatorValues } from "@/app/fecomerciors/cadastro-doador/FormDonator";
import { FurnitureValues } from "@/app/fecomerciors/cadastro-movel/FormFurniture";
import { RecipientValues } from "@/components/Dialog/RecipientForm";
import { RegisterDonator } from "@/models/fecomerciors";
import { ACCEPTED_DOCUMENTS } from "@/models/savebys";

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
    termsAccepted: values.terms,
    documents: [
      {
        docValue: unmask(values.document),
        docName: ACCEPTED_DOCUMENTS[values.personType]
      },
      {
        docValue: isRecipient(values) ? unmask(values.cnae) : "",
        docName: ACCEPTED_DOCUMENTS.CNAE
      }
    ].filter((doc) => doc.docValue != ""),
    contactInfo: {
      personName: values.fullName,
      email: values.emailAddress,
      phone: unmask(values.phoneNumber),
      isWhatsApp: values.isWhatsApp
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
  companyId: number;
};
export const generateSignupCompanyEndpoint = () =>
  `${BFFs.GATEKEEPER}/signup/company`;
export const signupCompany = async (
  values: DonatorValues | RecipientValues
): Promise<SignupCompanyResponse> => {
  return request.post(
    generateSignupCompanyEndpoint(),
    createDonatorBody(values)
  );
};

export type SignupIndividualResponse = {
  individualId: number;
};
export const generateSignupIndividualEndpoint = () =>
  `${BFFs.GATEKEEPER}/signup/individual`;
export const signupIndividual = async (
  values: DonatorValues
): Promise<SignupIndividualResponse> => {
  return request.post(
    generateSignupIndividualEndpoint(),
    createDonatorBody(values)
  );
};

export const generateReceiveDonationEndpoint = () =>
  `${BFFs.GATEKEEPER}/donation/receiving`;
export const receiveDonation = async (products: Product[], doneeId: number) => {
  const body = {
    products: products.map((product) => ({
      id: product.id,
      quantity: product.quantitySelected
    })),
    doneeId
  };
  return request.post(generateReceiveDonationEndpoint(), body);
};

export const generateRegisterDonationEndpoint = () =>
  `${BFFs.GATEKEEPER}/donation/giving`;
export const registerDonation = async (
  values: FurnitureValues,
  giverId: number
) => {
  return request.post(generateRegisterDonationEndpoint(), {
    ...values,
    giverId
  });
};

export type Product = {
  id: string;
  productType: string;
  productDescription: string;
  city: string;
  image: string;
  quantity: number;
  quantitySelected?: number;
  additionalInfos?: string;
};
export type getProductsResponse = {
  page: number;
  pageSize: number;
  numberOfPages: number;
  products: Product[];
};
type ProductResponse = {
  content: Product[];
  pageable: {
    pageNumber: number;
    pageSize: number;
  };
  totalPages: number;
};
export const generateGetProductsEndpoint = () => `${BFFs.GATEKEEPER}/products`;
export const getProducts = async (
  pageNumber: number = 0,
  category: string = "ALL"
): Promise<getProductsResponse> => {
  const categoryFilter = category === "ALL" ? "" : `&category=${category}`;
  const { content, pageable, totalPages }: ProductResponse = await request.get(
    generateGetProductsEndpoint() +
      `?pageNumber=${pageNumber}${categoryFilter}`,
    {
      cache: "no-store"
    }
  );

  return {
    page: pageable.pageNumber,
    pageSize: pageable.pageSize,
    numberOfPages: totalPages,
    products: content
  };
};

export const generateGetProductByIdEndpoint = (id: string = "1") =>
  `${BFFs.GATEKEEPER}/products/${id}`;
export const getProductById = async (id: string = "1"): Promise<Product> => {
  return request.get(generateGetProductByIdEndpoint(id), {
    cache: "no-store"
  });
};

export type DonatedProduct = {
  description: string;
  city: string;
  image: string;
  donatedQuantity: number;
};
type RecentDonations = {
  products: DonatedProduct[];
  totalDonations: number;
};
export const generateGetRecentDonationsEndpoint = () =>
  `${BFFs.GATEKEEPER}/donation/recents`;
export const getRecentDonations = async (): Promise<RecentDonations> => {
  return request.get(
    generateGetRecentDonationsEndpoint() + "?howManyToShow=10",
    {
      cache: "no-store"
    }
  );
};

const fecomerciorsServices = {
  signupCompany,
  signupIndividual,
  receiveDonation,
  registerDonation,
  getProducts,
  getProductById,
  getRecentDonations
};

export default fecomerciorsServices;
