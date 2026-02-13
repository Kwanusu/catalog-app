import { ProductCard } from "./ProductCard";
import { LoadingSpinner } from "./ui/spinner";

export const ProductGrid = ({products, loading}) => {
    if (loading)  {
        return <LoadingSpinner/>;
    }
    if (products.length === 0) {
        return (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        )
    };
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
    );
};