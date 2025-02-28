"use client";

import { useContext } from "react";
import { formContext } from "../FormProvider/FormProvider";
import getSubscriptionPrice from "@/helpers/getSubscriptionPrice";
import SubscriptionPriceComponent from "./SubscriptionPriceComponent";

type SubscriptionPriceContainerProps = Readonly<{
  className?: string;
}>;

const SubscriptionPriceContainer = ({
  className,
}: SubscriptionPriceContainerProps) => {
  const { state } = useContext(formContext);
  const price = getSubscriptionPrice(
    state.subscriptionOption,
    state.subscriptionAddons,
    state.subscriptionType
  );

  return (
    <SubscriptionPriceComponent
      subscriptionType={state.subscriptionType}
      price={price}
      className={className}
    />
  );
};

export default SubscriptionPriceContainer;
