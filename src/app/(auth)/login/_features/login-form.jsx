"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { PasswordInput } from "@/components/ui/password-input";
import { useRouter } from "next/navigation";

export function LogInForm() {
  const router = useRouter();
  return (
    <div className="flex items-center justify-center w-full">
      <div className="w-full p-8 flex flex-col md:max-w-lg">
        <div className="md:px-10">
          <h2 className="font-semibold text-primary  mt-6 text-3xl">Login</h2>
          <h3 className="text-gray-500 mt-4">To Login, input the details you signed up with</h3>
          <div className="grid w-full items-center gap-2 mt-10">
            <Label htmlFor="email" className=" font-medium">
              Email address
            </Label>
            <Input type="email" id="email" placeholder="Enter your email" className="" />
          </div>
          <div className="grid w-full items-center gap-2 mt-6">
            <Label htmlFor="password " className=" font-medium">
              Password
            </Label>
            {/* <Input type="password" id="password" placeholder="Enter your password"  /> */}
            <PasswordInput placeholder="Enter your password" />
          </div>
        </div>

        <Button className="w-full border-full mt-14 rounded-full text-bold text-white p-6" size="large" onClick={() => router.push("/otp")}>
          Login{" "}
        </Button>
      </div>
    </div>
  );
}
