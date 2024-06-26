import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { FaTimes } from "react-icons/fa";
// Utility function to format Date object to YYYY-MM-DD
function formatDate(date) {
  const d = new Date(date);
  const month = `${d.getMonth() + 1}`.padStart(2, '0');
  const day = `${d.getDate()}`.padStart(2, '0');
  const year = d.getFullYear();
  return `${year}-${month}-${day}`;
}
import {
  TaskContext,
  TaskDispatchContext,
} from "../../utils/Context/TaskProvider";

function EditTask() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [category, setCategory] = useState("");
  const [remainder, setRemainder] = useState(false);
  const [repeat, setRepeat] = useState(false);
  const dispatch = useContext(TaskDispatchContext);
  const {taskEdit} = useContext(TaskContext);

  useEffect(() => {
    if (taskEdit) {
      setTitle(taskEdit.title);
      setDescription(taskEdit.description);
      setDueDate(formatDate(taskEdit.dueDate));
      setCategory(taskEdit.category);
      setRemainder(taskEdit.remainder);
      setRepeat(taskEdit.repeat);
    }
  }, [taskEdit]);

  function handleSubmit(e) {
    e.preventDefault();

    const editedTask = {
      id: taskEdit.id,
      title,
      description,
      dueDate,
      dateCreated: taskEdit.dateCreated,
      category,
      remainder,
      repeat,
      completed: taskEdit.completed,
    };
    dispatch({ type: "update-task", payload: editedTask });
    dispatch({ type: "set-edit-task" });
  }

  return (
    <div className="fixed w-full sm:w-[600px] border border-indigo-500/60 bg-gray-200 py-5 top-1/2 left-0 right-0 mx-auto transform -translate-y-1/2 shadow-lg rounded z-20">
      <div className="flex relative items-center justify-center mb-5 mt-2">
        <h1 className="text-3xl font-bold text-gray-700">Edit Task</h1>
        <button
          onClick={() => dispatch({ type: "set-edit-task" })}
          className="absolute top-2 right-4 text-2xl transform hover:scale-105"
        >
          <FaTimes />
        </button>
      </div>
      <form
        onSubmit={handleSubmit}
        autoComplete="off"
        className="px-2 flex flex-col gap-2 items-center"
      >
        <div className="flex flex-col gap-2 w-full">
          <label htmlFor="title" className="text-xl font-semibold">
            Task Title
          </label>
          <input
            value={title}
            required
            onChange={(e) => setTitle(e.target.value)}
            id="title"
            type="text"
            className="outline-none px-2 py-2 border border-indigo-400 rounded"
            aria-label="Task Title"
          />
        </div>
        <div className="flex flex-col gap-2 w-full">
          <label htmlFor="description" className="text-xl font-semibold">
            Task Description
          </label>
          <input
            value={description}
            required
            onChange={(e) => setDescription(e.target.value)}
            id="description"
            type="text"
            className="outline-none px-2 py-2 border border-indigo-400 rounded"
            aria-label="Task Description"
          />
        </div>
        <div className="flex flex-col gap-2 w-full">
          <label htmlFor="dueDate" className="text-xl font-semibold">
            Due Date
          </label>
          <input
            required
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            id="dueDate"
            type="date"
            className="outline-none px-2 py-2 border border-indigo-400 rounded"
            aria-label="Due Date"
          />
        </div>
        <div className="flex flex-col gap-2 w-full">
          <label htmlFor="category" className="text-xl font-semibold">
            Select Category
          </label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            id="category"
            className="outline-none px-2 py-2 border border-indigo-400 rounded"
            aria-label="Select Category"
          >
            <option value="work">Work</option>
            <option value="personal">Personal</option>
            <option value="fitness">Fitness</option>
            <option value="study">Study</option>
          </select>
        </div>
        <div className="flex items-center py-2 gap-10">
          <div className="flex gap-2 items-center">
            <label htmlFor="remainder">Set Remainder</label>
            <input
              onChange={(e) => setRemainder(e.target.checked)}
              type="checkbox"
              checked={remainder}
              id="remainder"
              className="outline-none px-2 py-1 border border-indigo-400 rounded"
              aria-label="Set Remainder"
            />
          </div>
          <div className="flex gap-2 items-center">
            <label htmlFor="repeat">Auto Repeat</label>
            <input
              onChange={(e) => setRepeat(e.target.checked)}
              type="checkbox"
              checked={repeat}
              id="repeat"
              className="outline-none px-2 py-2 border border-indigo-400 rounded"
              aria-label="Auto Repeat"
            />
          </div>
        </div>
        <div className="flex flex-col w-1/2">
          <button
            type="submit"
            className="bg-indigo-600 py-2 text-gray-200 text-xl rounded"
            aria-label="Submit Edited Task"
          >
            Save Task
          </button>
        </div>
      </form>
    </div>
  );
}

EditTask.propTypes = {
  setIsEditTaskOpen: PropTypes.func.isRequired,
  taskEdit: PropTypes.object.isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default EditTask;
