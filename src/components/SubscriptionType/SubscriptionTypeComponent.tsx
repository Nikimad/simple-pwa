import { SubscriptionTypesEnum } from "@/types/subscription";
import { subscriptionTypes } from "@/constants/subscription";
import s from "./SubscriptionType.module.scss";

type SubscriptionTypeComponentProps = Readonly<{
  value: string;
  onChange: (e: React.SyntheticEvent<HTMLInputElement>) => void;
}>;

const SubscriptionTypeComponent = ({
  value,
  onChange,
}: SubscriptionTypeComponentProps) => (
  <fieldset className={s.subscriptiontype}>
    <legend className="visually-hidden">Subscription plan type</legend>
    <label
      className={`${s.subscriptiontype__button} ${
        value === SubscriptionTypesEnum.Month
          ? s.subscriptiontype__button_current
          : ""
      }`}
    >
      {subscriptionTypes[SubscriptionTypesEnum.Month].adjective}
      <input
        type="button"
        value={SubscriptionTypesEnum.Month}
        onClick={onChange}
        className="visually-hidden"
      />
    </label>
    <label className={s.subscriptiontype__switch}>
      <input
        type="checkbox"
        role="switch"
        checked={value === SubscriptionTypesEnum.Year}
        onChange={onChange}
        className={`visually-hidden ${s.subscriptiontype__switch__input}`}
        value={value}
      />
      <span className={s.subscriptiontype__switch__indicator}></span>
    </label>
    <label
      className={`${s.subscriptiontype__button} ${
        value === SubscriptionTypesEnum.Year
          ? s.subscriptiontype__button_current
          : ""
      }`}
    >
      {subscriptionTypes[SubscriptionTypesEnum.Year].adjective}
      <input
        type="button"
        value={SubscriptionTypesEnum.Year}
        onClick={onChange}
        className="visually-hidden"
      />
    </label>
  </fieldset>
);

export default SubscriptionTypeComponent;
