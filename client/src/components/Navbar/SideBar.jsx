import React from "react";
import { Link } from "react-router-dom";

function SideBar({ openSideBar, setOpenSideBar }) {
  return (
    <>
      <div
        className={`top-0 left-0 w-[40vw] bg-[#F2F2F2] text-black fixed h-full duration-500 transition-all ${
          openSideBar ? "left-0" : "-left-full"
        }`}
      >
        <div className="flex flex-col p-6">
          <div className="flex justify-end">
            <button
              className="font-extrabold text-2xl transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-110 duration-300"
              onClick={() => setOpenSideBar(!openSideBar)}
            >
              X
            </button>
          </div>
          <div className="mt-5">
            <Link to="">
              <p>Home</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default SideBar;
