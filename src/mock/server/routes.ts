import fixtures from "@/mock/fixtures/fecomerciors.json";
import {
  generateGetProductsEndpoint,
  generateReceiveDonationEndpoint,
  generateRegisterDonationEndpoint,
  generateSignupCompanyEndpoint,
  generateSignupIndividualEndpoint
} from "@/services/fecomerciors";
import { Response, Server } from "miragejs";

import { BFFs } from "@/constants";

const headers = {
  ContentType: "application/json"
};

export function routes(server: Server) {
  server.namespace = BFFs.GATEKEEPER;

  server.post(
    generateSignupCompanyEndpoint(),
    () => new Response(200, headers, fixtures.signupCompany)
  );

  server.post(
    generateSignupIndividualEndpoint(),
    () => new Response(200, headers, fixtures.signupIndividual)
  );

  server.post(generateRegisterDonationEndpoint(), () => new Response(200));

  server.post(generateReceiveDonationEndpoint(), () => new Response(200));

  server.get(
    generateGetProductsEndpoint(),
    () => new Response(200, headers, fixtures.furnitures)
  );

  server.passthrough();
}
