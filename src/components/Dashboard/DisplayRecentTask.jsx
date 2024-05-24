import React, { useState } from "react";
import { CiEdit } from "react-icons/ci";
import { RiDeleteBin5Line } from "react-icons/ri";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { IoMdCheckboxOutline } from "react-icons/io";

export default function DisplayRecentTask({
  task,
  onComplete,
  onDelete,
  onEdit,
  setIsEditTaskOpen,
}) {
  function handleEdit(id) {
    onEdit(id);
    setIsEditTaskOpen(true);
  }
  return (
    <div className="grid grid-cols-3 shadow-sm py-1 px-1 sm:px-2 hover:shadow-md border border-indigo-400/20 rounded cursor-pointer">
      <div className="flex items-center gap-1 sm:gap-2">
        <button
          className="text-xl font-bold text-indigo-600"
          onClick={() => onComplete(task.id)}
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
          onClick={() => onDelete(task.id)}
          className="text-xl text-indigo-600"
        >
          <RiDeleteBin5Line />
        </button>
      </div>
    </div>
  );
}
