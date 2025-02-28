"use client";

import { ActionDispatch, createContext, useReducer } from "react";
import { type FormState, formState } from "@/constants/formState";
import formReducer, { type FormPayloads } from "@/helpers/formReducer";
import { Action } from "@/types/action";

export const formContext = createContext<{
  state: FormState;
  dispatch: ActionDispatch<[action: Action<FormPayloads>]>;
}>({
  state: formState,
  dispatch: () => {},
});

const FormProvider = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  const [state, dispatch] = useReducer(formReducer, formState);

  return (
    <formContext.Provider value={{ state, dispatch }}>
      {children}
    </formContext.Provider>
  );
};

export default FormProvider;
