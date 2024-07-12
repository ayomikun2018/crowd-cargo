"use client";

import { cn } from "@/lib/utils";
import { EyeIcon } from "lucide-react";

export const columns = [
  {
    accessorKey: "customerName",
    header: "Customer Name",
  },
  {
    accessorKey: "orderDate",
    header: "Order Date",
  },
  {
    accessorKey: "items",
    header: "Items",
  },
  {
    accessorKey: "orderTotal",
    header: "Order Total",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ getValue }) => {
      const status = getValue().toLowerCase();
      return (
        <div
          className={cn(
            status === "waiting"
              ? "text-yellow-500"
              : status === "completed"
              ? "text-green-500"
              : status === "in transit"
              ? "text-green-500"
              : status === "cancelled"
              ? "text-red-500"
              : ""
          )}
        >
          {getValue()}
        </div>
      );
    },
  },
  {
    id: "actions",
    cell: ({ row }) => (
      <div
        data={row.original}
        className="bg-slate-100/90 px-2 py-1 flex items-center justify-center w-max rounded-sm"
      >
        <EyeIcon className="w-4 h-4 mr-1" />
        View
      </div>
    ),
  },
];
