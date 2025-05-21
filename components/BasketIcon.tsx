'use client';

import Link from 'next/link';
import { ShoppingBasket } from "lucide-react";
import React from "react";

export const BasketIcon = () => {
  return (
    <Link
      href={"/orders"}
      className="flex items-center text-sm gap-2 border border-gray-200 px-2 py-1 rounded-md shadow-md
        hover:shadow-none hoverEffect"
    >
      <ShoppingBasket className="text-blue-500 w-6 h-6" />
      <div className="flex flex-col">
        <p className="text-xs">
          <span className="font-semibold">0</span> items
        </p>
        <p className="font-semibold">Orders</p>
      </div>
    </Link>
  )
}
