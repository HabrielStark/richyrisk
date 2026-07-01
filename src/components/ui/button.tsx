import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-sans text-[0.72rem] uppercase tracking-[0.2em] font-medium transition-[color,background-color,border-color,transform,box-shadow] duration-300 ease-[var(--ease-press)] disabled:pointer-events-none disabled:opacity-50 active:scale-[0.96] active:duration-150 cursor-pointer select-none",
  {
    variants: {
      variant: {
        primary:
          "btn-sheen bg-noir text-porcelain hover:bg-ink rounded-[2px] shadow-[0_1px_0_rgba(255,255,255,0.06)_inset] hover:-translate-y-[3px] hover:shadow-[0_18px_40px_-16px_rgba(124,82,30,0.55)]",
        gold: "btn-sheen bg-champagne text-porcelain hover:bg-champagne-light rounded-[2px] hover:-translate-y-[3px] hover:shadow-[0_18px_42px_-16px_rgba(156,99,34,0.6)]",
        outline:
          "border border-noir/30 text-noir hover:border-noir hover:bg-noir hover:text-porcelain rounded-[2px] hover:-translate-y-[2px] hover:shadow-[0_16px_36px_-18px_rgba(124,82,30,0.4)]",
        ghost: "text-noir hover:text-champagne",
        light:
          "btn-sheen bg-porcelain text-noir hover:bg-porcelain-deep rounded-[2px] hover:-translate-y-[3px] hover:shadow-[0_18px_40px_-18px_rgba(124,82,30,0.42)]",
      },
      size: {
        sm: "h-10 px-5",
        md: "h-12 px-7",
        lg: "h-14 px-10",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { buttonVariants };
