import { cva } from "class-variance-authority";
import type { LucideIcon } from "lucide-react";
import type { ButtonHTMLAttributes } from "react";
import { Tooltip } from "./tooltip";
import { cn } from "@/lib/utils";

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "safe"
  | "warning"
  | "danger"
  | "outline"
export type ButtonSize = "sm" | "base" | "lg";
export type IconPosition = "left" | "right";
export type TooltipPosition = "top" | "bottom" | "left" | "right";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: LucideIcon;
  iconPosition?: IconPosition;
  tooltip?: string;
  tooltipPosition?: TooltipPosition;
}

const Button = ({
  variant,
  size,
  icon,
  iconPosition = "right",
  tooltip,
  tooltipPosition,
  children,
  className,
  ...props
}: ButtonProps) => {
  const Icon = icon;
  const classVariant = cva(
    "gap-2 inline-flex items-center font-medium cursor-pointer",
    {
      variants: {
        variant: {
          primary: "bg-neutral-800 text-white hover:bg-neutral-700",
          secondary: "bg-neutral-200 text-neutral-800 hover:bg-neutral-300",
          safe: "bg-green-600 text-white hover:bg-green-600/75",
          warning: "bg-yellow-600 text-white hover:bg-yellow-600/75",
          danger: "bg-red-600 text-white hover:bg-red-400",
          outline:
            "bg-neutral-50 border-2 border-neutral-800 hover:bg-neutral-200"
        },
        size: {
          sm: "px-3 py-1.5 text-sm rounded-md",
          base: "px-4 py-2 text-base rounded-lg",
          lg: "px-6 py-2.5 text-lg rounded-xl",
        },
      },
      defaultVariants: {
        variant: "primary",
        size: "base",
      },
    }
  );

  const iconSizes = {
    sm: 16,
    base: 18,
    lg: 22,
  };

  const buttonContent = (
    <button
      className={cn(classVariant({ variant, size }), className)}
      {...props}
    >
      {Icon && iconPosition === "left" && <Icon size={iconSizes[size ?? "base"]} />}
      {children}
      {Icon && iconPosition === "right" && <Icon size={iconSizes[size ?? "base"]} />}
    </button>
  );

  return tooltip ? (
    <Tooltip content={tooltip} position={tooltipPosition}>
      {buttonContent}
    </Tooltip>
  ) : (
    buttonContent
  );
};

export default Button;
