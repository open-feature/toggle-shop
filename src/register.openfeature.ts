import { DevCycleProvider } from "@devcycle/nodejs-server-sdk";
import { OpenFeature } from "@openfeature/server-sdk";
import { events } from "@opentelemetry/api-events";
import { TelemetryHook } from "./libs/open-feature/telemetry-hook";

console.log("registering the OpenFeature provider");

// class FlagdEventProvider extends FlagdProvider implements Provider {
//   track(
//     trackingEventName: string,
//     context?: EvaluationContext,
//     trackingEventDetails?: TrackingEventDetails
//   ): void {
//     sendTrackEvent({
//       ["feature_flag.event_name"]: trackingEventName,
//       ...(context &&
//         context.targetingKey && {
//           [TelemetryAttribute.CONTEXT_ID]: context.targetingKey,
//         }),
//       ...context,
//       ...trackingEventDetails,
//     });
//   }
// }

const eventLogger = events.getEventLogger("feature_flag");

OpenFeature.addHooks(
  new TelemetryHook((event) => {
    eventLogger.emit({
      name: "feature_flag.evaluation",
      attributes: event,
    });
  })
);

const { DEVCYCLE_SERVER_SDK_KEY } = process.env;

if (!DEVCYCLE_SERVER_SDK_KEY) {
  throw new Error("DEVCYCLE_SERVER_SDK_KEY is required");
} else {
  console.log("Setting up DevCycle provider");
}
OpenFeature.setProviderAndWait(
  new DevCycleProvider(DEVCYCLE_SERVER_SDK_KEY, {
    // enableCloudBucketing: true,
    // logger: console,
    logLevel: "debug",
  })
)
  .then(() => {
    console.log("OpenFeature provider is ready");
  })
  .catch((error) => {
    console.error(error);
  });
