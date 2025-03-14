"use client";

import Link from "next/link";
import Image from "next/image";
import { useProducts } from "@/hooks/use-products";

export function ProductList() {
  const products = useProducts();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <Link
          key={product.id}
          href={`/products/${product.id}`}
          className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
        >
          <Image
            src={product.image}
            alt={product.name}
            width={192}
            height={192}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-lg font-semibold text-gray-900">
              {product.name}
            </h2>
            <p className="text-gray-600">${product.price.toFixed(2)}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
