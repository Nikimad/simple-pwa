import { type FormState } from "@/constants/formState";
import { Action } from "@/types/action";
import {
  SubscriptionOptionsEnum,
  SubscriptionAddonsEnum,
  SubscriptionTypesEnum,
} from "@/types/subscription";

export enum FormActions {
  SetValue = "setValue",
  SetMultipleValue = "setMultipleValue",
}

type FormPayload<ValueType> = {
  [Property in keyof FormState]: FormState[Property] extends ValueType
    ? {
        name: Property;
        value: ValueType extends (infer ElementType)[]
          ? ElementType
          : ValueType;
      }
    : never;
}[keyof FormState];

export type FormPayloads = {
  [FormActions.SetValue]: FormPayload<
    SubscriptionOptionsEnum | SubscriptionTypesEnum
  >;
  [FormActions.SetMultipleValue]: FormPayload<SubscriptionAddonsEnum[]>;
};

const formReducer = (prevState: FormState, action: Action<FormPayloads>) => {
  switch (action.type) {
    case FormActions.SetValue:
      return {
        ...prevState,
        [action.payload.name]: action.payload.value,
      };
    case FormActions.SetMultipleValue:
      return {
        ...prevState,
        [action.payload.name]: prevState[action.payload.name].includes(
          action.payload.value
        )
          ? prevState[action.payload.name].filter(
              (value) => value !== action.payload.value
            )
          : [...prevState[action.payload.name], action.payload.value],
      };
    default:
      return prevState;
  }
};

export default formReducer;
