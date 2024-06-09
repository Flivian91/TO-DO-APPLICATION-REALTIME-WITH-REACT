import React, { useContext, useState } from "react";
import { CiEdit } from "react-icons/ci";
import { RiDeleteBin5Line } from "react-icons/ri";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { IoMdCheckboxOutline } from "react-icons/io";
import {
  TaskContext,
  TaskDispatchContext,
} from "../../utils/Context/TaskProvider";

export default function DisplayRecentTask({ task }) {
  const dispatch = useContext(TaskDispatchContext);

  function handleEdit(id) {
    dispatch({ type: "edit-task", payload: id });
    dispatch({ type: "set-edit-task" });
  }
  return (
    <div className="grid grid-cols-3 shadow-sm py-1 px-1 sm:px-2 hover:shadow-md border border-indigo-400/20 rounded cursor-pointer">
      <div className="flex items-center gap-1 sm:gap-2">
        <button
          className="text-xl font-bold text-indigo-600"
          onClick={() => dispatch({ type: "completed-task", payload: task.id })}
        >
          {task.completed ? (
            <IoMdCheckboxOutline />
          ) : (
            <MdCheckBoxOutlineBlank />
          )}
        </button>
        <h1 className={"text-xl text-gray-600 font-bold mb-[2px] truncate"}>
          {task.title}
        </h1>
      </div>
      <div className="flex items-center place-content-center">
        <span className="text-sm text-gray-600">
          {new Date(task.dueDate).toLocaleDateString()}
        </span>
      </div>
      <div className="flex items-center gap-4 px-2 place-content-end">
        {
          <button
            onClick={() => handleEdit(task.id)}
            className="text-xl text-indigo-600"
          >
            {task.completed || <CiEdit />}
          </button>
        }
        <button
          onClick={() => dispatch({ type: "delete-task", payload: task.id })}
          className="text-xl text-indigo-600"
        >
          <RiDeleteBin5Line />
        </button>
      </div>
    </div>
  );
}
