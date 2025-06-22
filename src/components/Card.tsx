
import type { ReactNode } from "react";
import clsx from "clsx";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={clsx(
        "rounded-2xl shadow-lg bg-white dark:bg-zinc-800",
        className
      )}
    >
      {children}
    </div>
  );
}
