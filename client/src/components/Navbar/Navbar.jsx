import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import hamburgerMenuIcon from "./assets/Hamburger Menu 1.svg";
import plusIcon from "./assets/icons8-add-50.png";
import SideBar from "./SideBar";

function Navbar() {
  const [openSideBar, setOpenSideBar] = useState(false);

  return (
    <>
      <nav className="w-screen h-20 bg-red-500 text-white shadow-2xl">
        {/* mobile view */}
        <div className="md:hidden">
          <div className="flex justify-between p-3 items-center ">
            {/* sidebar */}
            {openSideBar && (
              <SideBar
                openSideBar={openSideBar}
                setOpenSideBar={setOpenSideBar}
              />
            )}
            {!openSideBar && (
              <img
                src={hamburgerMenuIcon}
                alt=""
                className="w-10 pt-2.5 cursor-pointer"
                onClick={() => setOpenSideBar(!openSideBar)}
              />
            )}
            <NavLink exact="true" activeclassname="active" to="/">
              <h1 className="font-bold text-4xl items pl-5">Sup.</h1>
            </NavLink>
            <NavLink exact="true" activeclassname="active" to="/new">
              <img
                src={plusIcon}
                alt=""
                className="w-10 transition ease-in-out delay-10 pt-2.5 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer"
              />
            </NavLink>
          </div>
        </div>

        {/* desktop - tablet view */}
        <div className="hidden md:inline">
          <div className="flex p-3 pl-12 justify-between">
            <Link to='/'>
              <h1 className="flex font-bold text-5xl ">Sup.</h1>
            </Link>
            <div className="flex justify-end w-1/3 p-6 lg:text-xl md:text-lg md:p-6 md:font-bold md:w-[20em]">
              <Link to="/new">
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
