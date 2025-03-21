import { SubscriptionType } from "@/types/subscription";

type SubscriptionAddonPriceComponentProps = Readonly<{
  subscriptionType: SubscriptionType["value"];
  price: number;
  className?: string;
}>;

const SubscriptionAddonPriceComponent = ({
  subscriptionType,
  price,
  className,
}: SubscriptionAddonPriceComponentProps) => (
  <span className={className}>
    ${price}/{subscriptionType}
  </span>
);

export default SubscriptionAddonPriceComponent;
