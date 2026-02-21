import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Badge } from "./ui/badge";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Star, CheckCircle2, Truck } from "lucide-react";

export const QuickViewModal = ({ product, children }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      {/* Added dark:bg-slate-900 and dark:border-slate-800 */}
      <DialogContent className="sm:max-w-[800px] p-0 overflow-hidden border-none dark:border dark:border-slate-800 shadow-2xl bg-white dark:bg-slate-950">
        <div className="flex flex-col md:flex-row h-full">
          
          {/* Left Side: Image Container */}
          <div className="w-full md:w-1/2 bg-slate-50 dark:bg-slate-900 flex items-center justify-center p-8">
            <div className="relative group w-full h-full flex items-center justify-center bg-white dark:bg-slate-800 rounded-2xl p-4 shadow-inner">
              <img 
                src={product?.thumbnail} 
                alt={product?.title} 
                className="max-h-[350px] w-full object-contain transition-transform hover:scale-110 duration-500"
              />
            </div>
          </div>

          {/* Right Side: Details */}
          <div className="w-full md:w-1/2 p-8 flex flex-col bg-white dark:bg-slate-950">
            <div className="flex items-center gap-2 mb-2">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`h-4 w-4 ${i < Math.floor(product?.rating || 4) ? 'fill-current' : ''}`} />
                ))}
              </div>
              <span className="text-xs font-bold text-slate-500 dark:text-slate-400">
                ({product?.rating || '4.8'} / 5.0)
              </span>
            </div>

            <DialogHeader className="text-left mb-4">
              <DialogTitle className="text-2xl font-black text-slate-900 dark:text-white leading-tight">
                {product?.title}
              </DialogTitle>
              <p className="text-orange-600 dark:text-orange-400 font-bold text-sm uppercase tracking-wider">
                {product?.brand || 'Premium Collection'}
              </p>
            </DialogHeader>

            <div className="space-y-4 flex-grow">
              <div className="flex items-baseline gap-3">
                <span className="text-3xl font-black text-slate-900 dark:text-white">${product?.price}</span>
                <span className="text-lg text-slate-400 dark:text-slate-500 line-through">
                  ${Math.round(product?.price * 1.2)}
                </span>
                <Badge variant="outline" className="border-orange-200 dark:border-orange-500/30 text-orange-600 dark:text-orange-400 bg-orange-50 dark:bg-orange-500/10 font-bold">
                  SAVE {Math.round(product?.discountPercentage)}%
                </Badge>
              </div>

              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed border-t dark:border-slate-800 pt-4">
                {product?.description || "High-quality product designed for durability and performance."}
              </p>

              <div className="space-y-2 py-4">
                <div className="flex items-center gap-2 text-sm text-emerald-600 dark:text-emerald-400 font-medium">
                  <CheckCircle2 className="h-4 w-4" /> In Stock - Ready to ship
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                  <Truck className="h-4 w-4" /> Delivered within 3-5 business days
                </div>
              </div>
            </div>

            <div className="flex gap-3 mt-6">
              <Button className="flex-grow h-12 bg-orange-500 hover:bg-orange-600 dark:hover:bg-orange-400 text-white font-bold text-lg gap-3 shadow-lg shadow-orange-200 dark:shadow-none transition-all active:scale-95">
                <ShoppingCart className="h-5 w-5" /> Add to Cart
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};