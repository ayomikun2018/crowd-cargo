"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Label } from "@radix-ui/react-label";

export function DropdownCategories() {
  return (
    <div className="flex flex-col gap-2">
      <Label htmlFor="  Main Category" className="font-medium">
        Sub Category
      </Label>
      <DropdownMenu className="">
        <DropdownMenuTrigger
          className="border border-slate-400 rounded-md p-3 text-start "
          variant="outline"
          aria-placeholder="Clothing"
        >
          Clothing
        </DropdownMenuTrigger>
        <DropdownMenuContent className="">
          <DropdownMenuLabel>Clothing</DropdownMenuLabel>
          <DropdownMenuItem>Kids Fashion</DropdownMenuItem>
          <DropdownMenuItem>Jewelry & Accessories</DropdownMenuItem>
          <DropdownMenuItem>Perfumes & Candles</DropdownMenuItem>
          <DropdownMenuItem>Shoes, and Watches</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
export function DropdownSubCategories() {
  return (
    <div className="flex flex-col gap-2">
      <Label htmlFor="  Main Category" className="font-medium">
        Main Category
      </Label>
      <DropdownMenu className="">
        <DropdownMenuTrigger
          className="border border-slate-400 rounded-md p-3 text-start "
          variant="outline"
          aria-placeholder="Clothing"
        >
          Sportswear
        </DropdownMenuTrigger>
        <DropdownMenuContent className="">
          <DropdownMenuLabel>Clothing</DropdownMenuLabel>
          <DropdownMenuItem>Kids Fashion</DropdownMenuItem>
          <DropdownMenuItem>Jewelry & Accessories</DropdownMenuItem>
          <DropdownMenuItem>Perfumes & Candles</DropdownMenuItem>
          <DropdownMenuItem>Shoes, and Watches</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
