import { Label } from "@radix-ui/react-label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ComboboxDemo } from "@/components/ui/combo-box";
import Image from "next/image";
import { PhotoUpload } from "@/components/upload/photo-upload";
import Link from "next/link";
import { RouteEnums } from "@/constants/route-urls";
export function AddProductForm() {
  return (
    <div className="grid md:grid-cols-3 gap-4 container w-full mt-10">
      <div className="grid md:col-span-2 gap-4 md:border-2 md:px-6 py-8">
        <span className="flex flex-col gap-6">
          <Label htmlFor="Product name" className="font-semibold">
            Product name
          </Label>
          <Input
            type="email"
            id="email"
            placeholder="e.g Village Rice"
            className=" p-6 rounded-lg"
          />
        </span>
        <span className="flex flex-col gap-2">
          <Label htmlFor="Description" className="font-semibold">
            Description
          </Label>
          <span className="font-light text-xs">
            Not more than <span className="text-blue-300">150 letters</span>{" "}
          </span>
          <Input
            type="text"
            id="text"
            placeholder="e.g Village Rice"
            className="p-6 rounded-lg mt-4"
          />
        </span>
        <span className="flex flex-col gap-2">
          <Label htmlFor="Pricing" className="font-semibold">
            Pricing
          </Label>
          <div className="flex justify-center  items-end  gap-2">
            <Button className="font-light text-xs border-2 p-6" variant="icon">
              <Image
                src="/naira.png"
                alt="naira-sign"
                className=""
                width={20}
                height={20}
              />
            </Button>
            <Input type="number" id="number" className=" p-6 rounded-lg mt-4" />
          </div>
        </span>
        <span className="flex flex-col gap-2">
          <Label
            htmlFor="Product Quantity/Units Available"
            className="font-semibold"
          >
            Product Quantity/Units Available
          </Label>

          <Input
            type="number"
            id="number"
            placeholder="e.g 45"
            className="p-6 rounded-lg mt-4"
          />
        </span>
      </div>
      <div className="flex flex-col gap-6 border-gray-400 md:p-4 w-full ">
        <div className="space-y-4">
          {[
            { placeholder: "Select Categories", label: "Categories" },
            { placeholder: "Select Subcategories", label: "Subcategories" },
          ].map(({ placeholder, label }) => (
            <div key={label} className="grid space-y-4">
              <Label htmlFor="Category" className="font-medium">
                {label}
              </Label>
              <ComboboxDemo placeholder={placeholder} label={label} />
            </div>
          ))}

          <PhotoUpload />
          <div className="w-full flex gap-4 md:px-8 px-4">
            <Link href={RouteEnums.ADD_PRODUCT_PREVIEW}>
              <Button variant="secondary" className="rounded-full  p-6 ">
                Preview
              </Button>
            </Link>

            <Button className="rounded-full w-1/2 p-6"> Post to Store</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
