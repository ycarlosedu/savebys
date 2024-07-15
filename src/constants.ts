import { ReadonlyRequestCookies } from "next/dist/server/web/spec-extension/adapters/request-cookies";

export enum BFFs {
  // GATEKEEPER = "https://app-sk5dez4kca-uc.a.run.app"
  // GATEKEEPER = "http://localhost:3000/api"
  // GATEKEEPER = "https://savebys-git-feat-fecomercio-ycarlosedus-projects.vercel.app/api"
  GATEKEEPER = "https://api-core-ae35f35ec0a3.herokuapp.com"
}

export const DEFAULT_ERROR_MESSAGE =
  "Ocorreu um erro, tente novamente mais tarde!";

export const getBooleanEnvVariable = (variable: string) => {
  return process.env[variable] === "true";
};

export const setLocalStorage = (key: string, value: unknown) => {
  if (typeof window != "undefined") {
    localStorage.setItem(key, JSON.stringify(value));
  }
};

export const sliceMaxLength = (text: string, maxLength: number) => {
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
};

export const getLocalStorage = (key: string, defaultValue: unknown = {}) => {
  if (typeof window === "undefined") return defaultValue;

  const value = localStorage.getItem(key);
  return value ? JSON.parse(value) : defaultValue;
};

export const getCookies = (
  cookieStore: ReadonlyRequestCookies,
  key: COOKIES,
  defaultValue: unknown = {}
) => {
  const cookie = cookieStore.get(key);
  return cookie?.value ? JSON.parse(cookie.value) : defaultValue;
};

export enum SESSION_STORAGE {
  PRODUCTS = "products"
}

export enum COOKIES {
  DONATOR = "donator",
  RECIPIENT = "recipient"
}

export const REQUIRED = {
  FIELD: "O campo não pode estar vazio.",
  RADIO: "Deve ser selecionada uma opção.",
  FILE: "Deve ser selecionado um arquivo.",
  MIN_LENGTH: (min: number) =>
    `O campo não pode ter menos de ${min} caracteres.`,
  MAX_LENGTH: (max: number) => `O campo não pode ter mais de ${max} caracteres.`
};

export const INVALID = {
  EMAIL: "E-mail inválido.",
  PHONE: "Número de telefone inválido.",
  DOCUMENT: "Documento inválido.",
  DOCUMENT_LEGAL: "CNPJ inválido.",
  DOCUMENT_NATURAL: "CPF inválido.",
  POSTAL_CODE: "CEP inválido.",
  QUANTITY: "Quantidade inválida."
};

export const PAGE = {
  HOME: "/",
  FECOMERCIO: {
    HOME: "/fecomerciors",
    REGISTER_DONATOR: "/fecomerciors/cadastro-doador",
    REGISTER_FURNITURE: "/fecomerciors/cadastro-movel",
    FURNITURE_LIST: "/fecomerciors/moveis-para-doacao",
    FURNITURE_DETAILS: (id: string) => `/fecomerciors/moveis-para-doacao/${id}`,
    FURNITURE_BAG: "/fecomerciors/minha-sacola"
  }
};

export const DEFAULT_IMAGE_PATH = "/images/placeholder-image.png";
