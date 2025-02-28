import s from "./FormHeader.module.scss";

type FormHeaderProps = Readonly<{
  title: string;
  description: string;
}>;

const FormHeader = ({ title, description }: FormHeaderProps) => (
  <div className={s.header}>
    <h2 className={s.header__title}>{title}</h2>
    <p className={s.header__description}>{description}</p>
  </div>
);

export default FormHeader;
