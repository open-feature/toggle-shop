'use client';

import {
  type ReactFlagEvaluationOptions,
  type ReactFlagEvaluationNoSuspenseOptions,
  useFlag,
  useSuspenseFlag,
} from "@openfeature/react-sdk";

/**
* Add free shipping to the UI.
* 
* **Details:**
* - flag key: `offer-free-shipping`
* - default value: `false`
* - type: `boolean`
*/
export const useOfferFreeShipping = (options: ReactFlagEvaluationOptions) => {
  return useFlag("offer-free-shipping", false, options);
};

/**
* Add free shipping to the UI.
* 
* **Details:**
* - flag key: `offer-free-shipping`
* - default value: `false`
* - type: `boolean`
*
* Equivalent to useFlag with options: `{ suspend: true }`
* @experimental — Suspense is an experimental feature subject to change in future versions.
*/
export const useSuspenseOfferFreeShipping = (options: ReactFlagEvaluationNoSuspenseOptions) => {
  return useSuspenseFlag("offer-free-shipping", false, options);
};

/**
* Make the header stay at the top of the page while scrolling.
* 
* **Details:**
* - flag key: `sticky-header`
* - default value: `false`
* - type: `boolean`
*/
export const useStickyHeader = (options: ReactFlagEvaluationOptions) => {
  return useFlag("sticky-header", false, options);
};

/**
* Make the header stay at the top of the page while scrolling.
* 
* **Details:**
* - flag key: `sticky-header`
* - default value: `false`
* - type: `boolean`
*
* Equivalent to useFlag with options: `{ suspend: true }`
* @experimental — Suspense is an experimental feature subject to change in future versions.
*/
export const useSuspenseStickyHeader = (options: ReactFlagEvaluationNoSuspenseOptions) => {
  return useSuspenseFlag("sticky-header", false, options);
};

/**
* When on, use postgres else sqlite.
* 
* **Details:**
* - flag key: `use-distributed-db`
* - default value: `false`
* - type: `boolean`
*/
export const useUseDistributedDb = (options: ReactFlagEvaluationOptions) => {
  return useFlag("use-distributed-db", false, options);
};

/**
* When on, use postgres else sqlite.
* 
* **Details:**
* - flag key: `use-distributed-db`
* - default value: `false`
* - type: `boolean`
*
* Equivalent to useFlag with options: `{ suspend: true }`
* @experimental — Suspense is an experimental feature subject to change in future versions.
*/
export const useSuspenseUseDistributedDb = (options: ReactFlagEvaluationNoSuspenseOptions) => {
  return useSuspenseFlag("use-distributed-db", false, options);
};

/**
* When on, use a secure connection to the database. This only applies when use-distributed-db is on.
* 
* **Details:**
* - flag key: `use-secure-protocol`
* - default value: `false`
* - type: `boolean`
*/
export const useUseSecureProtocol = (options: ReactFlagEvaluationOptions) => {
  return useFlag("use-secure-protocol", false, options);
};

/**
* When on, use a secure connection to the database. This only applies when use-distributed-db is on.
* 
* **Details:**
* - flag key: `use-secure-protocol`
* - default value: `false`
* - type: `boolean`
*
* Equivalent to useFlag with options: `{ suspend: true }`
* @experimental — Suspense is an experimental feature subject to change in future versions.
*/
export const useSuspenseUseSecureProtocol = (options: ReactFlagEvaluationNoSuspenseOptions) => {
  return useSuspenseFlag("use-secure-protocol", false, options);
};
