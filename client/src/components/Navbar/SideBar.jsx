import React from "react";

function SideBar({ openSideBar, setOpenSideBar }) {
  return (
    <>
      <div>
        {openSideBar && (
          <button
            className="flex text-4xl text-black items-center cursor-pointer fixed  z-50"
            onClick={() => setOpenSideBar(!openSideBar)}
          >
            x
          </button>
        )}
        <div className="top-0 left-0 w-[35vw] bg-[#F2F2F2]  p-10 text-white fixed h-full ">
          <h2 className="text-4xl font-semibold text-black">I am a sidebar</h2>
        </div>
      </div>
    </>
  );
}

export default SideBar;
