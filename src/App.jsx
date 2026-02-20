import { useProducts } from "./hooks/useProducts";
import { ProductGrid } from "./components/ProductGrid";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search } from "lucide-react";

export default function App() {
  const { products, loading, error, setSearch, setCategory } = useProducts();

  if (error) return <div className="p-10 text-destructive">Error: {error}</div>;

  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-4xl font-extrabold mb-8 tracking-tight">Catalog</h1>
      
      <div className="flex flex-col md:flex-row gap-4 mb-10">
        <div className="relative flex-grow">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input 
            placeholder="Search products..." 
            className="pl-8"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        
        <Select onValueChange={(val) => setCategory(val)}>
          <SelectTrigger className="w-full md:w-50">
            <SelectValue placeholder="All Categories" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            <SelectItem value="electronics">Electronics</SelectItem>
            <SelectItem value="jewelry">Jewelry</SelectItem>
            <SelectItem value="men's clothing">Men's Clothing</SelectItem>
            <SelectItem value="women's clothing">Women's Clothing</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <ProductGrid products={products} loading={loading} />
    </div>
  );
}