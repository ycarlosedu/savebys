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

type ContactInfo = {
  personName: string;
  email: string;
  phone: string;
  isWhatsApp: boolean;
};

type Address = {
  postalCode: string;
  country: string;
  countryDivision: string;
  city: string;
  publicPlaceName: string;
  publicPlaceNumber: string;
  addOn: string;
};

export type RegisterDonator = {
  companyName: string;
  fullName: string;
  documents: Document[];
  contactInfo: ContactInfo;
  address: Address;
  termsAccepted: boolean;
};
