import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-semibold ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border-2 border-primary bg-background text-primary hover:bg-primary hover:text-primary-foreground shadow-md hover:shadow-lg transition-all duration-300",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-lg hover:shadow-xl",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        hero: "bg-primary text-primary-foreground hover:bg-primary/95 shadow-[0_0_30px_hsl(20_75%_60%/0.3)] hover:shadow-[0_0_50px_hsl(20_75%_60%/0.5)] hover:scale-105 transition-all duration-300 text-base font-bold",
        premium: "bg-gradient-to-r from-primary to-primary-glow text-primary-foreground shadow-[0_10px_40px_hsl(20_75%_60%/0.4)] hover:shadow-[0_15px_60px_hsl(20_75%_60%/0.6)] hover:scale-105 transition-all duration-300",
        medical: "bg-gradient-medical text-primary-foreground shadow-medical hover:shadow-[0_15px_60px_hsl(20_75%_60%/0.6)] hover:scale-105 transition-all duration-300 font-semibold",
        accent: "bg-accent text-accent-foreground hover:bg-accent/90 shadow-[0_10px_40px_hsl(180_35%_45%/0.3)] hover:shadow-[0_15px_60px_hsl(180_35%_45%/0.5)] hover:scale-105 transition-all duration-300",
        logo: "bg-gradient-logo text-primary-foreground shadow-logo hover:shadow-[0_15px_60px_hsl(20_75%_60%/0.6)] hover:scale-105 transition-all duration-300 font-semibold",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
