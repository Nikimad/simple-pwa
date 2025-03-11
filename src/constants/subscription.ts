import {
  SubscriptionOptions,
  SubscriptionTypes,
  SubscriptionAddons,
  SubscriptionOptionsOptionals,
  SubscriptionOptionsPrices,
  SubscriptionAddonsPrices,
} from "@/types/subscription";

export const subscriptionOptionsList = ["arcade", "advanced", "pro"] as const;

export const subscriptionTypesList = ["mo", "yr"] as const;

export const subscriptionAddonsList = [
  "online service",
  "larger storage",
  "customizable profile",
] as const;

export const subscriptionOptions: SubscriptionOptions = {
  arcade: {
    title: "Arcade",
    value: "arcade",
    imgSrc: "/icon-arcade.svg",
  },
  advanced: {
    title: "Advanced",
    value: "advanced",
    imgSrc: "/icon-advanced.svg",
  },
  pro: {
    title: "Pro",
    value: "pro",
    imgSrc: "/icon-pro.svg",
  },
};

export const subscriptionTypes: SubscriptionTypes = {
  mo: { title: "Month", adjective: "Monthly", value: "mo" },
  yr: { title: "Year", adjective: "Yearly", value: "yr" },
};

export const subscriptionAddons: SubscriptionAddons = {
  "online service": {
    title: "Online service",
    description: "Acces to multiplayer games",
    value: "online service",
  },
  "larger storage": {
    title: "Larger storage",
    description: "Extra 1TB cloud save",
    value: "larger storage",
  },
  "customizable profile": {
    title: "Customizable profile",
    description: "Custom theme on your profile",
    value: "customizable profile",
  },
};

export const subscriptionOptionsPrices: SubscriptionOptionsPrices = {
  "arcade per mo": 9,
  "advanced per mo": 12,
  "pro per mo": 15,
  "arcade per yr": 90,
  "advanced per yr": 120,
  "pro per yr": 150,
};

export const subscriptionAddonsPrices: SubscriptionAddonsPrices = {
  "online service per mo": 1,
  "larger storage per mo": 2,
  "customizable profile per mo": 2,
  "online service per yr": 10,
  "larger storage per yr": 20,
  "customizable profile per yr": 20,
};

export const subscriptionOptionsOptionals: SubscriptionOptionsOptionals = {
  mo: "",
  yr: "2 month free",
};
