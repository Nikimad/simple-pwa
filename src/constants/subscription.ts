import {
  SubscriptionOptionsEnum,
  SubscriptionTypesEnum,
  SubscriptionAddonsEnum,
  SubscriptionOptions,
  SubscriptionTypes,
  SubscriptionAddons,
} from "@/types/subscription";

export const subscriptionOptions: SubscriptionOptions = {
  [SubscriptionOptionsEnum.Arcade]: {
    title: "Arcade",
    imgSrc: "/icon-arcade.svg",
  },
  [SubscriptionOptionsEnum.Advanced]: {
    title: "Advanced",
    imgSrc: "/icon-advanced.svg",
  },
  [SubscriptionOptionsEnum.Pro]: {
    title: "Pro",
    imgSrc: "/icon-pro.svg",
  },
};

export const subscriptionTypes: SubscriptionTypes = {
  [SubscriptionTypesEnum.Month]: { title: "Month", adjective: "Monthly" },
  [SubscriptionTypesEnum.Year]: { title: "Year", adjective: "Yearly" },
};

export const subscriptionAddons: SubscriptionAddons = {
  [SubscriptionAddonsEnum.OnlineService]: {
    title: "Online service",
    description: "Acces to multiplayer games",
  },
  [SubscriptionAddonsEnum.LargerStorage]: {
    title: "Larger storage",
    description: "Extra 1TB cloud save",
  },
  [SubscriptionAddonsEnum.CustomizableProfile]: {
    title: "Customizable profile",
    description: "Custom theme on your profile",
  },
};

export const subscriptionOptionsPrices = {
  [`${SubscriptionOptionsEnum.Arcade}_${SubscriptionTypesEnum.Month}`]: 9,
  [`${SubscriptionOptionsEnum.Advanced}_${SubscriptionTypesEnum.Month}`]: 12,
  [`${SubscriptionOptionsEnum.Pro}_${SubscriptionTypesEnum.Month}`]: 15,
  [`${SubscriptionOptionsEnum.Arcade}_${SubscriptionTypesEnum.Year}`]: 90,
  [`${SubscriptionOptionsEnum.Advanced}_${SubscriptionTypesEnum.Year}`]: 120,
  [`${SubscriptionOptionsEnum.Pro}_${SubscriptionTypesEnum.Year}`]: 150,
};

export const subscriptionAddonsPrices = {
  [`${SubscriptionAddonsEnum.OnlineService}_${SubscriptionTypesEnum.Month}`]: 1,
  [`${SubscriptionAddonsEnum.LargerStorage}_${SubscriptionTypesEnum.Month}`]: 2,
  [`${SubscriptionAddonsEnum.CustomizableProfile}_${SubscriptionTypesEnum.Month}`]: 2,
  [`${SubscriptionAddonsEnum.OnlineService}_${SubscriptionTypesEnum.Year}`]: 10,
  [`${SubscriptionAddonsEnum.LargerStorage}_${SubscriptionTypesEnum.Year}`]: 20,
  [`${SubscriptionAddonsEnum.CustomizableProfile}_${SubscriptionTypesEnum.Year}`]: 20,
};

export const subscriptionOptionsOptionals = {
  [SubscriptionTypesEnum.Month]: "",
  [SubscriptionTypesEnum.Year]: "2 month free",
};
