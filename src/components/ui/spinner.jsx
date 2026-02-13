import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils"; // shadcn's utility for merging classes

export const LoadingSpinner = ({ className }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] w-full gap-4">
      <Loader2 className={cn("h-12 w-12 animate-spin text-primary", className)} />
      <p className="text-muted-foreground animate-pulse font-medium">
        Fetching latest products...
      </p>
    </div>
  );
};