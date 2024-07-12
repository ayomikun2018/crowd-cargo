import OtpForm from "./_features/otp-form";
import { SiteLogo } from "@/components/layout/site-logo";

export default function Otp() {
  return (
    <div className="container min-h-screen flex ">
      <div className="absolute">
        <SiteLogo />
      </div>
      <div className="flex justify-center items-center w-full">
        <OtpForm />
      </div>
    </div>
  );
}
