import React, { Children, useState } from "react";
import { GoFilter } from "react-icons/go";

export default function TaskFIlter({ tasks, children, setSortBy, sortBy }) {
  const [toggleFilter, setToggleFilter] = useState(false);

  function handleClick() {
    setToggleFilter((prevState) => !prevState);
  }

  return (
    <div className="flex items-center justify-between border-b border-indigo-400/30 py-3">
      <div className="relative">
        <button
          onClick={handleClick}
          className="flex relative items-center gap-2 text-xl text-indigo-600 bg-gray-500/30 px-2 py-1 rounded"
        >
          <GoFilter />
          <span>Filter</span>
        </button>
        {toggleFilter && children}
      </div>

      <h1 className="text-xl font-bold text-gray-600">
        We found{" "}
        <span className="text-indigo-600 text-xl text-mono">
          {tasks.length}{" "}
        </span>
        tasks for you 🤗
      </h1>
      <div className="flex gap-2 items-center">
        <label className="text-xl text-gray-600 font-bold" htmlFor="sort">
          Sort by
        </label>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          id="sort"
          className="border border-indigo-600/30 rounded px-2 py-1"
        >
          <option value="ascending">Ascending order</option>
          <option value="descending">Descending order</option>
          <option value="date">Date created</option>
        </select>
      </div>
    </div>
  );
}
