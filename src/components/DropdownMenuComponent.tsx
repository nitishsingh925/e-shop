import { FC, useMemo } from "react";
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
import useCategories, { Category } from "@/hooks/useCategories";

const DropdownMenuComponent: FC = () => {
  const { categories, loading, error } = useCategories();

  const renderedCategories = useMemo(() => {
    return categories.map((category: Category) => (
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
    ));
  }, [categories]);

  return (
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
        {loading ? (
          <DropdownMenuItem>Loading...</DropdownMenuItem>
        ) : error ? (
          <DropdownMenuItem>{error}</DropdownMenuItem>
        ) : (
          renderedCategories
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropdownMenuComponent;
