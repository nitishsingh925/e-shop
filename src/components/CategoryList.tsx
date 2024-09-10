import React from "react";
import Image from "next/image";

const CategoryList = async () => {
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
    <div className="p-5">
      <h2 className="text-green-600 font-bold text-2xl">Shop by Category</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 gap-5 mt-4">
        {categories.map((category) => (
          <div
            key={category._id}
            className="group flex flex-col items-center bg-green-50 p-3 rounded-lg cursor-pointer hover:bg-green-200 transition-all duration-200 ease-in-out"
          >
            <div className="relative w-14 h-14">
              <Image
                src={`/${category.icon.url}`}
                alt={category.name}
                layout="fill"
                objectFit="contain"
                className="rounded-full transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <span className="text-green-800 font-semibold mt-2 text-sm lg:text-base group-hover:text-green-900">
              {category.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
