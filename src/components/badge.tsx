import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "../lib/cn";

const variants = cva(
  "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent shadow",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof variants> {}

export function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(variants({ variant }), className)} {...props} />;
}
