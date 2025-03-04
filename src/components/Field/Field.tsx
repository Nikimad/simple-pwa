import s from "./Field.module.scss";

interface FieldProps extends Readonly<React.ComponentProps<"input">> {
  label: string;
  error?: string;
}

const Field = ({ name, type, label, error }: FieldProps) => (
  <label className={s.field}>
    <span className={s.field__label}>
      <span>{label}</span>
      {error && <span className={s.field__error}>{error}</span>}
    </span>
    <input name={name} type={type} className={`${s.field__input} ${error ? s.field__input_err: ""}`} />
  </label>
);

export default Field;
