import { sendTrackEvent } from "@/libs/open-feature/send-tracking-event";
import { FlagdProvider } from "@openfeature/flagd-provider";
import {
  EvaluationContext,
  OpenFeature,
  Provider,
  TrackingEventDetails,
  TelemetryAttribute,
} from "@openfeature/server-sdk";
import { events } from "@opentelemetry/api-events";
import { TelemetryHook } from "./libs/open-feature/telemetry-hook";

console.log("registering the OpenFeature provider");

class FlagdEventProvider extends FlagdProvider implements Provider {
  track(
    trackingEventName: string,
    context?: EvaluationContext,
    trackingEventDetails?: TrackingEventDetails
  ): void {
    sendTrackEvent({
      ["feature_flag.event_name"]: trackingEventName,
      ...(context &&
        context.targetingKey && {
          [TelemetryAttribute.CONTEXT_ID]: context.targetingKey,
        }),
      ...context,
      ...trackingEventDetails,
    });
  }
}

const eventLogger = events.getEventLogger("feature_flag");

OpenFeature.addHooks(
  new TelemetryHook((event) => {
    eventLogger.emit({
      name: "feature_flag.evaluation",
      attributes: event,
    });
  })
);
OpenFeature.setProvider(new FlagdEventProvider({ resolverType: "in-process" }));
