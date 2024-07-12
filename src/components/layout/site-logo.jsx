import Image from "next/image";

export function SiteLogo() {
  return (
    <div className="">
      <Image
        src="/logo.png"
        alt="bank statement logo"
        width={150}
        height={150}
      />
      <span className="px-2 bg-slate-100 text-sm font-semibold rounded text-[#F41AB7]">
        Advance Store
      </span>
    </div>
  );
}
