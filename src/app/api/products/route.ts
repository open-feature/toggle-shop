"use server";

import { NextResponse } from "next/server";
import { getConnection } from "@/db";
import { headerToEvaluationContext } from "@/libs/open-feature/evaluation-context";
import { getGeneratedClient } from "@/generated/nodejs/openfeature";

export async function GET(req: Request) {
  const featureFlagClient = getGeneratedClient(
    headerToEvaluationContext(req.headers)
  );
  const db = await getConnection(featureFlagClient);
  const products = await db.list("products");
  return NextResponse.json(products);
}
