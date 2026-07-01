import { cn } from "@/lib/utils";

export function Wordmark({
  className,
  small,
}: {
  className?: string;
  small?: boolean;
}) {
  return (
    <span
      className={cn(
        "font-display leading-none tracking-[0.02em] select-none",
        small ? "text-xl" : "text-2xl md:text-[1.7rem]",
        className
      )}
    >
      Richy<span className="text-champagne">·</span>Risk
    </span>
  );
}
