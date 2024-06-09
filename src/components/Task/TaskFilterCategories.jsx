import React, { useContext, useState } from "react";
import {
  TaskContext,
  TaskDispatchContext,
} from "../../utils/Context/TaskProvider";
function TaskFilterCategories() {
  const { filter } = useContext(TaskContext);
  const dispatch = useContext(TaskDispatchContext);
  return (
    <div className="flex gap-2 items-center">
      <label className="text-xl text-gray-600 font-bold" htmlFor="sort">
        Filter
      </label>
      <select
        value={filter}
        onChange={(e) =>
          dispatch({ type: "filter-task", payload: e.target.value })
        }
        id="sort"
        className="border border-indigo-600/30 rounded px-4 py-1 text-base"
      >
        <option value="all">All-Tasks</option>
        <option value="completed">Completed-Task</option>
        <option value="pending">Pending Task</option>
      </select>
    </div>
  );
}

export default TaskFilterCategories;
