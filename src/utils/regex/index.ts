export const EMAIL_ADRESS_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
export const PHONE_NUMBER_REGEX =
  /^\([1-9]{2}\) (?:[2-8]|9[1-9])[0-9]{3}-[0-9]{4}$/i;
export const CPF_REGEX = /(^\d{3}\.\d{3}\.\d{3}-\d{2}$)/;
export const CNPJ_REGEX = /(^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$)/;
export const CPF_CNPJ_REGEX =
  /(^\d{3}\.\d{3}\.\d{3}-\d{2}$)|(^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$)/;
export const CEP_REGEX = /^\d{5}-\d{3}$/;
