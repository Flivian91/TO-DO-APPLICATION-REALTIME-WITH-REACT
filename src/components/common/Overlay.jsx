import React from "react";

function Overlay({ isOpen}) {
  return (
    <div
      onClick={() => isOpen((prevState) => !prevState)}
      className="fixed w-full h-full top-0 left-0 backdrop-blur-[1.5px] z-10"
    ></div>
  );
}
export default Overlay;
