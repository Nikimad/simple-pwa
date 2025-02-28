import {
  SubscriptionOptionsEnum,
  SubscriptionTypesEnum,
  SubscriptionAddonsEnum,
} from "@/types/subscription";

export type FormState = {
  subscriptionOption: SubscriptionOptionsEnum;
  subscriptionType: SubscriptionTypesEnum;
  subscriptionAddons: SubscriptionAddonsEnum[];
};

export const formState: FormState = {
  subscriptionOption: SubscriptionOptionsEnum.Arcade,
  subscriptionType: SubscriptionTypesEnum.Month,
  subscriptionAddons: [],
};
