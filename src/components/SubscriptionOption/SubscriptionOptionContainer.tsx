"use client";

import { SubscriptionOption } from "@/types/subscription";
import { FormActions } from "@/helpers/formReducer";
import { useCallback, useContext } from "react";
import { formContext } from "../FormProvider/FormProvider";
import {
  subscriptionOptions,
  subscriptionOptionsOptionals,
} from "@/constants/subscription";
import SubscriptionOptionComponent from "./SubscriptionOptionComponent";

interface SubscriptionOptionContainerProps {
  option: SubscriptionOption["value"];
}

const SubscriptionOptionContainer = ({
  option,
}: SubscriptionOptionContainerProps) => {
  const { state, dispatch } = useContext(formContext);

  const subscriptionOption = subscriptionOptions[option];
  const subscriptionOptionOptional =
    subscriptionOptionsOptionals[state.subscriptionType];

  const setPlan = useCallback(
    (subscriptionOption: SubscriptionOption["value"]) =>
      dispatch({
        type: FormActions.SetValue,
        payload: {
          name: "subscriptionOption",
          value: subscriptionOption,
        },
      }),
    [dispatch]
  );

  const handleChoose = useCallback(
    () => option !== state.subscriptionOption && setPlan(option),
    [option, state.subscriptionOption, setPlan]
  );

  return (
    <SubscriptionOptionComponent
      {...subscriptionOption}
      value={option}
      optional={subscriptionOptionOptional}
      isActive={option === state.subscriptionOption}
      onChoose={handleChoose}
    />
  );
};

export default SubscriptionOptionContainer;
