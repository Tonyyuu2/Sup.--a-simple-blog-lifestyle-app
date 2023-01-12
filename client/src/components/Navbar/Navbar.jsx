import React from "react";
import { Link } from "react-router-dom";

import hamburgerMenuIcon from "./assets/Hamburger Menu 1.svg";
import plusIcon from "./assets/icons8-add-50.png";

function Navbar() {
  return (
    <>
      <nav className="w-screen h-20 bg-red-500 text-white ">
        {/* mobile view */}
        <div className="md:hidden">
          <div className="flex justify-between p-3.5 items-center ">
            <img src={hamburgerMenuIcon} alt="" className="w-10" />
            <h1 className="font-bold text-4xl items pl-5">Sup.</h1>
            <img src={plusIcon} alt="" className="w-10" />
          </div>
        </div>

        {/* desktop - tablet view */}
        <div className="hidden md:inline">
          <div className="flex p-3 pl-12 justify-between">
            <h1 className="flex font-bold text-5xl ">Sup.</h1>
            <div className="flex justify-between w-1/3 p-6 text-xl md:text-[0.9em] md:p-6 md:font-bold md:w-[20em]">
              <Link to="">
                <p>Show All Posts</p>
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
