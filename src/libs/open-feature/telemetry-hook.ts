import type {
  AttributeValue,
  BaseHook,
  EvaluationDetails,
  FlagValue,
  HookContext,
} from "@openfeature/core";
// Importing from core so that it works on both the client and server
import { createEvaluationEvent } from "@openfeature/core";

export class TelemetryHook implements BaseHook {
  constructor(
    private readonly sendEvent: (
      event: Record<string, AttributeValue | undefined>
    ) => void
  ) {}

  finally(
    hookContext: Readonly<HookContext<FlagValue>>,
    evaluationDetails: EvaluationDetails<FlagValue>
  ) {
    const { attributes } = createEvaluationEvent(
      hookContext,
      evaluationDetails
    );
    this.sendEvent(attributes);
  }
}
