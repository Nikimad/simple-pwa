import {
  SubscriptionAddon,
  SubscriptionOption,
  SubscriptionType,
} from "@/types/subscription";

export type FormState = {
  subscriptionOption: SubscriptionOption["value"];
  subscriptionType: SubscriptionType["value"];
  subscriptionAddons: SubscriptionAddon["value"][];
};

export const formState: FormState = {
  subscriptionOption: "arcade",
  subscriptionType: "mo",
  subscriptionAddons: [],
};
