"use client";
import React, { useEffect, useState } from "react";
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

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("/api/products");
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data: Product[] = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Failed to fetch products", error);
      }
    };

    fetchProducts();
  }, []);

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
