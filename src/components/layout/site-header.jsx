import { dashboardConfig } from "@/config/dashboard";
import { MainHeader } from "./main-header";
import { MobileHeader } from "./mobile-header";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <div className="container w-full flex h-20 items-center">
        <MainHeader />
        <MobileHeader items={dashboardConfig.sidebarNav} />
      </div>
    </header>
  );
}
