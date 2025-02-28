import {
  SubscriptionOptionsEnum,
  SubscriptionTypesEnum,
  SubscriptionAddonsEnum,
} from "@/types/subscription";
import {
  subscriptionOptionsPrices,
  subscriptionAddonsPrices,
} from "@/constants/subscription";

export const getSubscriptionOptionPrice = (
  subscriptionOption: SubscriptionOptionsEnum,
  subscriptionType: SubscriptionTypesEnum
): number =>
  subscriptionOptionsPrices[`${subscriptionOption}_${subscriptionType}`] || 0;

export const getSubscriptionAddonPrice = (
  subscriptionAddon: SubscriptionAddonsEnum,
  subscriptionType: SubscriptionTypesEnum
): number =>
  subscriptionAddonsPrices[`${subscriptionAddon}_${subscriptionType}`] || 0;

const getSubscriptionPrice = (
  subscriptionOption: SubscriptionOptionsEnum,
  subscriptionAddons: SubscriptionAddonsEnum[],
  subscriptionType: SubscriptionTypesEnum
): number => {
  const subscriptionOptionPrice = getSubscriptionOptionPrice(
    subscriptionOption,
    subscriptionType
  );

  const subscriptionAddonsPrice = subscriptionAddons.reduce(
    (price, subscriptionAddon) => {
      price += getSubscriptionAddonPrice(subscriptionAddon, subscriptionType);
      return price;
    },
    0
  );

  const totalPrice = subscriptionOptionPrice + subscriptionAddonsPrice;

  return totalPrice;
};

export default getSubscriptionPrice;
