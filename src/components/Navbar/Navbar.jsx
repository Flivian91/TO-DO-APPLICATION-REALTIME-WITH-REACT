import React from "react";
function Navbar({ children }) {
  return (
    <div className="sm:px-2 py-4 bg-white flex justify-between items-center shadow">
      {children}
    </div>
  );
}

export default Navbar;
