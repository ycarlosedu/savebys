"use client";

import { useEffect } from "react";

import useProductStore from "@/stores/productStore";

export default function Hydrations() {
  useEffect(() => {
    useProductStore.persist.rehydrate();
  }, []);

  return null;
}
