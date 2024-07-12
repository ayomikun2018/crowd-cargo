"use client";
import Link from "next/link";
import { Button } from "../ui/button";
import { ScrollArea } from "../ui/scroll-area";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { SiteLogo } from "./site-logo";
import { useState } from "react";
import { Iconly } from "react-iconly";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";

export function MobileHeader({ items: sections }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <div className="md:hidden w-full flex items-center justify-between">
          <SiteLogo />

          <SheetTrigger asChild>
            <Button variant="ghost" className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 lg:hidden">
              <Iconly name="Category" size="large" primaryColor={null} secondaryColor={null} />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
        </div>

        <SheetContent side="left" className="pl-1 pr-0">
          <div className="px-7">
            <Link href="/" className="flex items-center" onClick={() => setIsOpen(false)}>
              <SiteLogo />
              <span className="sr-only">Home</span>
            </Link>
          </div>
          <ScrollArea className="container my-8 h-[calc(100vh-8rem)] pb-10 pl-6">
            <div className="flex items-center gap-2 p-4">
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
                    <div className="space-y-4 gap-4 flex flex-col">
                      {section.items.map((link, idx) => (
                        <div key={idx} className="grid">
                          <div className="flex gap-2 pl-4 items-center">
                            <Iconly name={link.icon} size="small" primaryColor={null} secondaryColor={null} />

                            <Link href={link.href} className="text-md font-medium">
                              {link.title}
                            </Link>
                          </div>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </ScrollArea>
        </SheetContent>
      </Sheet>
    </>
  );
}
