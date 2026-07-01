import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

export function Stars({
  rating = 5,
  reviews,
  size = 13,
  className,
}: {
  rating?: number;
  reviews?: number;
  size?: number;
  className?: string;
}) {
  const rounded = Math.round(rating);
  return (
    <div className={cn("flex items-center gap-1.5", className)}>
      <span className="flex items-center gap-0.5" aria-hidden>
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={size}
            strokeWidth={1}
            className={
              i < rounded
                ? "fill-champagne text-champagne"
                : "fill-transparent text-stone-soft"
            }
          />
        ))}
      </span>
      {reviews != null && (
        <span className="text-[0.68rem] tracking-wide text-stone">
          {reviews.toLocaleString("en-US")}
        </span>
      )}
      <span className="sr-only">
        Rated {rating} out of 5{reviews != null ? ` from ${reviews} reviews` : ""}
      </span>
    </div>
  );
}
