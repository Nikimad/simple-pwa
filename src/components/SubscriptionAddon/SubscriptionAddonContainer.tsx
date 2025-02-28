"use client";

import { useCallback, useContext } from "react";
import { SubscriptionAddonsEnum } from "@/types/subscription";
import { FormActions } from "@/helpers/formReducer";
import { formContext } from "../FormProvider/FormProvider";
import { subscriptionAddons } from "@/constants/subscription";
import SubscriptionAddonComponent from "./SubscriptionAddonComponent";

type SubscriptionAddonContainerProps = Readonly<{
  addon: SubscriptionAddonsEnum;
}>;

const SubscriptionAddonContainer = ({
  addon,
}: SubscriptionAddonContainerProps) => {
  const { state, dispatch } = useContext(formContext);

  const subscriptionAddon = subscriptionAddons[addon];

  const handleChoose = useCallback(
    () =>
      dispatch({
        type: FormActions.SetMultipleValue,
        payload: {
          name: "subscriptionAddons",
          value: addon,
        },
      }),
    [addon, dispatch]
  );

  return (
    <SubscriptionAddonComponent
      {...subscriptionAddon}
      value={addon}
      isActive={state.subscriptionAddons.includes(addon)}
      onChoose={handleChoose}
    />
  );
};

export default SubscriptionAddonContainer;
