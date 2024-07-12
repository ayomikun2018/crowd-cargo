"use client";

import Link from "next/link";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";
import { Iconly } from "react-iconly";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export function SiteSidebar({ items: sections }) {
  const pathname = usePathname();

  return (
    <div className="container grid space-y-4">
      <div className={cn("flex items-center gap-4 p-4", pathname === sections[0].items[0].href && "bg-blue-100 rounded-full")}>
        <Iconly name={sections[0].items[0].icon} size="small" primaryColor={null} secondaryColor={null} />
        <Link href={sections[0].items[0].href} className="text-md font-medium">
          {sections[0].items[0].title}
        </Link>
      </div>

      <Accordion type="multiple" collapsible className="w-full">
        {sections.slice(1, sections.length).map((section, index) => (
          <AccordionItem key={index} value={index.toString()}>
            <AccordionTrigger className="hover:no-underline ">
              <div className="w-full flex items-center justify-between gap-2">
                <p className="text-gray-500 font-semibold">{section.title}</p>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="grid">
                {section.items.map((link, idx) => (
                  <div key={idx} className={cn("flex gap-2 items-center p-4", pathname === link.href && "bg-blue-100 rounded-full")}>
                    <Iconly name={link.icon} size="small" primaryColor={null} secondaryColor={null} />

                    <Link href={link.href} className="text-md font-medium">
                      {link.title}
                    </Link>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
