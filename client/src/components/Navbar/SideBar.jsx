import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function SideBar({ openSideBar, setOpenSideBar }) {
  return (
    <>
      <motion.aside initial={{ width: 0 }} animate={{ width: 300 }}>
        <motion.div
          // initial={{width:0}}
          // animate={{width:300}}
          
          className={`top-0 left-0 w-[40vw] bg-[#F2F2F2] text-black fixed h-full duration-500`}
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
            <div className="mt-5 font-bold text-xl hover:">
              <div className="hover:bg-red-500 hover:text-white p-1 transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-100 duration-300 rounded-md mb-3">
                <Link to="" className="">
                  <p>Home</p>
                </Link>
              </div>

              <div className="hover:bg-red-500 hover:text-white p-1 transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-100 duration-300 rounded-md mb-3">
                <Link to="">
                  <p>Show All Posts!</p>
                </Link>
              </div>

              <div className="hover:bg-red-500 hover:text-white p-1 transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-100 duration-300 rounded-md">
                <Link to="">
                  <p>Add A Post!</p>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.aside>
    </>
  );
}

export default SideBar;
