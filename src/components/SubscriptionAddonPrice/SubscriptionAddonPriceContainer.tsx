"use client";

import { SubscriptionAddonsEnum } from "@/types/subscription";
import { useContext } from "react";
import { formContext } from "../FormProvider/FormProvider";
import { getSubscriptionAddonPrice } from "@/helpers/getSubscriptionPrice";
import SubscriptionAddonPriceComponent from "./SubscriptionAddonPriceComponent";

type SubscriptionAddonPriceContainerProps = Readonly<{
  subscriptionAddon: SubscriptionAddonsEnum;
  className?: string;
}>;

const SubscriptionAddonPriceContainer = ({
  subscriptionAddon,
  className,
}: SubscriptionAddonPriceContainerProps) => {
  const {
    state: { subscriptionType },
  } = useContext(formContext);

  const price = getSubscriptionAddonPrice(subscriptionAddon, subscriptionType);

  return (
    <SubscriptionAddonPriceComponent
      subscriptionType={subscriptionType}
      price={price}
      className={className}
    />
  );
};

export default SubscriptionAddonPriceContainer;
