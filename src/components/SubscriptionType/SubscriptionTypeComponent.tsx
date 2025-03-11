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
        value === subscriptionTypes.mo.value
          ? s.subscriptiontype__button_current
          : ""
      }`}
    >
      {subscriptionTypes.mo.adjective}
      <input
        type="button"
        value={subscriptionTypes.mo.value}
        onClick={onChange}
        className="visually-hidden"
      />
    </label>
    <label className={s.subscriptiontype__switch}>
      <input
        type="checkbox"
        role="switch"
        checked={value === subscriptionTypes.yr.value}
        onChange={onChange}
        className={`visually-hidden ${s.subscriptiontype__switch__input}`}
        value={value}
      />
      <span className={s.subscriptiontype__switch__indicator}></span>
    </label>
    <label
      className={`${s.subscriptiontype__button} ${
        value === subscriptionTypes.yr.value
          ? s.subscriptiontype__button_current
          : ""
      }`}
    >
      {subscriptionTypes.yr.adjective}
      <input
        type="button"
        value={subscriptionTypes.yr.value}
        onClick={onChange}
        className="visually-hidden"
      />
    </label>
  </fieldset>
);

export default SubscriptionTypeComponent;
