"use server";
import { cookies } from "next/headers";

import { COOKIES } from "@/constants";

import { RecipientValuesWithId } from "./RecipientForm";

export const saveRecipient = async (recipient: RecipientValuesWithId) => {
  const oneYear = 1000 * 60 * 60 * 24 * 365;
  cookies().set(COOKIES.RECIPIENT, JSON.stringify(recipient), {
    secure: true,
    expires: Date.now() + oneYear
  });
};
