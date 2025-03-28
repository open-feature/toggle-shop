import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Suspense } from "react";
import ProductGridSkeleton from "@/components/ProductGridSkeleton";
import { ProductList } from "@/components/ProductList";

export default function AllProducts() {
  return (
    <div className="px-4 sm:px-0">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-semibold text-gray-900">All Products</h1>
        <Link
          href="/"
          className="flex items-center text-blue-600 hover:text-blue-800"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Link>
      </div>
      <Suspense fallback={<ProductGridSkeleton />}>
        <ProductList />
      </Suspense>
    </div>
  );
}
