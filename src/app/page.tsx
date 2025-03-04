import Form from "@/components/Form";
import FormBody from "@/components/FormBody";
import SubscriptionAddons from "@/components/SubscriptionAddons";
import SubscriptionPlans from "@/components/SubscriptionPlans";
import SubscriptionSummary from "@/components/SubscriptionSummary";
import PersonalInfo from "@/components/PersonalInfo";
import Banner from "@/components/Banner";

const Page = () => (
  <>
    <Form>
      <FormBody>
        <PersonalInfo />
      </FormBody>
      <FormBody>
        <SubscriptionPlans />
      </FormBody>
      <FormBody>
        <SubscriptionAddons />
      </FormBody>
      <FormBody>
        <SubscriptionSummary />
      </FormBody>
      <FormBody>
        <Banner />
      </FormBody>
    </Form>
  </>
);

export default Page;
