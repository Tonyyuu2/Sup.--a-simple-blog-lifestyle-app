import React from "react";

function Button({ cancel, children, onSubmit, onCancel }) {
  return (
    <button
      className={`${
        cancel ? "bg-zinc-500" : "bg-red-500"
      } w-32 p-1 text-center rounded-full font-bold text-white uppercase `}
      onClick={onSubmit ? onSubmit : onCancel ? onCancel : null} 
    >
      {children}
    </button>
  );
}

export default Button;
