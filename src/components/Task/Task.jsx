import React, { useState } from "react";
import DisplayRecentTask from "../Dashboard/DisplayRecentTask";
import { MdSkipNext, MdSkipPrevious } from "react-icons/md";
import TaskFIlter from "./TaskFIlter";
import TaskFilterCategories from "./TaskFilterCategories";
import TaskDisplay from "./TaskDisplay";

function Task() {
  return (
    <div>
      <div className="flex flex-col gap-2 sm:gap-5">
        <TaskFIlter>
          <TaskFilterCategories />
        </TaskFIlter>
        <div className="gap-2 py-5 text-center flex flex-col items-center px-2">
          <div className="w-full">
            <TaskDisplay />
          </div>
          <div>
            <Pagination />
          </div>
        </div>
      </div>
    </div>
  );
}

function Pagination() {
  return (
    <div className="flex items-center gap-4">
      <PaginationButtons>
        <MdSkipPrevious />
      </PaginationButtons>
      <div className="flex items-center gap-1">
        <PaginationButtons>2</PaginationButtons>
        <PaginationButtons>3</PaginationButtons>
        <div>...</div>
        <PaginationButtons>8</PaginationButtons>
      </div>
      <PaginationButtons>
        <MdSkipNext />
      </PaginationButtons>
    </div>
  );
}
function PaginationButtons({ children }) {
  return (
    <button className="w-8 h-8 bg-gray-400/20 rounded-full flex items-center justify-center text-lg font-bold font-mono text-gray-500 hover:text-indigo-600">
      {children}
    </button>
  );
}
export default Task;
