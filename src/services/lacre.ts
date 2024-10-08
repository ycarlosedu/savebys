import { BuyerValues, YES_NO } from "@/components/Dialog/BuyerForm";
import { RegisterBuyer } from "@/models/lacre";
import { ACCEPTED_DOCUMENTS } from "@/models/savebys";

import { unmask } from "@/utils/masks";
import request from "@/utils/request";

import { BFFs } from "@/constants";

const createBuyerBody = (values: BuyerValues) => {
  const body: RegisterBuyer = {
    name: values.name,
    termsAccepted: values.terms,
    floodAffected: values.floodAffected === YES_NO.YES,
    howWereYouAffected: values.howWereYouAffected,
    howCanWeHelp: values.howCanWeHelp,
    documents: [
      {
        docValue: unmask(values.document),
        docName: ACCEPTED_DOCUMENTS[values.personType]
      },
      {
        docValue: values.cnae ? unmask(values.cnae) : "",
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
      cityDivision: values.cityDivision,
      publicPlaceName: values.publicPlaceName,
      publicPlaceNumber: values.publicPlaceNumber,
      addOn: values.addOn
    }
  };
  return body;
};

export type SignupBuyerResponse = {
  companyId: number;
};
export const generateSignupBuyerEndpoint = () =>
  `${BFFs.GATEKEEPER}/campaign/lacre`;
export const signupBuyer = async (
  values: BuyerValues
): Promise<SignupBuyerResponse> => {
  return request.post(generateSignupBuyerEndpoint(), createBuyerBody(values));
};
