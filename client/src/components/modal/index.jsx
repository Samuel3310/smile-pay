import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
import Button from "../button";
import { FaTimes } from "react-icons/fa";

const Modal = forwardRef(function Modal({ children, ...props }, ref) {
  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
      close() {
        dialog.current.close();
      },
    };
  });

  return createPortal(
    <dialog
      ref={dialog}
      className="backdrop:bg-purple-900/80 p-4 relative rounded-md shadow-md pt-10"
    >
      {children}
      <form
        {...props}
        method="dialog"
        className="mt-4 text-right absolute cursor-pointer -top-2 right-2 h-10 w-10 rounded-full flex justify-center items-center border border-red-500 bg-white"
      >
        <button className="w-full h-full  rounded-full flex justify-center items-center text-2xl text-red-600 anim">
          <FaTimes />
        </button>
      </form>
    </dialog>,
    document.getElementById("modal")
  );
});

export default Modal;
