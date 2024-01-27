import React from "react";
import { createPortal } from "react-dom";
import { AiOutlineClose } from "react-icons/ai";

const Modal = ({ onClose, isOpen, children }) => {
  return createPortal(
    <>
      {isOpen && (
        <>
          <div className="absolute shadow-lg shadow-[#0000003f] w-[400px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 modal rounded-md bg-[#ffffffee] text-black p-4">
            <div className="flex justify-end">
              <AiOutlineClose
                onClick={onClose}
                className="self-end cursor-pointer text-2xl"
              />
            </div>
            {children}
          </div>
          <div
            onClick={onClose}
            className="absolute top-0 left-0 z-40 h-screen w-screen bg-black opacity-50"
          ></div>
        </>
      )}
    </>,
    document.getElementById("modal-root")
  );
};

export default Modal;
