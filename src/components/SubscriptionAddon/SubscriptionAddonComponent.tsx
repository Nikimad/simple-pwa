import {
  SubscriptionAddon,
  SubscriptionAddonsEnum,
} from "@/types/subscription";
import s from "./SubscriptionAddon.module.scss";
import SubscriptionAddonPrice from "../SubscriptionAddonPrice";

interface SubscriptionAddonComponentProps extends SubscriptionAddon {
  value: SubscriptionAddonsEnum;
  isActive: boolean;
  onChoose: () => void;
}

const SubscriptionAddonComponent = ({
  title,
  value,
  description,
  isActive,
  onChoose,
}: Readonly<SubscriptionAddonComponentProps>) => (
  <li className={`choice ${s.subscriptionaddon}`}>
    <label className={s.subscriptionaddon__content}>
      <input
        name="subscriptionAddons"
        type="checkbox"
        className={`visually-hidden ${s.subscriptionaddon__input}`}
        value={value}
        checked={isActive}
        onChange={onChoose}
      />
      <span className={s.subscriptionaddon__checkbox} aria-hidden="true"></span>
      <span className={s.subscriptionaddon__content__text}>
        <span className={s.subscriptionaddon__content__title}>{title}</span>
        <span className={s.subscriptionaddon__content__description}>
          {description}
        </span>
      </span>
      <SubscriptionAddonPrice subscriptionAddon={value} className={s.subscriptionaddon__content__price} />
    </label>
  </li>
);

export default SubscriptionAddonComponent;
