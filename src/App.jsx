import { useProducts } from "./hooks/useProducts";
import { ProductGrid } from "./components/ProductGrid";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, ShoppingBag, Layers, ShoppingCart, User, Menu } from "lucide-react";

export default function App() {
  const { products, loading, error, setSearch, setCategory } = useProducts();

  if (error) return (
    <div className="flex h-screen items-center justify-center">
      <div className="text-center p-10 bg-rose-50 rounded-2xl border border-rose-100">
        <p className="text-rose-600 font-bold">Error loading catalog</p>
        <p className="text-rose-400 text-sm">{error}</p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#fcfcfc]">
      {/* --- ECOMMERCE NAVIGATION --- */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
        <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
          
          {/* Logo Section */}
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500 text-white shadow-lg shadow-orange-200">
              <ShoppingBag className="h-6 w-6" />
            </div>
            <span className="text-2xl font-black tracking-tighter text-slate-900">
              Swift<span className="text-orange-500">Shop</span>
            </span>
          </div>
          
          {/* Main Nav */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-bold uppercase tracking-wider">
            <a href="#" className="relative text-orange-600 after:absolute after:left-0 after:-bottom-[29px] after:h-[3px] after:w-full after:bg-orange-500">
              Catalog
            </a>
            <a href="#" className="text-slate-500 hover:text-orange-500 transition-colors">Deals</a>
            <a href="#" className="text-slate-500 hover:text-orange-500 transition-colors">New Arrivals</a>
          </nav>

          {/* User Actions */}
          <div className="flex items-center gap-2 md:gap-5">
            <button className="p-2 text-slate-700 hover:bg-slate-100 rounded-full transition-colors relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute top-0 right-0 flex h-4 w-4 items-center justify-center rounded-full bg-slate-900 text-[10px] font-bold text-white">
                0
              </span>
            </button>
            <button className="hidden sm:flex items-center gap-2 bg-slate-900 text-white px-5 py-2.5 rounded-full text-sm font-bold hover:bg-slate-800 transition-all active:scale-95 shadow-md">
              <User className="h-4 w-4" /> Sign In
            </button>
            <button className="lg:hidden p-2">
              <Menu className="h-6 w-6 text-slate-900" />
            </button>
          </div>
        </div>
      </header>

      <main className="container mx-auto py-10 px-4 md:px-6">
        {/* --- PAGE TITLE & STATS --- */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <h1 className="text-4xl font-black text-slate-900 tracking-tight">Browse Products</h1>
            <p className="text-slate-500 font-medium mt-1">Discover {products.length} exclusive items in our collection.</p>
          </div>
        </div>

        {/* --- MODERN FILTER TOOLBAR --- */}
        <div className="flex flex-col md:flex-row gap-4 mb-12 items-center">
          <div className="relative w-full md:flex-grow">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
            <Input 
              placeholder="What are you looking for today?" 
              className="h-14 pl-12 pr-4 bg-white border-slate-200 rounded-2xl shadow-sm focus-visible:ring-orange-500 text-base"
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          
          <div className="flex items-center gap-3 w-full md:w-auto">
            <div className="hidden md:flex h-14 w-14 items-center justify-center bg-white border border-slate-200 rounded-2xl text-slate-400">
              <Layers className="h-5 w-5" />
            </div>
            <Select onValueChange={(val) => setCategory(val)}>
              <SelectTrigger className="h-14 w-full md:w-64 bg-white border-slate-200 rounded-2xl shadow-sm font-semibold text-slate-700">
                <SelectValue placeholder="All Categories" />
              </SelectTrigger>
              <SelectContent className="rounded-xl border-slate-200">
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="electronics">Electronics</SelectItem>
                <SelectItem value="jewelry">Jewelry</SelectItem>
                <SelectItem value="men's clothing">Men's Clothing</SelectItem>
                <SelectItem value="women's clothing">Women's Clothing</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* --- GRID RENDERING --- */}
        <ProductGrid products={products} loading={loading} />
      </main>
    </div>
  );
}