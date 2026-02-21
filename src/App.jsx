import { useState } from "react"; // Added useState for view management
import { useProducts } from "./hooks/useProducts";
import { useTheme } from "./context/ThemeContext";
import { ProductGrid } from "./components/ProductGrid";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, ShoppingBag, ShoppingCart, User, Moon, Sun } from "lucide-react";

export default function App() {
  // 1. Pull the new arrays from your hook
  const { products, deals, newArrivals, loading, error, setSearch, setCategory } = useProducts();
  const { theme, toggleTheme } = useTheme();
  
  // 2. State to track which collection we are looking at
  const [activeView, setActiveView] = useState("catalog"); // options: 'catalog', 'deals', 'new'

  // 3. Helper to determine which data to send to the grid
  const getDisplayData = () => {
    if (activeView === "deals") return deals;
    if (activeView === "new") return newArrivals;
    return products;
  };

  const currentProducts = getDisplayData();

  if (error) return (
    <div className="flex h-screen items-center justify-center bg-white dark:bg-slate-950">
      <div className="text-center p-10 bg-rose-50 dark:bg-rose-950/20 rounded-2xl border border-rose-100 dark:border-rose-900">
        <p className="text-rose-600 dark:text-rose-400 font-bold">Error loading catalog</p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#fcfcfc] dark:bg-slate-950 transition-colors duration-300">
      <header className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md">
        <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
          
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500 text-white shadow-lg shadow-orange-200">
              <ShoppingBag className="h-6 w-6" />
            </div>
            <span className="text-2xl font-black tracking-tighter text-slate-900 dark:text-white">
              Swift<span className="text-orange-500"> Shop</span>
            </span>
          </div>
          
          {/* --- NAVIGATION LOGIC --- */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-bold uppercase tracking-wider">
            <button 
              onClick={() => setActiveView("catalog")}
              className={`relative transition-colors ${activeView === "catalog" ? "text-orange-600 after:absolute after:left-0 after:-bottom-[29px] after:h-[3px] after:w-full after:bg-orange-500" : "text-slate-500 hover:text-orange-500"}`}
            >
              Catalog
            </button>
            <button 
              onClick={() => setActiveView("deals")}
              className={`relative transition-colors ${activeView === "deals" ? "text-orange-600 after:absolute after:left-0 after:-bottom-[29px] after:h-[3px] after:w-full after:bg-orange-500" : "text-slate-500 hover:text-orange-500"}`}
            >
              Deals
            </button>
            <button 
              onClick={() => setActiveView("new")}
              className={`relative transition-colors ${activeView === "new" ? "text-orange-600 after:absolute after:left-0 after:-bottom-[29px] after:h-[3px] after:w-full after:bg-orange-500" : "text-slate-500 hover:text-orange-500"}`}
            >
              New Arrivals
            </button>
          </nav>

          <div className="flex items-center gap-2 md:gap-4">
            <button onClick={toggleTheme} className="p-2.5 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-all">
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <button className="p-2.5 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute top-1 right-1 flex h-4 w-4 items-center justify-center rounded-full bg-slate-900 dark:bg-orange-600 text-[10px] font-bold text-white">0</span>
            </button>
            <button className="hidden sm:flex items-center gap-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-6 py-2.5 rounded-full text-sm font-bold hover:opacity-90 shadow-md">
              <User className="h-4 w-4" /> Sign In
            </button>
          </div>
        </div>
      </header>

      <main className="container mx-auto py-10 px-4 md:px-6">
        <div className="mb-10">
          <h1 className="text-4xl font-black text-slate-900 dark:text-white tracking-tight capitalize">
            {activeView === "catalog" ? "Browse Products" : activeView + " Collection"}
          </h1>
          <p className="text-slate-500 dark:text-slate-400 font-medium mt-1">
            {loading ? "Loading collection..." : `Showing ${currentProducts.length} items.`}
          </p>
        </div>

        {/* Filters only show on main catalog to avoid logic conflicts */}
        {activeView === "catalog" && (
          <div className="flex flex-col md:flex-row gap-4 mb-12 items-center">
            <div className="relative w-full md:flex-grow">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-3 w-5 text-slate-400" />
              <Input 
                placeholder="Search products..." 
                className="h-14 pl-12 bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 dark:text-white rounded-2xl focus-visible:ring-orange-500 shadow-sm"
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <Select onValueChange={(val) => setCategory(val)}>
              <SelectTrigger className="h-14 w-full md:w-64 bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 dark:text-white rounded-2xl font-semibold shadow-sm">
                <SelectValue placeholder="All Categories" />
              </SelectTrigger>
              <SelectContent className="dark:bg-slate-900 dark:border-slate-800 dark:text-white">
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="electronics">Electronics</SelectItem>
                <SelectItem value="jewelry">Jewelry</SelectItem>
                <SelectItem value="men's clothing">Men's Clothing</SelectItem>
                <SelectItem value="women's clothing">Women's Clothing</SelectItem>
              </SelectContent>
            </Select>
          </div>
        )}

        <ProductGrid products={currentProducts} loading={loading} />
      </main>
    </div>
  );
}