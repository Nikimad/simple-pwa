"use client";

import { SubscriptionOptionsEnum } from "@/types/subscription";
import { useContext } from "react";
import { formContext } from "../FormProvider/FormProvider";
import { getSubscriptionOptionPrice } from "@/helpers/getSubscriptionPrice";
import SubscriptionOptionPriceComponent from "./SubscriptionOptionPriceComponent";

type SubscriptionOptionPriceContainerProps = Readonly<{
  subscriptionOption: SubscriptionOptionsEnum;
  className?: string;
}>;

const SubscriptionOptionPriceContainer = ({
  subscriptionOption,
  className,
}: SubscriptionOptionPriceContainerProps) => {
  const {
    state: { subscriptionType },
  } = useContext(formContext);

  const price = getSubscriptionOptionPrice(
    subscriptionOption,
    subscriptionType
  );

  return (
    <SubscriptionOptionPriceComponent
      subscriptionType={subscriptionType}
      price={price}
      className={className}
    />
  );
};

export default SubscriptionOptionPriceContainer;
