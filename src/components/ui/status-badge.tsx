import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const statusBadgeVariants = cva(
  "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        online: "bg-success/10 text-success border border-success/20",
        offline: "bg-destructive/10 text-destructive border border-destructive/20",
        warning: "bg-warning/10 text-warning border border-warning/20",
        recording: "bg-accent/10 text-accent border border-accent/20 animate-pulse-slow",
        motion: "bg-warning/10 text-warning border border-warning/20 animate-glow",
        safe: "bg-primary/10 text-primary border border-primary/20"
      }
    },
    defaultVariants: {
      variant: "safe"
    }
  }
);

export interface StatusBadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof statusBadgeVariants> {
  children: React.ReactNode;
}

function StatusBadge({ className, variant, children, ...props }: StatusBadgeProps) {
  return (
    <div className={cn(statusBadgeVariants({ variant }), className)} {...props}>
      {children}
    </div>
  );
}

export { StatusBadge, statusBadgeVariants };