import { SubscriptionTypesEnum } from "@/types/subscription";

type SubscriptionOptionPriceComponentProps = Readonly<{
  subscriptionType: SubscriptionTypesEnum;
  price: number;
  className?: string;
}>;

const SubscriptionOptionPriceComponent = ({
  subscriptionType,
  price,
  className,
}: SubscriptionOptionPriceComponentProps) => (
  <span className={className}>
    ${price}/{subscriptionType}
  </span>
);

export default SubscriptionOptionPriceComponent;
