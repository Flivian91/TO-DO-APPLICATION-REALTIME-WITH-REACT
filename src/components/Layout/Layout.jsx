import React from "react";
import Dashboard from "../Dashboard/Dashboard";
import Task from "../Task/Task";
import { Outlet } from "react-router-dom";

function Layout({ children }) {
  return (
    <div className="px-2 py-1 shadow-lg">
      <Outlet />
    </div>
  );
}
export default Layout;
