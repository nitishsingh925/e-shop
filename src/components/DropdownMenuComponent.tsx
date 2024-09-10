import { FC } from "react";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LayoutGrid } from "lucide-react";

const DropdownMenuComponent: FC = async () => {
  interface Category {
    _id: string;
    name: string;
    icon: {
      url?: string;
    };
  }
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/categories`,
    {
      cache: "no-store",
    }
  );
  const categories: Category[] = await response.json();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="outline-none">
        <h2 className="hidden md:flex gap-2 items-center border rounded-full p-2 px-10 cursor-pointer hover:bg-primary">
          <LayoutGrid className="h-5 w-5" />
          Category
        </h2>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Categories</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {categories.map((category: Category) => (
          <DropdownMenuItem
            key={category._id}
            className="flex items-center cursor-pointer gap-2"
          >
            {category.icon?.url ? (
              <Image
                src={`/${category.icon.url}`}
                alt={category.name}
                width={30}
                height={30}
                unoptimized
              />
            ) : (
              <span>No Icon</span>
            )}
            <h2 className="text-lg">{category.name}</h2>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropdownMenuComponent;
