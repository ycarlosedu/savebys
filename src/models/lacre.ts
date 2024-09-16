import { Address, ContactInfo, Document } from "./savebys";

export type RegisterBuyer = {
  name: string;
  documents: Document[];
  contactInfo: ContactInfo;
  address: Address;
  termsAccepted: boolean;
  floodAffected: boolean;
};
