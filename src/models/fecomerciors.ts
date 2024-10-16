import { Address, ContactInfo, Document } from "./savebys";

export type RegisterDonator = {
  companyName: string;
  fullName: string;
  documents: Document[];
  contactInfo: ContactInfo;
  address: Address;
  termsAccepted: boolean;
};
