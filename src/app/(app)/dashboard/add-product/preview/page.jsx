import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

export default function ProductPreview() {
  const Views = [
    {
      title: "Single Product View",
      image: "/image-01.svg",
      options: [
        "/image-01.svg",
        "/image-02.svg",
        "/image-06.svg",
        "/image-02.svg",
        "/image-05.svg",
      ],
      name: "Calvin Clein Regular fit slim fit shirt",
      source: "Sold by @Lumistore",
      description:
        "Feel your journey through the Norse realms, made possible by immersive haptic feedback and adaptive trigger functionality.",
      price: "N35,000",
      inStock: "50 Pieces",
      color: ["White", "Red", "Green", "Purple", "Black"],
      size: ["S", "M", "L", "XL", "XXL"],
    },
    {
      title: "Store Front Product View",
      image: "/image-02.svg",
      name: "Vonna Neva Walnut Sandalye Chair",
      description:
        "Feel your journey through the Norse realms, made possible by immersive haptic feedback and adaptive trigger functionality.",
      price: "NGN 195,000",
      proceed: "Add to Cart",
    },
  ];

  return (
    <div className="container space-y-6 ">
      <h3 className="font-semibold text-primary text-2xl mb-4">
        Preview Product
      </h3>
      <div className="flex justify-between"></div>

      <div className="flex md:flex-row flex-col gap-4">
        {Views.map((view, index) => (
          <div key={index} className="">
            <h4 className="font-semibold  text-lg mb-2">{view.title}</h4>
            {view.title === "Single Product View" ? (
              <div className="flex flex-col items-start md:gap-4 gap-4 p-4 md:min-h-16 md:max-w-[75%] bg-white rounded-lg outline-4 border-2">
                <Image
                  src={view.image}
                  alt={view.name}
                  width={0}
                  height={500}
                  className="w-full"
                />
                <div className="flex gap-4 pt-4">
                  {view.options.map((option, i) => (
                    <span key={i} className="flex gap-4">
                      <Image
                        src={option}
                        alt={view.name + " Option " + (i + 1)}
                        width={60}
                        height={60}
                        className="mb-4 rounded-md flex"
                      />
                    </span>
                  ))}
                </div>
                <p className="text-sm text-gray-400">{view.source}</p>
                <h4 className="font-bold text-lg">{view.name}</h4>
                <p className="my-2 w-[80%] text-gray-400">{view.description}</p>
                <p className="text-xl font-semibold">{view.price}</p>
                <p className="text-sm font-semibold">
                  In Stock:
                  <span className="text-green-500">{view.inStock}</span>
                </p>
                <div className="flex space-x-2">
                  {view.color.map((color, i) => (
                    <span key={i} className="px-2 py-1 border rounded-md">
                      {color}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-2">
                  {view.size.map((size, i) => (
                    <span key={i} className="px-2 py-1 border rounded-md">
                      {size}
                    </span>
                  ))}
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-start md:gap-4 p-4 gap-4 md:min-h-16 md:max-w-[75%] bg-white rounded-lg outline-4 border-2">
                <Image
                  src={view.image}
                  alt={view.name}
                  width={0}
                  height={500}
                  className="w-full"
                />
                <h4 className="font-bold text-lg">{view.name}</h4>
                <p className="my-2">{view.description}</p>
                <p className="text-xl font-semibold">{view.price}</p>
                <Button className="mt-4 px-4 py-2 text-green-300 bg-white rounded-md">
                  {view.proceed}
                </Button>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="flex items-center self-center justify-center gap-4 pt-2">
        <Button variant="secondary" className="rounded-full px-20">
          Edit
        </Button>
        <Button className="rounded-full px-10">Post to Store</Button>
      </div>
    </div>
  );
}
