import { Server as MirageServer } from "miragejs";

import { BFFs } from "@/constants";

import { routes } from "./routes";

export { Response } from "miragejs";

export function makeServer() {
  console.log("Mirage server enabled");
  return new MirageServer({
    urlPrefix: BFFs.GATEKEEPER,
    trackRequests: true,
    routes: function () {
      routes(this);
    }
  });
}
