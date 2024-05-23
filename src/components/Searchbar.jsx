import React from "react";
import { CiSearch } from "react-icons/ci";
import { FaTimes } from "react-icons/fa";

function Searchbar() {
  return (
    <div className="hidden fixed w-full sm:w-[600px] border border-indigo-500/60  bg-gray-200 py-6 top-1/2 left-0 right-0 mx-auto transform -translate-y-1/2 shadow-lg rounded z-20 ">
      <div className="flex items-center px-2">
        <input
          type="text"
          placeholder="Search"
          className="outline-none py-[6px] border px-1 hover:shadow rounded border-indigo-600/20 bg-gray-200 w-full"
        />
        <button className="px-4 text-3xl text-indigo-700 transform hover:scale-110 transition-all duration-200">
          <CiSearch />
        </button>
      </div>
      <div className="h-48 border-t py-2 border-indigo-600/20 mt-5 overflow-y-scroll flex flex-col gap-2">
        <ul className="px-4 cursor-pointer hover:bg-gray-400/40 rounded py-2 flex items-center justify-between">
          <li className="text-xl font-mono">Add list</li>
          <span className="text-xl transform hover:scale-110">
            <FaTimes />
          </span>
        </ul>
      </div>
      <div className="border-t border-indigo-600/20 py-2 flex justify-between px-4 items-center">
        <div>
          <button className="px-2 p-1 bg-gray-600/20 hover:bg-gray-500/30 rounded">ESC</button>
        </div>
        <div>
          <span className="text-lg ml-2 mr-2 font-semibold">Powered by</span>
          <span className="text-2xl font-mono font-bold text-indigo-600 hover:underline cursor-pointer select-none">
            Flivo
          </span>
        </div>
      </div>
    </div>
  );
}

export default Searchbar;
