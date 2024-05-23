import React from "react";
import { CgProfile } from "react-icons/cg";

export default function NavbarProfileAddTask({ setIsAddTaskOpen }) {
  return (
    <div className="flex items-center gap-4">
      <div className="flex items-center">
        <button
          onClick={() => setIsAddTaskOpen((prevState) => !prevState)}
          className="px-3 sm:px-6 py-1 bg-indigo-600 text-gray-100 rounded text-lg hover:bg-indigo-600/90"
        >
          Add new task
        </button>
      </div>
      <div className="cursor-pointer text-4xl text-indigo-700 flex items-center justify-center">
        <CgProfile />
      </div>
    </div>
  );
}
