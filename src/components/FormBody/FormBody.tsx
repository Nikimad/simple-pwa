import s from "./FormBody.module.scss";

const FormBody = ({ children }: Readonly<{ children?: React.ReactNode }>) => (
  <div className={s.body}>{children}</div>
);

export default FormBody;
