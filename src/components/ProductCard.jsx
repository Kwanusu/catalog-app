import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { ShoppingCart, Eye, Heart, Star, Flame, Sparkles } from "lucide-react"; // Added icons for badges
import { QuickViewModal } from "./QuickViewModal";

export const ProductCard = ({ product }) => {
  // Logic matching our useProducts hook
  const isHotDeal = product.discountPercentage >= 15;
  const isNew = product.id > 90; // Matching our "New Arrivals" threshold

  return (
    <Card className="group flex flex-col h-full overflow-hidden border-slate-200 dark:border-slate-800 transition-all duration-300 hover:shadow-xl bg-white dark:bg-slate-900 ring-1 ring-slate-200/50 dark:ring-white/5">
      <CardHeader className="p-0 relative">
        
        {/* --- DYNAMIC BADGE LAYER --- */}
        <div className="absolute top-3 left-3 z-10 flex flex-col gap-2">
          {isHotDeal && (
            <div className="flex items-center gap-1 bg-rose-600 text-white px-2.5 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest shadow-lg animate-pulse">
              <flame className="h-3 w-3" /> Hot Deal
            </div>
          )}
          {isNew && !isHotDeal && (
            <div className="flex items-center gap-1 bg-blue-600 text-white px-2.5 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest shadow-lg">
              <Sparkles className="h-3 w-3" /> New
            </div>
          )}
        </div>

        {/* Product Image Container */}
        <div className="aspect-square bg-[#f8f8f8] dark:bg-slate-800/50 flex items-center justify-center overflow-hidden">
          <img 
            src={product?.thumbnail} 
            alt={product?.title} 
            className="w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-105" 
          />
          
          <Button 
            variant="ghost" 
            size="icon" 
            className="absolute top-2 right-2 rounded-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm text-slate-400 hover:text-rose-500 shadow-sm"
          >
            <Heart className="h-4 w-4" />
          </Button>

          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 translate-y-12 group-hover:translate-y-0 transition-transform duration-300">
            <QuickViewModal product={product}>
              <Button type="button" className="rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-slate-800 gap-2 px-4 h-9 text-xs">
                <Eye className="h-3.5 w-3.5" /> Quick View
              </Button>
            </QuickViewModal>
          </div>
        </div>

        {/* Discount Tag (Percentage) */}
        <div className="absolute top-0 right-0 bg-orange-500 text-white px-3 py-1 text-[11px] font-black tracking-tighter rounded-bl-xl shadow-md">
          -{Math.round(product?.discountPercentage)}%
        </div>
      </CardHeader>

      <CardContent className="p-4 flex-grow">
        <div className="flex justify-between items-center mb-2">
          <span className="text-[10px] font-bold text-orange-600 dark:text-orange-400 uppercase tracking-wider bg-orange-50 dark:bg-orange-500/10 px-2 py-0.5 rounded">
            {product?.category}
          </span>
          <div className="flex items-center gap-1 text-amber-500">
            <Star className="h-3 w-3 fill-current" />
            <span className="text-xs font-bold text-slate-700 dark:text-slate-300">{product?.rating || '4.8'}</span>
          </div>
        </div>

        <CardTitle className="text-base font-bold text-slate-800 dark:text-white line-clamp-2 min-h-[2.5rem] mb-2 group-hover:text-orange-600 transition-colors">
          {product?.title}
        </CardTitle>

        <div className="flex flex-col mt-auto">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-black text-slate-900 dark:text-white">${product?.price}</span>
            <span className="text-sm text-slate-400 dark:text-slate-500 line-through">
              ${Math.round(product?.price * (1.2))}
            </span>
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <Button className="w-full gap-3 font-bold bg-orange-500 hover:bg-orange-600 text-white h-11 transition-all">
          <ShoppingCart className="h-4 w-4" /> Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};