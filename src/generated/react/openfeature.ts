'use client';

import {
  type ReactFlagEvaluationOptions,
  type ReactFlagEvaluationNoSuspenseOptions,
  type FlagQuery,
  useFlag,
  useSuspenseFlag,
  JsonValue
} from "@openfeature/react-sdk";

// Flag key constants for programmatic access
export const FlagKeys = {
  /** Flag key for Controls the free shipping banner on the website. SHOP-4287 */
  FREE_SHIPPING_BANNER: "free-shipping-banner",
  /** Flag key for Make the header stay at the top of the page while scrolling. */
  STICKY_HEADER: "sticky-header",
  /** Flag key for When on, use postgres else sqlite. */
  USE_DISTRIBUTED_DB: "use-distributed-db",
  /** Flag key for When on, use a secure connection to the database. This only applies when use-distributed-db is on. */
  USE_SECURE_PROTOCOL: "use-secure-protocol",
} as const;


/**
* Controls the free shipping banner on the website. SHOP-4287
* 
* **Details:**
* - flag key: `free-shipping-banner`
* - default value: `false`
* - type: `boolean`
*/
export const useFreeShippingBanner = (options?: ReactFlagEvaluationOptions): FlagQuery<boolean> => {
  return useFlag("free-shipping-banner", false, options);
};

/**
* Controls the free shipping banner on the website. SHOP-4287
* 
* **Details:**
* - flag key: `free-shipping-banner`
* - default value: `false`
* - type: `boolean`
*
* Equivalent to useFlag with options: `{ suspend: true }`
* @experimental — Suspense is an experimental feature subject to change in future versions.
*/
export const useSuspenseFreeShippingBanner = (options?: ReactFlagEvaluationNoSuspenseOptions): FlagQuery<boolean> => {
  return useSuspenseFlag("free-shipping-banner", false, options);
};

/**
* Make the header stay at the top of the page while scrolling.
* 
* **Details:**
* - flag key: `sticky-header`
* - default value: `false`
* - type: `boolean`
*/
export const useStickyHeader = (options?: ReactFlagEvaluationOptions): FlagQuery<boolean> => {
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
export const useSuspenseStickyHeader = (options?: ReactFlagEvaluationNoSuspenseOptions): FlagQuery<boolean> => {
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
export const useUseDistributedDb = (options?: ReactFlagEvaluationOptions): FlagQuery<boolean> => {
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
export const useSuspenseUseDistributedDb = (options?: ReactFlagEvaluationNoSuspenseOptions): FlagQuery<boolean> => {
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
export const useUseSecureProtocol = (options?: ReactFlagEvaluationOptions): FlagQuery<boolean> => {
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
export const useSuspenseUseSecureProtocol = (options?: ReactFlagEvaluationNoSuspenseOptions): FlagQuery<boolean> => {
  return useSuspenseFlag("use-secure-protocol", false, options);
};
