export enum BFFs {
  GATEKEEPER = "https://app-sk5dez4kca-uc.a.run.app"
}

export const DEFAULT_ERROR_MESSAGE =
  "Ocorreu um erro, tente novamente mais tarde!";

export const getBooleanEnvVariable = (variable: string) => {
  return process.env[variable] === "true";
};

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
  DOCUMENT: "CPF/CNPJ inválido.",
  DOCUMENT_LEGAL: "CNPJ inválido.",
  DOCUMENT_NATURAL: "CPF inválido.",
  POSTAL_CODE: "CEP inválido."
};

export const PAGE = {
  HOME: "/",
  FECOMERCIO: {
    HOME: "/fecomerciors",
    REGISTER_DONATOR: "/fecomerciors/cadastro-doador",
    REGISTER_FURNITURE: "/fecomerciors/cadastro-movel"
  }
};

export const DEFAULT_IMAGE_PATH = "/images/placeholder-image.png";
