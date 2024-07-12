import { SiteSidebar } from "@/components/layout/main-sidebar";
import { SiteHeader } from "@/components/layout/site-header";
import { ScrollArea } from "@/components/ui/scroll-area";
import { dashboardConfig } from "@/config/dashboard";

export default function AppLayout({ children }) {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <div className="items-start flex">
        <aside className="fixed w-64 top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] shrink-0 overflow-y-auto border-r md:sticky md:block">
          <ScrollArea className="py-6 pr-6 lg:py-8">
            <SiteSidebar items={dashboardConfig.sidebarNav} />
          </ScrollArea>
        </aside>
        <main className="flex-1 flex w-full py-8 flex-col overflow-hidden">{children}</main>
      </div>
    </div>
  );
}
