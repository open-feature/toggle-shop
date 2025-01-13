import type {
  BaseHook,
  EvaluationDetails,
  FlagValue,
  HookContext,
} from "@openfeature/core";
import {
  ATTR_FEATURE_FLAG_CONTEXT_ID,
  ATTR_FEATURE_FLAG_ERROR_CODE,
  ATTR_FEATURE_FLAG_ERROR_MESSAGE,
  ATTR_FEATURE_FLAG_KEY,
  ATTR_FEATURE_FLAG_PROVIDER,
  ATTR_FEATURE_FLAG_REASON,
  ATTR_FEATURE_FLAG_SET_ID,
  ATTR_FEATURE_FLAG_VALUE,
  ATTR_FEATURE_FLAG_VARIANT,
  ATTR_FEATURE_FLAG_VERSION,
} from "./proposed-attributes";

export class TelemetryHook implements BaseHook {
  constructor(
    private readonly sendEvent: (
      event: Record<string, string | number | boolean>
    ) => void
  ) {}

  finally(
    hookContext: Readonly<HookContext<FlagValue>>,
    evaluationDetails: EvaluationDetails<FlagValue>
  ) {
    this.sendEvent({
      [ATTR_FEATURE_FLAG_KEY]: hookContext.flagKey,
      [ATTR_FEATURE_FLAG_PROVIDER]: hookContext.providerMetadata.name,
      ...(evaluationDetails.variant
        ? {
            [ATTR_FEATURE_FLAG_VARIANT]: evaluationDetails.variant,
          }
        : {
            // Opt-in? Only set if value exists.
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            [ATTR_FEATURE_FLAG_VALUE]: evaluationDetails.value as any,
            // TODO add value type and stringify value
          }),
      // Switch to map?
      [ATTR_FEATURE_FLAG_REASON]: (
        evaluationDetails.reason ?? "UNKNOWN"
      ).toLowerCase(),
      // Optional fields
      ...(evaluationDetails.flagMetadata["contextId"]
        ? {
            [ATTR_FEATURE_FLAG_CONTEXT_ID]:
              evaluationDetails.flagMetadata["contextId"],
          }
        : hookContext.context.targetingKey
        ? {
            [ATTR_FEATURE_FLAG_CONTEXT_ID]: hookContext.context.targetingKey,
          }
        : {}),
      ...(evaluationDetails.flagMetadata["flagSetId"] && {
        [ATTR_FEATURE_FLAG_SET_ID]: evaluationDetails.flagMetadata["flagSetId"],
      }),
      ...(evaluationDetails.flagMetadata["version"] && {
        [ATTR_FEATURE_FLAG_VERSION]: evaluationDetails.flagMetadata["version"],
      }),
      ...(evaluationDetails.reason === "ERROR" && {
        [ATTR_FEATURE_FLAG_ERROR_CODE]:
        // Switch to map?
          (evaluationDetails.errorCode ?? "GENERAL").toLowerCase(),
      }),
      ...(evaluationDetails.reason === "ERROR" &&
        evaluationDetails.errorMessage && {
          [ATTR_FEATURE_FLAG_ERROR_MESSAGE]: evaluationDetails.errorMessage,
        }),
    });
  }
}
