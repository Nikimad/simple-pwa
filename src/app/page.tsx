import Form from "@/components/Form";
import FormBody from "@/components/FormBody";
import FormHeader from "@/components/FormHeader";
import SubscriptionAddons from "@/components/SubscriptionAddons";
import SubscriptionPlans from "@/components/SubscriptionPlans";
import SubscriptionSummary from "@/components/SubscriptionSummary";

const Page = () => (
  <>
    <Form>
      <FormHeader
        title="Personal info"
        description="Please provide your name, email address and phone number."
      />
      <FormBody>
        <SubscriptionPlans />
      </FormBody>
      <FormBody>
        <SubscriptionAddons />
      </FormBody>
      <FormBody>
        <SubscriptionSummary />
      </FormBody>
    </Form>
  </>
);

export default Page;
