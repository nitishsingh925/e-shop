import { Button } from "@/components/ui/button";
import { LayoutGrid, Search, ShoppingBag } from "lucide-react";
import Image from "next/image";
import React, { FC } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header: FC = () => {
  return (
    <header className="flex p-5 shadow-md items-center justify-between ">
      {/* left side logo category search */}
      <div className="flex items-center gap-8">
        <Image src="/logo.png" alt="logo" width={150} height={100} />
        <DropdownMenu>
          <DropdownMenuTrigger className="outline-none">
            <h2 className="hidden md:flex gap-2 items-center border rounded-full p-2 px-10 bg-slate-200 cursor-pointer">
              <LayoutGrid className="h-5 w-5" />
              Category
            </h2>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuItem>Subscription</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <div className="hidden md:flex gap-3 items-center border rounded-full p-2 px-5">
          <Search />
          <input type="text" placeholder="Search" className="outline-none" />
        </div>
      </div>
      {/* right side cart login */}
      <div className="flex items-center gap-2">
        <h2 className="flex gap-2 items-center text-lg">
          <ShoppingBag /> 0
        </h2>
        <Button>Login</Button>
      </div>
    </header>
  );
};

export default Header;
