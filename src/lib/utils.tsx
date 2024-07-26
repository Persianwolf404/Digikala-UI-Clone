import { ReactNode } from "react";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

interface MainContainerProps {
  children: ReactNode;
  className: string;
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function MainContainer({ children, className }: MainContainerProps) {
  return (
    <div className={`w-full mx-auto max-w-[1676px] ${className}`}>
      {children}
    </div>
  );
}
