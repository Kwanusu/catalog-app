import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Badge } from "./ui/badge";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Eye, Star, CheckCircle2, Truck } from "lucide-react";

export const QuickViewModal = ({ product, children }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[800px] p-0 overflow-hidden border-none shadow-2xl">
        <div className="flex flex-col md:flex-row h-full">
          {/* Left Side: Image Gallery Style */}
          <div className="w-full md:w-1/2 bg-slate-50 flex items-center justify-center p-8">
            <img 
              src={product?.thumbnail} 
              alt={product?.title} 
              className="max-h-[400px] w-full object-contain mix-blend-multiply transition-transform hover:scale-105 duration-500"
            />
          </div>

          {/* Right Side: Product Details */}
          <div className="w-full md:w-1/2 p-8 flex flex-col">
            <div className="flex items-center gap-2 mb-2">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`h-4 w-4 ${i < Math.floor(product?.rating || 4) ? 'fill-current' : ''}`} />
                ))}
              </div>
              <span className="text-xs font-bold text-slate-500">({product?.rating || '4.8'} / 5.0)</span>
            </div>

            <DialogHeader className="text-left mb-4">
              <DialogTitle className="text-2xl font-black text-slate-900 leading-tight">
                {product?.title}
              </DialogTitle>
              <p className="text-orange-600 font-bold text-sm uppercase tracking-wider">
                {product?.brand || 'Premium Collection'}
              </p>
            </DialogHeader>

            <div className="space-y-4 flex-grow">
              <div className="flex items-baseline gap-3">
                <span className="text-3xl font-black text-slate-900">${product?.price}</span>
                <span className="text-lg text-slate-400 line-through">${Math.round(product?.price * 1.2)}</span>
                <Badge variant="outline" className="border-orange-200 text-orange-600 bg-orange-50 font-bold">
                  SAVE {Math.round(product?.discountPercentage)}%
                </Badge>
              </div>

              <p className="text-slate-600 text-sm leading-relaxed border-t pt-4">
                {product?.description || "High-quality product designed for durability and performance. Perfect for daily use and professional settings."}
              </p>

              <div className="space-y-2 py-4">
                <div className="flex items-center gap-2 text-sm text-emerald-600 font-medium">
                  <CheckCircle2 className="h-4 w-4" /> In Stock - Ready to ship
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-500">
                  <Truck className="h-4 w-4" /> Delivered within 3-5 business days
                </div>
              </div>
            </div>

            <div className="flex gap-3 mt-6">
              <Button className="flex-grow h-12 bg-orange-500 hover:bg-orange-600 font-bold text-lg gap-3 shadow-lg shadow-orange-200">
                <ShoppingCart className="h-5 w-5" /> Add to Cart
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};