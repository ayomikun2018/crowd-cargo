"use client";
import Link from "next/link";
import { SiteLogo } from "./site-logo";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { Iconly } from "react-iconly";

export function MainHeader() {
  return (
    <div className="hidden w-full gap-6 lg:flex items-center justify-between">
      <Link href="/" className="hidden items-center space-x-2 lg:flex">
        <SiteLogo />
      </Link>

      <Avatar className="">
        <AvatarFallback>
          <Iconly name="User" size="large" primaryColor={"#E3E3E3"} secondaryColor={"#E3E3E3"} />
        </AvatarFallback>
      </Avatar>
    </div>
  );
}
