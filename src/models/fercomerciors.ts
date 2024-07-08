export enum PERSON_TYPE {
  LEGAL = "LEGAL",
  NATURAL = "NATURAL"
}

export enum PERSON_TYPE_DOCUMENT {
  LEGAL = "CNPJ",
  NATURAL = "CPF"
}

type Document = {
  document: string;
  type: PERSON_TYPE_DOCUMENT;
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
};
