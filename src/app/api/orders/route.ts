"use server";

import { NextResponse } from "next/server";
import { OpenFeature } from "@openfeature/server-sdk";
import { headerToEvaluationContext } from "@/libs/open-feature/evaluation-context";
import { Product } from "@/types/product";

export async function POST(request: Request) {
  const context = headerToEvaluationContext(request.headers);
  const featureFlagClient = OpenFeature.getClient(context);
  const order = await request.json();
  console.log("Order received:", order);
  featureFlagClient.track("order_received", context, {
    value: order.items?.reduce((acc: number, i: Product) => {
      return acc + i.price;
    }, 0),
  });

  return NextResponse.json({ message: "Order received successfully" });
}
