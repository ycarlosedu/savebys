export enum PERSON_TYPE {
  LEGAL = "LEGAL",
  NATURAL = "NATURAL"
}

export enum ACCEPTED_DOCUMENTS {
  LEGAL = "CNPJ",
  NATURAL = "CPF",
  CNAE = "CNAE"
}

export type Document = {
  docValue: string;
  docName: ACCEPTED_DOCUMENTS;
};

export type ContactInfo = {
  personName: string;
  email: string;
  phone: string;
  isWhatsApp: boolean;
};

export type Address = {
  postalCode: string;
  country: string;
  countryDivision: string;
  city: string;
  cityDivision?: string;
  publicPlaceName: string;
  publicPlaceNumber: string;
  addOn: string;
};
