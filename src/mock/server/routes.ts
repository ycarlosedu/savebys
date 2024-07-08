import fixtures from "@/mock/fixtures/fecomerciors.json";
import {
  generateSignupCompanyEndpoint,
  generateSignupIndividualEndpoint
} from "@/services/fercomerciors";
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

  server.passthrough();
}
