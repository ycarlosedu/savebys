"use server";
import { cookies } from "next/headers";

import { COOKIES } from "@/constants";

import { DonatorValuesWithId } from "./FormDonator";

export const saveDonator = async (donator: DonatorValuesWithId) => {
  const oneYear = 1000 * 60 * 60 * 24 * 365;
  cookies().set(COOKIES.DONATOR, JSON.stringify(donator), {
    secure: true,
    expires: Date.now() + oneYear
  });
};
