import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx";
import { ButtonHTMLAttributes, ReactNode } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  asChild?: boolean;
  className?: string;
}

export function Button({
  children,
  asChild,
  className,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      className={clsx(
        "py-3 px-4  bg-blue-400 font-semibold text-gray-200 tracking-wider text-xl w-full rounded transition-colors hover:bg-blue-300 focus:ring-2 ring-white disabled:opacity-80 disabled:text-gray-400 disabled:hover:bg-blue-400",
        className
      )}
      {...props}
    >
      {children}
    </Comp>
  );
}
