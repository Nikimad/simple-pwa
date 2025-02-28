import { SubscriptionAddonsEnum } from "@/types/subscription";
import { subscriptionAddons } from "@/constants/subscription";
import FormHeader from "../FormHeader";
import SubscriptionAddon from "../SubscriptionAddon";
import s from "./SubscriptionAddons.module.scss";

const SubscriptionAddons = () => (
  <>
    <FormHeader
      title="Pick add-ons"
      description="Add-ons help enhance your gaming experience."
    />
    <ul className={s.subscriptionaddons}>
      {(Object.keys(subscriptionAddons) as SubscriptionAddonsEnum[]).map(
        (addon) => (
          <SubscriptionAddon key={addon} addon={addon} />
        )
      )}
    </ul>
  </>
);

export default SubscriptionAddons;
