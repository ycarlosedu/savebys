import { Server as MirageServer } from "miragejs";

import { BFFs } from "@/constants";

import { routes } from "./routes";

export { Response } from "miragejs";

type Props = {
  trackRequests?: boolean;
  urlPrefix?: string;
};

const defaultOptions = {
  trackRequests: true,
  urlPrefix: BFFs.GATEKEEPER
};
export function makeServer({
  trackRequests,
  urlPrefix
}: Props = defaultOptions) {
  console.log("Mirage server enabled");
  return new MirageServer({
    urlPrefix,
    trackRequests,
    routes: function () {
      routes(this);
    }
  });
}

export function makeServerForSSR({ urlPrefix }: Props = defaultOptions) {
  console.log("Mirage SSR server enabled");
  return new MirageServer({
    urlPrefix,
    routes: function () {
      routes(this);
    }
  });
}
