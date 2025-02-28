"use client";

import { useContext } from "react";
import { formContext } from "../FormProvider/FormProvider";
import SubscriptionSummaryComponent from "./SubscriptionSummaryComponent";

const SubscriptionSummaryContainer = () => {
  const {
    state: { subscriptionOption, subscriptionType, subscriptionAddons },
  } = useContext(formContext);

  return (
    <SubscriptionSummaryComponent
      subscriptionOption={subscriptionOption}
      subscriptionType={subscriptionType}
      subscriptionAddonsArray={subscriptionAddons}
    />
  );
};

export default SubscriptionSummaryContainer;
