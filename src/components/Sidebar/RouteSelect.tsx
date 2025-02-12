"use client"
import React from "react";
import {
  FiHome,
} from "react-icons/fi";
import { IoReorderFour } from "react-icons/io5";

import {  Route } from "./Route";
import { hasRoute, HOME, REFUND_ORDERS } from "@/utils/routes";
import { usePathname } from "next/navigation";

export const RouteSelect = () => {
 const pathname = usePathname()

  return (
    <div className="space-y-1">
      <Route href={HOME} Icon={FiHome} selected={hasRoute(pathname, HOME)} title="Dashboard" />
      <Route href={ REFUND_ORDERS} Icon={IoReorderFour} selected={hasRoute(pathname, REFUND_ORDERS)} title="Refund Orders" />
    </div>
  );
};


