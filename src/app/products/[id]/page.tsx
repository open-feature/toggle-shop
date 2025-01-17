"use client";

import Image from "next/image";
import { useCart } from "@/hooks/use-cart";
import { useProduct } from "@/hooks/use-products";

export default function ProductPage({ params }: { params: { id: string } }) {
  const { addToCart } = useCart();
  const product = useProduct(params.id);

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="md:flex">
      <div className="md:flex-shrink-0 p-8">
        <Image
          src={product.image}
          alt={product.name}
          width={400}
          height={400}
          className="h-48 w-full object-cover md:w-48 rounded-md"
        />
      </div>
      <div className="p-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-2">
          {product.name}
        </h2>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <p className="text-gray-900 font-bold text-xl mb-4">
          ${product.price.toFixed(2)}
        </p>
        <button
          onClick={handleAddToCart}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
