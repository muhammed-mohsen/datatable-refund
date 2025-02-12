"use client"

import { ColumnDef } from "@tanstack/react-table"

import {  type RefundOrder } from "@/types/refundOrders"

import RefundOrderStatusColumn from "./RefunOrderStatusColumn"
import ActiveColumn from "./ActiveColumn"
import { REFUND_ORDERS_DETAILS } from "@/utils/routes"
import Link from "next/link"
import { Button } from "../ui/button"
// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

export const columns: ColumnDef<RefundOrder>[] = [
  {
    accessorKey: "id",
    header: "Id",
  },
  {
    accessorKey: "reason",
    header: "Reason",
  },
  {
    accessorKey: "amount",
    header: "Amount",
  },
  {
    accessorKey: "store_name",
    header: "Sore Name",
  },
  {
    accessorKey: "store_logo",
    header: "Sore Logo",
  },
  {
    accessorKey: "store_url",
    header: "Sore Url",
  },

  {
    accessorKey: "active",
    header: "Active",
    cell:ActiveColumn,

  },
 
  // {
  //   accessorKey: "decision",
  //   header: "Decision",
  // },
  {
    id: "decision",
    header: "Decision",
    cell:RefundOrderStatusColumn ,
  },
  {
    // accessorKey: "Action",
    header: "Actions",
    cell:({row})=><Link  href={REFUND_ORDERS_DETAILS(row.original.id)}><Button className="cursor-pointer">Show</Button></Link>,

  },
]
