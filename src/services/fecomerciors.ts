import { DonatorValues } from "@/app/fecomerciors/cadastro-doador/FormDonator";
import { FurnitureValues } from "@/app/fecomerciors/cadastro-movel/FormFurniture";
import { PERSON_TYPE_DOCUMENT, RegisterDonator } from "@/models/fecomerciors";

import { unmask } from "@/utils/masks";
import request from "@/utils/request";

import { BFFs } from "@/constants";

const createDonatorBody = (values: DonatorValues) => {
  const body: RegisterDonator = {
    companyName: values.companyName,
    fullName: values.fullName,
    documents: [
      {
        document: unmask(values.document),
        type: PERSON_TYPE_DOCUMENT[values.personType]
      }
    ],
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
  values: DonatorValues
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

const fecomerciorsServices = {
  signupCompany,
  signupIndividual,
  registerDonation,
  getProducts
};

export default fecomerciorsServices;
