import React, { MouseEvent, ReactNode } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  additionalClass?: string;
}

const Modal = ({ isOpen, onClose, children, additionalClass }: ModalProps) => {
  const handleBackdropClick = (event: MouseEvent<HTMLDivElement>) => {
    // Check if the click happened outside the modal content
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen">
        <div
          className="fixed inset-0 bg-black opacity-50"
          onClick={handleBackdropClick}
        ></div>
        <div
          className={`z-20 bg-white p-4 mx-auto rounded shadow-lg relative w-full sm:max-w-96 ${additionalClass}`}
        >
          <button
            className="absolute top-0 right-0 p-2 text-gray-500 hover:text-gray-700"
            onClick={onClose}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
