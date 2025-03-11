import {
  SubscriptionAddon,
  SubscriptionOption,
  SubscriptionType,
} from "@/types/subscription";
import {
  subscriptionAddons,
  subscriptionOptions,
  subscriptionTypes,
} from "@/constants/subscription";
import Link from "next/link";
import FormHeader from "../FormHeader";
import SubscriptionOptionPrice from "../SubscriptionOptionPrice";
import SubscriptionAddonPrice from "../SubscriptionAddonPrice";
import SubscriptionPrice from "../SubscriptionPrice";
import s from "./SubscriptionSummary.module.scss";

type SubscriptionSummaryComponentProps = Readonly<{
  subscriptionOption: SubscriptionOption["value"];
  subscriptionType: SubscriptionType["value"];
  subscriptionAddonsArray: SubscriptionAddon["value"][];
}>;

const SubscriptionSummaryComponent = ({
  subscriptionOption,
  subscriptionType,
  subscriptionAddonsArray,
}: SubscriptionSummaryComponentProps) => (
  <div>
    <FormHeader
      title="Finishing up"
      description="Double-check everything looks OK before confirming."
    />
    <div className={s.summary__check}>
      <div className={s.summary__item}>
        <div>
          <p
            className={`${s.summary__item__text} ${s.summary__item__text_bold}`}
          >
            {subscriptionOptions[subscriptionOption].title} (
            {subscriptionTypes[subscriptionType].adjective})
          </p>
          <Link
            href="#"
            className={`${s.summary__item__text} ${s.summary__item__text_light}`}
          >
            Change
          </Link>
        </div>
        <SubscriptionOptionPrice
          subscriptionOption={subscriptionOption}
          className={`${s.summary__item__text} ${s.summary__item__text_bold}`}
        />
      </div>
      {subscriptionAddonsArray.length > 0 ? (
        <>
          <hr className={s.summary__separator} />
          <ul className={s.summary__addons}>
            {subscriptionAddonsArray.map((subscriptionAddon) => (
              <li
                key={subscriptionAddons[subscriptionAddon].title}
                className={s.summary__item}
              >
                <p
                  className={`${s.summary__item__text} ${s.summary__item__text_light}`}
                >
                  {subscriptionAddons[subscriptionAddon].title}
                </p>
                <span>
                  +
                  <SubscriptionAddonPrice
                    subscriptionAddon={subscriptionAddon}
                  />
                </span>
              </li>
            ))}
          </ul>
        </>
      ) : null}
    </div>
    <div className={`${s.summary__total} ${s.summary__item}`}>
      <p className={`${s.summary__item__text} ${s.summary__item__text_light}`}>
        Total (per {subscriptionTypes[subscriptionType].title.toLowerCase()})
      </p>
      <span
        className={`${s.summary__item__text} ${s.summary__item__text_accent} ${s.summary__item__text_bold}`}
      >
        +<SubscriptionPrice />
      </span>
    </div>
  </div>
);

export default SubscriptionSummaryComponent;
