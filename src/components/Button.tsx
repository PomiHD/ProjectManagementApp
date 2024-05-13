import { ComponentPropsWithoutRef, ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
} & ComponentPropsWithoutRef<"button">;

export function Button({ children, ...props }: ButtonProps) {
  return (
    <p>
      <button
        {...props}
        className={
          "px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:text-stone-100"
        }
      >
        {children}
      </button>
    </p>
  );
}
