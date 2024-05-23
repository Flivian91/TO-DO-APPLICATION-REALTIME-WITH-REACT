import React, { useState } from "react";
function TaskFilterCategories({
  name,
  completed,
  pending,
  setName,
  setCompleted,
  setPending,
}) {
  return (
    <div className=" absolute top-10 left-0 w-40 h-36 bg-gray-300 py-4 px-2 rounded">
      <ul className="flex flex-col items-start gap-2">
        <li>
          <input
            id="name"
            checked={name}
            onChange={(e) => setName(e.target.checked)}
            type="checkbox"
            name="sort"
          />
          <label
            htmlFor="name"
            className="text-lg ml-2 font-bold text-gray-600"
          >
            All
          </label>
        </li>
        <li>
          <input
            id="completed"
            checked={completed}
            onChange={(e) => setCompleted(e.target.checked)}
            type="checkbox"
            name="sort"
          />
          <label
            htmlFor="completed"
            className="text-lg ml-2 font-bold text-gray-600"
          >
            Completed
          </label>
        </li>
        <li>
          <input
            id="pending"
            checked={pending}
            onChange={(e) => setPending(e.target.checked)}
            type="checkbox"
            name="sort"
          />
          <label
            htmlFor="pending"
            className="text-lg ml-2 font-bold text-gray-600"
          >
            Pending
          </label>
        </li>
      </ul>
    </div>
  );
}

export default TaskFilterCategories;
