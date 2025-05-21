'use client';

import Link from 'next/link';
import { ShoppingBag } from "lucide-react";
import React, { useEffect, useState } from "react";

export const CartIcon = () => {
  const [isClient, setisClient] = useState(false);

  useEffect(() => {
    setisClient(true)
  },[])

  if(!isClient) return null;

  return (
    <Link
      href={"/cart"}
      className="flex items-center text-sm gap-2 border border-gray-200 px-2 py-1 rounded-md shadow-md
        hover:shadow-none hoverEffect"
    >
      <ShoppingBag className="text-blue-500 w-6 h-6" />
      <div className="flex flex-col">
        <p className="text-xs">
          <span className="font-semibold">0</span> items
        </p>
        <p className="font-semibold">Cart</p>
      </div>
    </Link>
  );
};
