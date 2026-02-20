import { ProductCard } from "./ProductCard";
import { Skeleton } from "@/components/ui/skeleton"; // shadcn/ui skeleton component

export const ProductGrid = ({ products, loading }) => {
  // --- SKELETON LOADING STATE ---
  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-8">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="flex flex-col space-y-4">
            <Skeleton className="h-[300px] w-full rounded-xl bg-slate-100" />
            <Skeleton className="h-4 w-2/3 bg-slate-100" />
            <Skeleton className="h-4 w-1/2 bg-slate-100" />
            <div className="flex justify-between pt-2">
              <Skeleton className="h-8 w-20 bg-slate-100" />
              <Skeleton className="h-8 w-24 bg-slate-100" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  // --- EMPTY STATE ---
  if (products.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-24 text-center">
        <div className="bg-slate-50 p-6 rounded-full mb-4">
          <svg className="h-12 w-12 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-slate-900">No products found</h3>
        <p className="text-slate-500 mt-2 max-w-xs">
          We couldn't find anything matching your search. Try adjusting your filters or keywords.
        </p>
      </div>
    );
  }

  // --- CONTENT STATE ---
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-8">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};