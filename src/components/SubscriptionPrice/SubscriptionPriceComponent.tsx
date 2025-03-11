import { SubscriptionType } from "@/types/subscription";

type SubscriptionPriceComponentProps = Readonly<{
  subscriptionType: SubscriptionType["value"];
  price: number;
  className?: string;
}>;

const SubscriptionPriceComponent = ({
  price,
  className,
  subscriptionType,
}: SubscriptionPriceComponentProps) => (
  <span className={className}>
    ${price}/{subscriptionType}
  </span>
);

export default SubscriptionPriceComponent;
