"use client";

import { SubscriptionType } from "@/types/subscription";
import { FormActions } from "@/helpers/formReducer";
import { useCallback, useContext } from "react";
import { formContext } from "../FormProvider/FormProvider";
import SubscriptionTypeComponent from "./SubscriptionTypeComponent";
import { subscriptionTypes } from "@/constants/subscription";

const SubscriptionTypeContainer = () => {
  const {
    state: { subscriptionType },
    dispatch,
  } = useContext(formContext);

  const setType = useCallback(
    (nextSubscriptionType: SubscriptionType["value"]) =>
      dispatch({
        type: FormActions.SetValue,
        payload: {
          name: "subscriptionType",
          value: nextSubscriptionType,
        },
      }),
    [dispatch]
  );

  const handleChange = useCallback(
    (e: React.SyntheticEvent<HTMLInputElement>) => {
      if (e.target instanceof Element) {
        const role = e.target.getAttribute("role");
        const value = e.target.getAttribute("value");

        if (role !== "switch" && subscriptionType === value) return;

        const nextSubscriptionType =
          subscriptionType === subscriptionTypes.mo.value
            ? subscriptionTypes.yr.value
            : subscriptionTypes.mo.value;

        setType(nextSubscriptionType);
      }
    },
    [subscriptionType, setType]
  );

  return (
    <SubscriptionTypeComponent
      value={subscriptionType}
      onChange={handleChange}
    />
  );
};

export default SubscriptionTypeContainer;
