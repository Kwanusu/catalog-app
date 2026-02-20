import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ShoppingCart, Eye } from "lucide-react";

export const ProductCard = ({ product }) => (
  <Card className="group flex flex-col h-full overflow-hidden border-zinc-200 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 bg-card">
    <CardHeader className="p-0 relative">
      <div className="aspect-[4/5] bg-zinc-100 flex items-center justify-center overflow-hidden">
        <img 
          src={product.thumbnail} 
          alt={product.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
        />
        {/* Sleek Overlay */}
        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
           <Button variant="secondary" size="icon" className="rounded-full shadow-xl"><Eye className="h-4 w-4" /></Button>
        </div>
      </div>
      <Badge className="absolute top-3 left-3 bg-white/90 text-zinc-900 backdrop-blur-sm hover:bg-white">
        {product.category}
      </Badge>
    </CardHeader>

    <CardContent className="p-5 flex-grow">
      <div className="flex justify-between items-center mb-2">
        <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-semibold">{product.brand || 'Premium Selection'}</p>
        <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
          {Math.round(product.discountPercentage)}% OFF
        </span>
      </div>
      <CardTitle className="text-lg font-semibold leading-tight mb-2 group-hover:text-primary transition-colors">
        {product.title}
      </CardTitle>
      <div className="flex items-baseline gap-2">
        <span className="text-2xl font-black text-zinc-900">${product.price}</span>
        <span className="text-sm text-muted-foreground line-through decoration-zinc-400">
          ${Math.round(product.price * (1 + product.discountPercentage / 100))}
        </span>
      </div>
    </CardContent>

    <CardFooter className="p-5 pt-0 border-t border-zinc-100 mt-auto pt-4">
      <Button className="w-full gap-2 font-bold tracking-wide uppercase text-xs cursor-pointer" size="lg">
        <ShoppingCart className="h-4 w-4" /> Add to Cart
      </Button>
    </CardFooter>
  </Card>
);