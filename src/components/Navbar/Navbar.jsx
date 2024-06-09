import React from "react";
import NavbarGeating from "./NavbarGeating";
import NavbarProfileAddTask from "./NavbarProfileAddTask";
function Navbar() {
  return (
    <div className="sm:px-2 py-4 bg-white flex justify-between items-center shadow">
      <NavbarGeating />
      <NavbarProfileAddTask />
    </div>
  );
}

export default Navbar;
