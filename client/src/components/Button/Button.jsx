import React from "react";

function Button({ cancel, children }) {
  return (
    <button
      className={`${
        cancel ? "bg-zinc-500" : "bg-red-500"
      } w-32 p-1 text-center rounded-full font-bold text-white uppercase bg-`}
    >
      {children}
    </button>
  );
}

export default Button;
