import { subscriptionOptionsList } from "@/constants/subscription";
import FormHeader from "../FormHeader";
import SubscriptionPlan from "../SubscriptionOption";
import SubscriptionType from "../SubscriptionType";
import s from "./SubscriptionPlans.module.scss";

const SubscriptionPlans = () => (
  <>
    <FormHeader
      title="Select ypur plan"
      description="You have the option of monthly or yearly billing."
    />
    <div className={s.subscriptionplans__container}>
      <ul className={s.subscriptionplans}>
        {subscriptionOptionsList.map((option) => (
          <SubscriptionPlan key={option} option={option} />
        ))}
      </ul>
      <SubscriptionType />
    </div>
  </>
);

export default SubscriptionPlans;
