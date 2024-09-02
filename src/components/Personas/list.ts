import {
  HandCoins,
  HandHeart,
  UserCircleCheck
} from "@phosphor-icons/react/dist/ssr";

const list = [
  {
    title: "CURADOR",
    icon: UserCircleCheck,
    description: "Abre as campanhas, mapeia e valida as necessidades.",
    topics: [
      "Escolhe o tipo de doação desejada;",
      "Recebe as doações (em caso de campanha monetária) e realiza a distribuição dos valores."
    ]
  },
  {
    title: "DOADOR",
    icon: HandHeart,
    description: "Irá ajudar com qualquer quantidade de dinheiro ou insumos.",
    topics: ["Escolhe as campanhas que quer ajudar;", "Realiza as doações."]
  },
  {
    title: "DONATÁRIO",
    icon: HandCoins,
    description: "Receberá as doações (em caso de campanha de produtos).",
    topics: [
      "Escolhe os produtos que necessita;",
      "Faz a solicitação dos insumos;",
      "Combina a entrega."
    ]
  }
];

export default list;
