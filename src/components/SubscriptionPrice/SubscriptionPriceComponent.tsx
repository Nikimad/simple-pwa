import { SubscriptionTypesEnum } from "@/types/subscription";

type SubscriptionPriceComponentProps = Readonly<{
  subscriptionType: SubscriptionTypesEnum;
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
