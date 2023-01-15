import React from "react";
import { Outlet } from "react-router-dom";
import Posts from "../Posts/Posts";

function Dashboard() {
  return (
    <div>
      <Outlet />
      <Posts />
    </div>
  );
}

export default Dashboard;
