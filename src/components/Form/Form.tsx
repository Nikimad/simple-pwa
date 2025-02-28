import FormProvider from "../FormProvider";
import s from "./Form.module.scss";

const Form = ({ children }: Readonly<React.ComponentProps<"form">>) => (
  <FormProvider>
    <form className={s.form}>{children}</form>
  </FormProvider>
);

export default Form;
