"use client";

import { useSuspenseQuery } from "@tanstack/react-query";
import type { Product } from "@/types/product";
import { getBaseUrl } from "@/libs/url";
import { setTargetingKeyHeader } from "@/libs/open-feature/evaluation-context";
import { TARGETING_KEY } from "@/libs/targeting-key";

export function useProducts() {
  const { data } = useSuspenseQuery({
    queryKey: ["products"],
    queryFn: async ({ meta }): Promise<Product[]> => {
      console.log("fetching products");
      const res = await fetch(getBaseUrl() + "/api/products", {
        cache: "no-store",
        headers: setTargetingKeyHeader(TARGETING_KEY),
      });
      if (!res.ok) {
        throw new Error("Failed to fetch products");
      }
      return res.json();
    },
  });
  return data;
}

export function useProduct(id: string) {
  const { data } = useSuspenseQuery({
    queryKey: ["products", id],
    queryFn: async ({ meta }): Promise<Product> => {
      console.log(`fetching product ${id}`);
      const res = await fetch(getBaseUrl() + `/api/products/${id}`, {
        cache: "no-store",
        headers: setTargetingKeyHeader(TARGETING_KEY),
      });
      if (!res.ok) {
        throw new Error("Failed to fetch products");
      }
      return res.json();
    },
  });
  return data;
}
