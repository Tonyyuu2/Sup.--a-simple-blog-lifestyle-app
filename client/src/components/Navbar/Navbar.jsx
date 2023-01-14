import {  } from "framer-motion";
import React, { useState } from "react";
import { Link } from "react-router-dom";

import hamburgerMenuIcon from "./assets/Hamburger Menu 1.svg";
import plusIcon from "./assets/icons8-add-50.png";
import SideBar from "./SideBar";

function Navbar() {


  const [openSideBar, setOpenSideBar] = useState(false);
  console.log("openSideBar :", openSideBar);

  return (
    <>
      <nav className="w-screen h-20 bg-red-500 text-white ">
        {/* mobile view */}
        <div className="md:hidden">
          <div className="flex justify-between p-3 items-center ">
            {/* sidebar */}
            {openSideBar && (
              <SideBar openSideBar={openSideBar} setOpenSideBar={setOpenSideBar} />
            )}
            {!openSideBar && (
              <img
                src={hamburgerMenuIcon}
                alt=""
                className="w-10 pt-2.5 cursor-pointer"
                onClick={() => setOpenSideBar(!openSideBar)}
              />
            )}
            <h1 className="font-bold text-4xl items pl-5">Sup.</h1>
            <img
              src={plusIcon}
              alt=""
              className="w-10 transition ease-in-out delay-10 pt-2.5 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer"
            />
          </div>
        </div>

        {/* desktop - tablet view */}
        <div className="hidden md:inline">
          <div className="flex p-3 pl-12 justify-between">
            <h1 className="flex font-bold text-5xl ">Sup.</h1>
            <div className="flex justify-between w-1/3 p-6 lg:text-xl md:text-lg md:p-6 md:font-bold md:w-[20em]">
              <Link to="">
                <p>Show All Posts!</p>
              </Link>
              <Link to="">
                <p>Add A Post!</p>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
