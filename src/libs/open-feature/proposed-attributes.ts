// https://opentelemetry.io/docs/specs/semconv/feature-flags/feature-flags-logs/

export const EVENT_NAME_FEATURE_FLAG_EVALUATION = "feature_flag.evaluation";

export const ATTR_FEATURE_FLAG_KEY = "feature_flag.key";
// Error related attributes
export const ATTR_FEATURE_FLAG_ERROR_CODE = "error.type";
// spec'd as feature_flag.variant
export const ATTR_FEATURE_FLAG_VARIANT = "feature_flag.variant";
export const ATTR_FEATURE_FLAG_CONTEXT_ID = "feature_flag.context.id";
// See if there's a common OTel error message
export const ATTR_FEATURE_FLAG_ERROR_MESSAGE =
  "feature_flag.evaluation.error.message";
export const ATTR_FEATURE_FLAG_REASON = "feature_flag.evaluation.reason";

export const ATTR_FEATURE_FLAG_PROVIDER = "feature_flag.provider_name";
export const ATTR_FEATURE_FLAG_SET_ID = "feature_flag.set.id";
export const ATTR_FEATURE_FLAG_VERSION = "feature_flag.version";

// currently defined as "value"? Do we need a value type?
export const ATTR_FEATURE_FLAG_VALUE = "value";
// Support complex attributes in Event API - https://github.com/open-telemetry/opentelemetry-specification/pull/4334

// OF Spec PR - https://github.com/open-feature/spec/pull/287#discussion_r1887469841
