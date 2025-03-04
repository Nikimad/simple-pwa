import FormHeader from "../FormHeader";
import Field from "../Field";
import s from "./PersonalInfo.module.scss";

const PersonalInfo = () => (
  <div>
    <FormHeader
      title="Personal info"
      description="Please provide your name, email address and phone number."
    />
    <div className={s.personalinfo}>
      <Field name="name" label="Name" type="text" />
      <Field name="email" label="Email Address" type="email" />
      <Field name="phonenumber" label="Phone Number" type="tel" />
    </div>
  </div>
);

export default PersonalInfo;
