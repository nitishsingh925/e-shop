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
      {products.map(
        (product, index) =>
          index < 8 && (
            <div
              key={product.slug}
              className="p-2 md:p-6 flex flex-col items-center justify-center gap-3 border rounded-lg overflow-hidden hover:scale-105 hover:shadow-lg transition-transform transition-shadow duration-300 ease-in-out cursor-pointer"
            >
              <Image
                src={`/products/${product.image}`}
                alt={product.name}
                width={500}
                height={200}
                className="w-[200px] h-[200px] object-contain rounded-lg transition-transform duration-300 ease-in-out hover:scale-110"
              />
              <h2 className="font-bold text-lg">{product.name}</h2>
              <div className="flex justify-center w-full gap-3">
                <h2 className="font-bold">₹{product.selling_price}</h2>
                {product.mrp !== product.selling_price && (
                  <h2 className="font-bold text-lg line-through text-gray-500">
                    ₹{product.mrp}
                  </h2>
                )}
              </div>
              <div className="flex justify-center">
                <Button
                  variant="outline"
                  className="text-primary hover:text-white hover:bg-primary transition-colors duration-300 ease-in-out"
                >
                  Add to Cart
                </Button>
              </div>
            </div>
          )
      )}
    </div>
  );
};

export default ProductItem;
