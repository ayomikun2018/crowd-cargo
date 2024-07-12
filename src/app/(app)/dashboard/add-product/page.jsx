"use client";
import React, { useState } from "react";
import { AddProductForm } from "./_features/add-product-form";
import { Button } from "@/components/ui/button";

export default function DashboardPage() {
  const [isAddProduct, setIsAddProduct] = useState(false);

  const handleAddProduct = () => {
    setIsAddProduct(!isAddProduct);
  };

  return (
    <div className="pt-4">
      <h3 className="container font-semibold text-primary text-2xl">Add Product</h3>

      <div className="">
        {!isAddProduct ? (
          <div className="flex min-h-[70vh] flex-col justify-center items-center gap-4 text-center">
            <h3 className="text-primary font-semibold text-xl ">You have not added any product</h3>
            <p className=" text-gray-500 font-medium  flex  text-center ">
              Click the button below to start adding <br className="hidden md:block"></br>
              product.
            </p>
            <Button onClick={handleAddProduct} className="py-6 px-8 rounded-full ">
              Add Product
            </Button>{" "}
          </div>
        ) : (
          <AddProductForm />
        )}
      </div>
    </div>
  );
}
