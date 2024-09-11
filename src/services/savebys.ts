import request from "@/utils/request";

export type getCEPResponse = {
  cep: string; // "01001-000",
  logradouro: string; // "Praça da Sé",
  complemento: string; // "lado ímpar",
  unidade: string; // "",
  bairro: string; // "Sé",
  localidade: string; // "São Paulo",
  uf: string; // "SP",
  estado: string; // "São Paulo",
  regiao: string; // "Sudeste",
  ibge: string; // "3550308",
  gia: string; // "1004",
  ddd: string; // "11",
  siafi: string; // "7107",
  erro?: "true";
};
export const generateGetCEPEndpoint = (cep: string) =>
  `https://viacep.com.br/ws/${cep}/json/`;
export const getAddressByCEP = async (cep: string): Promise<getCEPResponse> => {
  return request.get(generateGetCEPEndpoint(cep));
};

const savebysServices = {
  getAddressByCEP
};

export default savebysServices;
