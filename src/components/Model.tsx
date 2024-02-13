import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

const Model = forwardRef<any, any>(function Model({ children,buttonCaption }, ref) {
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
    <dialog ref={dialog} className={"rounded-sm border-b-red-600"}>
      <p>{children}</p>
      <form method={"dialog"}>
        <button>{buttonCaption}</button>
      </form>
    </dialog>,
    document.getElementById("modal-root"),
  );
});
export default Model;
