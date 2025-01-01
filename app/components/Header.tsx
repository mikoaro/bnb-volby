"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <div className="flex items-center space-x-4">
            <Link href="/">
            <img src="/volby_logo.png" alt="" className="h-15 w-32" />
            </Link>
          
          <Button className="bg-blue-700 rounded-3xl text-white">DISCOVER</Button>
        </div>
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search Creators..."
            className="border rounded-lg px-4 py-2 text-sm w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
         
        </div>
        <div>
        <Button className="px-4 py-2 outline-double text-blue-700 bg-white hover:bg-blue-700 hover:text-white">
            Connect Wallet
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
