"use client";

import { SubscriptionTypesEnum } from "@/types/subscription";
import { FormActions } from "@/helpers/formReducer";
import { useCallback, useContext } from "react";
import { formContext } from "../FormProvider/FormProvider";
import SubscriptionTypeComponent from "./SubscriptionTypeComponent";

const SubscriptionTypeContainer = () => {
  const {
    state: { subscriptionType },
    dispatch,
  } = useContext(formContext);

  const setType = useCallback(
    (nextSubscriptionType: SubscriptionTypesEnum) =>
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
          subscriptionType === SubscriptionTypesEnum.Month
            ? SubscriptionTypesEnum.Year
            : SubscriptionTypesEnum.Month;

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
