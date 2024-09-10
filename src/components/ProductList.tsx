import React from "react";
import ProductItem from "./ProductItem";

export interface Product {
  name: string;
  description: string;
  mrp: number;
  selling_price: number;
  item_quantity_type: string;
  slug: string;
  categories: string[];
  image: string;
}

const ProductList: React.FC = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/products`,
    {
      cache: "no-store",
    }
  );
  const products: Product[] = await response.json();

  return (
    <div className="mt-10">
      <h2 className="text-green-600 font-bold text-2xl">
        Our Popular Products
      </h2>
      <ProductItem products={products} />
    </div>
  );
};

export default ProductList;
