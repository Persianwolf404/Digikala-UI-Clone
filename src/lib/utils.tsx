import { ReactNode } from "react";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

interface ContainerProps {
  children: ReactNode;
  className: string;
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function MainContainer({ children, className }: ContainerProps) {
  return (
    <div className={`w-full mx-auto max-w-[1676px] ${className}`}>
      {children}
    </div>
  );
}

export function ContentContainer({ children, className }: ContainerProps) {
  return (
    <div className={`w-full mx-auto max-w-[1350px] ${className}`}>
      {children}
    </div>
  );
}

export async function wait(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function divideArrayIntoChunks<T>(array: T[], chunkSize: number): T[][] {
  const result: T[][] = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    result.push(array.slice(i, i + chunkSize));
  }
  return result;
}
