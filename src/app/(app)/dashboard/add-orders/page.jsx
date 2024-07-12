"use client";
import Image from "next/image";
import { OrdersTable } from "./_features/orders-table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function AddOrders() {
  const [showOrders, setShowOrders] = useState(false);
  const cards = [
    {
      title: "Total Orders",
      Image: "/total-badge.png",
      value: 0,
      discount: "+15%",
    },
    {
      title: "Pending Orders",
      Image: "/pending-badge.png",
      value: 0,
    },
    {
      title: "Completed Orders",
      Image: "/completed-badge.png",
      value: 0,
      discount: "+10%",
    },
  ];
  const NewOrders = [
    {
      customerName: "Shola Benson",
      orderDate: "Mar, 17. 2003",
      items: "5",
      status: "New",
      orderTotal: "NGN 35,000",
    },
    {
      customerName: "Shola Benson",
      orderDate: "Mar, 17. 2003",
      items: "5",
      status: "New",
      orderTotal: "NGN 35,000",
    },
    {
      customerName: "Shola Benson",
      orderDate: "Mar, 17. 2003",
      items: "5",
      status: "New",
      orderTotal: "NGN 35,000",
    },
    {
      customerName: "Shola Benson",
      orderDate: "Mar, 17. 2003",
      items: "5",
      status: "New",
      orderTotal: "NGN 35,000",
    },
    {
      customerName: "Shola Benson",
      orderDate: "Mar, 17. 2003",
      items: "5",
      status: "New",
      orderTotal: "NGN 35,000",
    },
    {
      customerName: "Shola Benson",
      orderDate: "Mar, 17. 2003",
      items: "5",
      status: "New",
      orderTotal: "NGN 35,000",
    },
    {
      customerName: "Shola Benson",
      orderDate: "Mar, 17. 2003",
      items: "5",
      status: "New",
      orderTotal: "NGN 35,000",
    },
    {
      customerName: "Shola Benson",
      orderDate: "Mar, 17. 2003",
      items: "5",
      status: "New",
      orderTotal: "NGN 35,000",
    },
    {
      customerName: "Shola Benson",
      orderDate: "Mar, 17. 2003",
      items: "5",
      status: "New",
      orderTotal: "NGN 35,000",
    },
    {
      customerName: "Shola Benson",
      orderDate: "Mar, 17. 2003",
      items: "5",
      status: "New",
      orderTotal: "NGN 35,000",
    },
  ];
  const Completed = [
    {
      customerName: "Shola Benson",
      orderDate: "Mar, 17. 2003",
      items: "5",
      status: "Completed",
      orderTotal: "NGN 35,000",
    },
    {
      customerName: "Shola Benson",
      orderDate: "Mar, 17. 2003",
      items: "5",
      status: "Completed",
      orderTotal: "NGN 35,000",
    },
    {
      customerName: "Shola Benson",
      orderDate: "Mar, 17. 2003",
      items: "5",
      status: "Completed",
      orderTotal: "NGN 35,000",
    },
    {
      customerName: "Shola Benson",
      orderDate: "Mar, 17. 2003",
      items: "5",
      status: "Completed",
      orderTotal: "NGN 35,000",
    },
    {
      customerName: "Shola Benson",
      orderDate: "Mar, 17. 2003",
      items: "5",
      status: "Completed",
      orderTotal: "NGN 35,000",
    },
    {
      customerName: "Shola Benson",
      orderDate: "Mar, 17. 2003",
      items: "5",
      status: "Completed",
      orderTotal: "NGN 35,000",
    },
    {
      customerName: "Shola Benson",
      orderDate: "Mar, 17. 2003",
      items: "5",
      status: "Completed",
      orderTotal: "NGN 35,000",
    },
    {
      customerName: "Shola Benson",
      orderDate: "Mar, 17. 2003",
      items: "5",
      status: "Completed",
      orderTotal: "NGN 35,000",
    },
    {
      customerName: "Shola Benson",
      orderDate: "Mar, 17. 2003",
      items: "5",
      status: "Completed",
      orderTotal: "NGN 35,000",
    },
    {
      customerName: "Shola Benson",
      orderDate: "Mar, 17. 2003",
      items: "5",
      status: "Completed",
      orderTotal: "NGN 35,000",
    },
  ];
  const ScheduledForDelivery = [
    {
      customerName: "Shola Benson",
      orderDate: "Mar, 17. 2003",
      items: "5",
      status: "Waiting",
      orderTotal: "NGN 35,000",
    },
    {
      customerName: "Shola Benson",
      orderDate: "Mar, 17. 2003",
      items: "5",
      status: "In Transit",
      orderTotal: "NGN 35,000",
    },
    {
      customerName: "Shola Benson",
      orderDate: "Mar, 17. 2003",
      items: "5",
      status: "Waiting",
      orderTotal: "NGN 35,000",
    },
    {
      customerName: "Shola Benson",
      orderDate: "Mar, 17. 2003",
      items: "5",
      status: "In Transit",
      orderTotal: "NGN 35,000",
    },
    {
      customerName: "Shola Benson",
      orderDate: "Mar, 17. 2003",
      items: "5",
      status: "In Transit",
      orderTotal: "NGN 35,000",
    },
    {
      customerName: "Shola Benson",
      orderDate: "Mar, 17. 2003",
      items: "5",
      status: "Waiting",
      orderTotal: "NGN 35,000",
    },
    {
      customerName: "Shola Benson",
      orderDate: "Mar, 17. 2003",
      items: "5",
      status: "In Transit",
      orderTotal: "NGN 35,000",
    },

    {
      customerName: "Shola Benson",
      orderDate: "Mar, 17. 2003",
      items: "5",
      status: "Waiting",
      orderTotal: "NGN 35,000",
    },
    {
      customerName: "Shola Benson",
      orderDate: "Mar, 17. 2003",
      items: "5",
      status: "In Transit",
      orderTotal: "NGN 35,000",
    },

    {
      customerName: "Shola Benson",
      orderDate: "Mar, 17. 2003",
      items: "5",
      status: "Waiting",
      orderTotal: "NGN 35,000",
    },
  ];

  const Cancelled = [
    {
      customerName: "Shola Benson",
      orderDate: "Mar, 17. 2003",
      items: "5",
      status: "Cancelled",
      orderTotal: "NGN 35,000",
    },
    {
      customerName: "Shola Benson",
      orderDate: "Mar, 17. 2003",
      items: "5",
      status: "Cancelled",
      orderTotal: "NGN 35,000",
    },
    {
      customerName: "Shola Benson",
      orderDate: "Mar, 17. 2003",
      items: "5",
      status: "Cancelled",
      orderTotal: "NGN 35,000",
    },
    {
      customerName: "Shola Benson",
      orderDate: "Mar, 17. 2003",
      items: "5",
      status: "Cancelled",
      orderTotal: "NGN 35,000",
    },
    {
      customerName: "Shola Benson",
      orderDate: "Mar, 17. 2003",
      items: "5",
      status: "Cancelled",
      orderTotal: "NGN 35,000",
    },
    {
      customerName: "Shola Benson",
      orderDate: "Mar, 17. 2003",
      items: "5",
      status: "Cancelled",
      orderTotal: "NGN 35,000",
    },
    {
      customerName: "Shola Benson",
      orderDate: "Mar, 17. 2003",
      items: "5",
      status: "Cancelled",
      orderTotal: "NGN 35,000",
    },
    {
      customerName: "Shola Benson",
      orderDate: "Mar, 17. 2003",
      items: "5",
      status: "Cancelled",
      orderTotal: "NGN 35,000",
    },
    {
      customerName: "Shola Benson",
      orderDate: "Mar, 17. 2003",
      items: "5",
      status: "Cancelled",
      orderTotal: "NGN 35,000",
    },
  ];

  return (
    <div className="container space-y-6">
      <div className="flex md:flex-row flex-col gap-4">
        {cards.map((option, index) => (
          <div
            key={index}
            className="flex flex-col items-start md:gap-4 p-4 md:min-h-16 md:w-2/3 bg-white rounded-lg outline-4 border-2"
          >
            <Image
              src={option.Image}
              alt={option.title}
              width={30}
              height={30}
            />
            <p className="font-medium mt-2 text-gray-700">{option.title}</p>
            <div className="flex gap-2 items-center justify-center ">
              <p className="text-xl font-extrabold font text-gray-900">
                {option.value}
              </p>
              <p className=" text-green-700 text-xs font-light rounded-lg bg-green-100 px-1">
                {option.discount}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="md:flex justify-between items-center w-full space-y-4">
        <h3 className="font-semibold text-primary text-2xl">Customer Orders</h3>
        <Button onClick={() => setShowOrders(!showOrders)}>
          {showOrders ? "Hide" : "Show"} Orders
        </Button>
      </div>

      {showOrders ? (
        <Tabs defaultValue="new-orders" className="w-full space-y-4">
          <TabsList className="flex gap-2 w-max">
            <TabsTrigger value="new-orders">New Orders</TabsTrigger>
            <TabsTrigger value="scheduled-for-delivery">
              Scheduled For Delivery
            </TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
            <TabsTrigger value="cancelled">Cancelled</TabsTrigger>
          </TabsList>

          {[
            { value: "new-orders", data: NewOrders },
            { value: "scheduled-for-delivery", data: ScheduledForDelivery },
            { value: "completed", data: Completed },
            { value: "cancelled", data: Cancelled },
          ].map(({ value, data }) => (
            <TabsContent key={value} value={value}>
              <OrdersTable data={data} />
            </TabsContent>
          ))}
        </Tabs>
      ) : (
        <div className="flex  flex-col md:justify-center items-center gap-4 text-center md:self-center md:py-20 px-10 ">
          <Image
            src="/add-order.png"
            alt="add-order"
            width={100}
            height={100}
            className=""
          />
          <h3 className=" text-primary font-semibold text-xl ">
            No Orders Yet
          </h3>
          <p className=" text-gray-500 font-medium  flex  text-center ">
            Your orders will show here once customers place an order.
          </p>
        </div>
      )}
    </div>
  );
}
