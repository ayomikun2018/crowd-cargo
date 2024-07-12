"use client";

import * as React from "react";
import {
  Check,
  ChevronDown,
  ChevronsDown,
  ChevronsDownUp,
  ChevronsUpDown,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Label } from "./label";

export function ComboboxDemo({ placeholder, label }) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  const frameworks = [
    {
      value: "next.js",
      label: "Next.js",
    },
    {
      value: "sveltekit",
      label: "SvelteKit",
    },
    {
      value: "nuxt.js",
      label: "Nuxt.js",
    },
    {
      value: "remix",
      label: "Remix",
    },
    {
      value: "astro",
      label: "Astro",
    },
  ];
  return (
    <Popover open={open} onOpenChange={setOpen} className="">
      <PopoverTrigger asChild className="p-4">
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className=" justify-between p-4"
        >
          {value
            ? frameworks.find((framework) => framework.value === value)?.label
            : placeholder}
          <ChevronsDownUp className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-0">
        <Command>
          <CommandInput placeholder={`Search ${label}`} className="p-4" />
          <CommandEmpty>No {label} found.</CommandEmpty>
          <CommandGroup>
            {[]?.map(({ value, label }) => (
              <CommandItem
                key={value}
                value={value}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? "" : currentValue);
                  setOpen(false);
                }}
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    value === value ? "opacity-100" : "opacity-0"
                  )}
                />
                {label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
