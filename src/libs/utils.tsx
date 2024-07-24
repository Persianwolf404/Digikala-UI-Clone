import classNames from "classnames";
import { ReactNode } from "react";

export function utils() {
  return <div>utils</div>;
}
interface MainContainerProps {
  children: ReactNode;
  className: string;
}

export function MainContainer({ children, className }: MainContainerProps) {
  return (
    <div className={`w-full mx-auto max-w-[1676px] ${className}`}>
      {children}
    </div>
  );
}