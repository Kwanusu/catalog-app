import { ProductCard } from "./ProductCard";

export const ProductGrid = ({products, loading}) => {
    if (loading) return <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">Loading</div>

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
    );
};