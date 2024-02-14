import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
import { Button } from "./Button.tsx";

interface ModelProps {
  children: any;
  buttonCaption: string;
}
export interface ModelHandles {
  open: () => void;
}

const Model = forwardRef<ModelHandles, ModelProps>(function Model(
  { children, buttonCaption },
  ref,
) {
  const dialog = useRef<HTMLDialogElement | null>();
  // useImperativeHandle is a hook that allows
  // you to customize the instance value that is exposed to parent components when using ref.
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current?.showModal();
      },
    };
  });

  return createPortal(
    <dialog
      ref={dialog}
      className={
        "backdrop:bg-stone-900/90 p-4  rounded-md shadow-md border-b-red-600"
      }
    >
      {children}
      <form method={"dialog"} className={"mt-4 text-right"}>
        <Button>{buttonCaption}</Button>
      </form>
    </dialog>,
    document.getElementById("modal-root"),
  );
});
export default Model;
