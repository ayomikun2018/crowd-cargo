"use client";
import React, { useState } from "react";

import { Button } from "@/components/ui/button";
import { MuiOtpInput } from "mui-one-time-password-input";
import { useRouter } from "next/navigation";

export default function OtpForm() {
  const router = useRouter();

  const [otp, setOtp] = useState("");
  const handleChange = (newValue) => {
    setOtp(newValue);
  };
  return (
    <div className=" flex flex-col gap-4 max-w-lg justify-center items-center text-center ">
      <h3 className="font-semibold text-primary text-3xl">
        Verify your account
      </h3>
      <p>Enter the 6 digit OTP code sent to t***n@gmail.com</p>
      <div className="flex flex-col items-center p-8">
        <MuiOtpInput
          length={6}
          value={otp}
          onChange={handleChange}
          TextFieldsProps={{ size: "large", placeholder: "_" }}
        />
        <Button
          className="  border-full mt-14 rounded-full text-bold text-white mx-auto w-[80%]"
          size="lg"
          onClick={() => router.push("/dashboard/add-product")}
        >
          Verify
        </Button>
      </div>

      <p className="text-gray-500">Didn&apos;t get the code?</p>
      <div className="p-4">
        <span className="bg-slate-100 text-primary  font-semibold p-2 rounded-full">
          Resend in 00:59
        </span>
      </div>
    </div>
  );
}
