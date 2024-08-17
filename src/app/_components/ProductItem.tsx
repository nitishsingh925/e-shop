import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { FC } from "react";
import { Product } from "./ProductList";

interface ProductItemProps {
  products: Product[];
}

const ProductItem: FC<ProductItemProps> = ({ products }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-5">
      {products.map((product) => (
        <div
          key={product.slug}
          className="p-2 md:p-6 flex flex-col items-center justify-center gap-3 border rounded-lg overflow-hidden"
        >
          <Image
            src={`/products/${product.image}`}
            alt={product.name}
            width={500}
            height={200}
            objectFit="cover"
          />
          <div className="p-4 flex flex-col">
            <h3 className="text-gray-800 font-semibold text-lg">
              {product.name}
            </h3>
            <p className="text-gray-600">{product.description}</p>
            <p className="text-green-500 font-bold mt-2">
              ₹{product.selling_price}
            </p>
            <Button variant={"outline"}>Add to Cart</Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductItem;
