export enum SubscriptionOptionsEnum {
  Arcade = "arcade",
  Advanced = "advanced",
  Pro = "pro",
}

export enum SubscriptionTypesEnum {
  Month = "mo",
  Year = "yr",
}

export enum SubscriptionAddonsEnum {
  OnlineService = "online service",
  LargerStorage = "larger storage",
  CustomizableProfile = "customizable profile",
}

export type SubscriptionOption = {
  title: string;
  imgSrc: string;
};

export type SubscriptionType = {
  title: string;
  adjective: string;
};

export type SubscriptionAddon = {
  title: string;
  description: string;
};

export type SubscriptionOptions = {
  [Key in SubscriptionOptionsEnum]: SubscriptionOption;
};

export type SubscriptionTypes = {
  [Key in SubscriptionTypesEnum]: SubscriptionType;
};

export type SubscriptionAddons = {
  [Key in SubscriptionAddonsEnum]: SubscriptionAddon;
};
