"use server";

import { headerToEvaluationContext } from "@/libs/open-feature/evaluation-context";
import { CartItem } from "@/types/cart";
import { OpenFeature } from "@openfeature/server-sdk";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const context = headerToEvaluationContext(request.headers);
  const featureFlagClient = OpenFeature.getClient(context);
  const order = await request.json();
  console.log("Order received:", order);
  featureFlagClient.track("order_received", context, {
    value: order.items?.reduce((acc: number, i: CartItem) => {
      return acc + (i.price * i.quantity);
    }, 0),
  });

  return NextResponse.json({ message: "Order received successfully" });
}
