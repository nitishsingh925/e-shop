"use client";
import { Button } from "@/components/ui/button";
import { LayoutGrid, Search, ShoppingBag } from "lucide-react";
import Image from "next/image";
import React, { FC, useEffect, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface Category {
  _id: string;
  name: string;
  icon: {
    url: string;
  } | null;
}

const Header: FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  const baseUrl = "http://localhost:3000";

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(`${baseUrl}/api/categories?populate=*`);
        const data = await response.json();
        setCategories(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <header className="flex p-5 shadow-md items-center justify-between ">
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
            <DropdownMenuLabel>Categories</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {categories.map((category) => (
              <DropdownMenuItem
                key={category._id}
                className="flex items-center cursor-pointer gap-2"
              >
                {category.icon?.url ? (
                  <Image
                    src={`${baseUrl}/${category.icon.url}`}
                    alt={category.name}
                    width={30}
                    height={30}
                  />
                ) : (
                  <span>No Icon</span>
                )}
                <h2 className="text-lg">{category.name}</h2>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        <div className="hidden md:flex gap-3 items-center border rounded-full p-2 px-5">
          <Search />
          <input type="text" placeholder="Search" className="outline-none" />
        </div>
      </div>
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
