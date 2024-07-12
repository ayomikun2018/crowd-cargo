"use client";
import { DataTable } from "@/components/ui/data-table";
import { columns } from "./columns";

export function OrdersTable({ data }) {
  return (
    <>
      <DataTable columns={columns} data={data} searchKey="for runner" />
    </>
  );
}
