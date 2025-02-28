import {
  SubscriptionOption,
  SubscriptionOptionsEnum,
} from "@/types/subscription";
import Image from "next/image";
import s from "./SubscriptionOption.module.scss";
import SubscriptionOptionPrice from "../SubscriptionOptionPrice";

interface SubscriptionOptionComponentProps extends SubscriptionOption {
  value: SubscriptionOptionsEnum;
  isActive: boolean;
  optional: string;
  onChoose: () => void;
}

const SubscriptionOptionComponent = ({
  title,
  imgSrc,
  value,
  optional,
  isActive,
  onChoose,
}: Readonly<SubscriptionOptionComponentProps>) => (
  <li className={`choice ${s.subscriptionoption}`}>
    <Image src={imgSrc} alt="" width={32} height={32} aria-hidden="true" />
    <label className={s.subscriptionoption__description}>
      <input
        className="visually-hidden"
        name="subscriptionOption"
        type="radio"
        checked={isActive}
        value={value}
        onChange={onChoose}
      />
      <span className={s.subscriptionoption__description__title}>{title}</span>
      <SubscriptionOptionPrice
        subscriptionOption={value}
        className={s.subscriptionoption__description__price}
      />
      {optional && (
        <span className={s.subscriptionoption__description__optional}>
          {optional}
        </span>
      )}
    </label>
  </li>
);

export default SubscriptionOptionComponent;
