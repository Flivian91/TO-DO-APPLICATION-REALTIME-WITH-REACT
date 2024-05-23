import React from "react";
import Dashboard from "../Dashboard/Dashboard";
import Task from "../Task/Task";

function Layout({children}) {
  return (
    <div className="px-2 py-1 shadow-lg">
      {children}
    </div>
  );
}
export default Layout;
