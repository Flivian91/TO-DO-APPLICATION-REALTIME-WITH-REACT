import React, { Children, useContext, useState } from "react";
import { GoFilter } from "react-icons/go";
import {
  TaskContext,
  TaskDispatchContext,
} from "../../utils/Context/TaskProvider";
import TaskFilterCategories from "./TaskFilterCategories";

export default function TaskFIlter() {
  const { tasks, sortBy } = useContext(TaskContext);
  const dispatch = useContext(TaskDispatchContext);

  return (
    <div className="flex sm:flex-row flex-col gap-4 items-center sm:justify-between border-b border-indigo-400/30 py-3">
      <TaskFilterCategories />
      <h1 className="text-xl font-bold text-gray-600 text-center">
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
          onChange={(e) =>
            dispatch({ type: "update-sort", payload: e.target.value })
          }
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
