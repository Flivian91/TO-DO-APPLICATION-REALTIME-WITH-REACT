import React, { useState } from "react";
import DisplayRecentTask from "../Dashboard/DisplayRecentTask";
import { MdSkipNext, MdSkipPrevious } from "react-icons/md";
import TaskFIlter from "./TaskFIlter";
import TaskFilterCategories from "./TaskFilterCategories";

function Task({
  children,
  name,
  completed,
  pending,
  setName,
  setCompleted,
  setPending,
  sortedItems,
  setSortBy,
  sortBy,
}) {
  // console.log(sortedItems);
  return (
    <div>
      <div className="flex flex-col gap-2 sm:gap-5">
        <TaskFIlter tasks={sortedItems} sortBy={sortBy} setSortBy={setSortBy}>
          <TaskFilterCategories
            name={name}
            completed={completed}
            pending={pending}
            setName={setName}
            setCompleted={setCompleted}
            setPending={setPending}
          />
        </TaskFIlter>
        <div className="gap-2 py-5 text-center flex flex-col items-center px-2">
          <div className="w-full">{children}</div>
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
