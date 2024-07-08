"use client";

import { useEffect } from "react";

import { makeServer } from "@/mock/server";

export default function Mirage() {
  useEffect(() => {
    const server = makeServer();

    return () => {
      server.shutdown();
    };
  }, []);

  return null;
}
