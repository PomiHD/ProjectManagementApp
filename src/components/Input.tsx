import { ComponentPropsWithoutRef, forwardRef } from "react";

type BaseProps = {
  label: string;
};
type InputProps = ComponentPropsWithoutRef<"input"> & BaseProps;
type TextAreaProps = ComponentPropsWithoutRef<"textarea"> & BaseProps;

const classes =
  "w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 " +
  "text-stone-600 focus:outline-none focus:border-stone-600";

const Input = forwardRef<HTMLInputElement, InputProps>(function (
  { label, ...props },
  ref,
) {
  return (
    <p className={"flex flex-col gap-1 my-4"}>
      <label className={"text-sm font-bold uppercase text-stone-500"}>
        {label}:{" "}
      </label>
      <input required className={classes} ref={ref} {...props} />
    </p>
  );
});

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(function (
  { label, ...props },
  ref,
) {
  return (
    <p className={"flex flex-col gap-1 my-4"}>
      <label className={"text-sm font-bold uppercase text-stone-500"}>
        {label}:{" "}
      </label>
      <textarea required className={classes} ref={ref} {...props} />
    </p>
  );
});

export { Input, TextArea };
