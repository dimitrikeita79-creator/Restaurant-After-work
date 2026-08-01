import { cn } from "@/lib/utils";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

export function GlassPanel({
  className,
  children,
  strong,
  solid,
  ...props
}: ComponentPropsWithoutRef<"div"> & { strong?: boolean; solid?: boolean }) {
  return (
    <div
      className={cn(
        solid ? "glass-solid rounded-2xl" : "glass rounded-2xl",
        strong && !solid && "glass-strong",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

type ButtonProps = ComponentPropsWithoutRef<"button"> & {
  variant?: "primary" | "ghost" | "accent";
  children: ReactNode;
};

export function GlassButton({
  className,
  variant = "ghost",
  children,
  ...props
}: ButtonProps) {
  const base =
    "relative inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 ease-out active:scale-[0.97] active:translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-50 disabled:pointer-events-none";
  const variants: Record<string, string> = {
    primary:
      "bg-primary text-primary-foreground shadow-[0_10px_30px_-10px_oklch(0.62_0.19_28/0.55)] hover:opacity-95",
    accent:
      "bg-accent text-accent-foreground hover:opacity-95",
    ghost: "glass text-foreground hover:bg-foreground/5",
  };
  return (
    <button className={cn(base, variants[variant], className)} {...props}>
      {children}
    </button>
  );
}

export function GlassInput({
  className,
  ...props
}: ComponentPropsWithoutRef<"input">) {
  return (
    <input
      className={cn(
        "glass-solid w-full rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        className,
      )}
      {...props}
    />
  );
}

export function GlassTextarea({
  className,
  ...props
}: ComponentPropsWithoutRef<"textarea">) {
  return (
    <textarea
      className={cn(
        "glass-solid w-full rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-ring resize-none",
        className,
      )}
      {...props}
    />
  );
}

export function GlassSelect({
  className,
  children,
  ...props
}: ComponentPropsWithoutRef<"select">) {
  return (
    <select
      className={cn(
        "glass-solid w-full rounded-xl px-4 py-3 text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-ring appearance-none",
        className,
      )}
      {...props}
    >
      {children}
    </select>
  );
}