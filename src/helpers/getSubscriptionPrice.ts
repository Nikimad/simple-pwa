import {
  SubscriptionOption,
  SubscriptionType,
  SubscriptionAddon,
} from "@/types/subscription";
import {
  subscriptionOptionsPrices,
  subscriptionAddonsPrices,
} from "@/constants/subscription";

export const getSubscriptionOptionPrice = (
  subscriptionOption: SubscriptionOption["value"],
  subscriptionType: SubscriptionType["value"]
): number =>
  subscriptionOptionsPrices[`${subscriptionOption} per ${subscriptionType}`] ||
  0;

export const getSubscriptionAddonPrice = (
  subscriptionAddon: SubscriptionAddon["value"],
  subscriptionType: SubscriptionType["value"]
): number =>
  subscriptionAddonsPrices[`${subscriptionAddon} per ${subscriptionType}`] || 0;

const getSubscriptionPrice = (
  subscriptionOption: SubscriptionOption["value"],
  subscriptionAddons: SubscriptionAddon["value"][],
  subscriptionType: SubscriptionType["value"]
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
