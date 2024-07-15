"use server";
import { cookies } from "next/headers";

import { DonatorValuesWithId } from "@/app/fecomerciors/cadastro-doador/FormDonator";
import { RecipientValuesWithId } from "@/components/Dialog/RecipientForm";

import { COOKIES } from "@/constants";

const oneYear = 1000 * 60 * 60 * 24 * 365;

export const saveDonator = async (donator: DonatorValuesWithId) => {
  cookies().set(COOKIES.DONATOR, JSON.stringify(donator), {
    secure: true,
    expires: Date.now() + oneYear
  });
};

export const saveRecipient = async (recipient: RecipientValuesWithId) => {
  cookies().set(COOKIES.RECIPIENT, JSON.stringify(recipient), {
    secure: true,
    expires: Date.now() + oneYear
  });
};
