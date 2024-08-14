"use client";
import { FC } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Search, ShoppingBag } from "lucide-react";
import DropdownMenuComponent from "@/components/DropdownMenuComponent";

const Header: FC = () => {
  return (
    <header className="flex p-5 shadow-md items-center justify-between">
      <div className="flex items-center gap-8">
        <Image src="/logo.png" alt="logo" width={150} height={100} priority />
        <DropdownMenuComponent />
        <div className="hidden md:flex gap-3 items-center border rounded-full p-2 px-5">
          <Search aria-label="Search Icon" />
          <input
            type="text"
            placeholder="Search"
            className="outline-none"
            aria-label="Search"
          />
        </div>
      </div>
      <div className="flex items-center gap-2">
        <h2 className="flex gap-2 items-center text-lg">
          <ShoppingBag aria-label="Shopping Bag Icon" /> 0
        </h2>
        <Button>Login</Button>
      </div>
    </header>
  );
};

export default Header;
