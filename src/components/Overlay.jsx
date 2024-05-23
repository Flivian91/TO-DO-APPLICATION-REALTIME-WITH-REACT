import React from "react";

function Overlay({ setIsAddTaskOpen, setIsEditTaskOpen }) {
  function handleToogleOpen() {
    // setIsAddTaskOpen((prevState) => !prevState);
    setIsEditTaskOpen((prevState) => !prevState);
  }
  return (
    <div
      onClick={handleToogleOpen}
      className="fixed w-full h-full top-0 left-0 backdrop-blur-[1.5px] z-10"
    ></div>
  );
}
export default Overlay;
