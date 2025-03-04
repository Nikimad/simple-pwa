import Image from "next/image";
import s from "./Banner.module.scss";

const Banner = () => (
  <div className={s.banner}>
    <Image
      src="/icon-thank-you.svg"
      alt=""
      width={64}
      height={64}
      aria-hidden="true"
    />
    <h2 className={s.banner__title}>Thank you!</h2>
    <p className={s.banner__text}>
      Thanks fro confirming your subscription! We hope you have fun using our
      platform. If you ever need support, please feel free to email us at
      support@loremganing.com.
    </p>
  </div>
);

export default Banner;
