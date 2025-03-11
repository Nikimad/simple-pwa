import {
  subscriptionOptionsList,
  subscriptionTypesList,
  subscriptionAddonsList,
} from "@/constants/subscription";

// Options

export type SubscriptionOptionsValues =
  (typeof subscriptionOptionsList)[number];

export type SubscriptionOption = {
  title: string;
  value: SubscriptionOptionsValues;
  imgSrc: string;
};

export type SubscriptionOptions = Record<
  SubscriptionOptionsValues,
  SubscriptionOption
>;

export type SubscriptionOptionsPrices = Record<
  `${SubscriptionOptionsValues} per ${SubscriptionTypesValues}`,
  number
>;

// Types

export type SubscriptionTypesValues = (typeof subscriptionTypesList)[number];

export type SubscriptionType = {
  title: string;
  adjective: string;
  value: SubscriptionTypesValues;
};

export type SubscriptionTypes = Record<
  SubscriptionTypesValues,
  SubscriptionType
>;

export type SubscriptionOptionsOptionals = Record<
  SubscriptionTypesValues,
  string
>;

/// Addons

export type SubscriptionAddonsValues = (typeof subscriptionAddonsList)[number];

export type SubscriptionAddon = {
  title: string;
  value: SubscriptionAddonsValues;
  description: string;
};

export type SubscriptionAddons = Record<
  SubscriptionAddonsValues,
  SubscriptionAddon
>;

export type SubscriptionAddonsPrices = Record<
  `${SubscriptionAddonsValues} per ${SubscriptionTypesValues}`,
  number
>;
