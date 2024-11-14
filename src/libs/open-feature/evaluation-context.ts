import type { EvaluationContext } from "@openfeature/core";

const TARGETING_KEY_HEADER = "x-targeting-key";

export function setTargetingKeyHeader(
  targetingKey: string
): Record<string, string> {
  return {
    [TARGETING_KEY_HEADER]: targetingKey,
  };
}

export function headerToEvaluationContext(
  headers: Headers
): EvaluationContext | undefined {
  const targetingKey = headers.get(TARGETING_KEY_HEADER);
  if (targetingKey) {
    return { targetingKey };
  }

  return undefined;
}
