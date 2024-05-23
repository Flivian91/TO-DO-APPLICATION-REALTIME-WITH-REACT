import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";

function EditTask({ setIsEditTaskOpen, taskEdit, onUpdate }) {
  const [title, setTitle] = useState(taskEdit.title);
  const [description, setDescription] = useState(taskEdit.description);
  const [dueDate, setDueDate] = useState(taskEdit.dueDate);
  const [category, setCategory] = useState(taskEdit.category);
  const [remainder, setRemainder] = useState(taskEdit.remainder);
  const [repeat, setRepeat] = useState(taskEdit.repeat);
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
    onUpdate(editedTask);
    setIsEditTaskOpen((prevState) => !prevState);
  }
  return (
    <div className="fixed w-full sm:w-[600px] border border-indigo-500/60  bg-gray-200 py-5 top-1/2 left-0 right-0 mx-auto transform -translate-y-1/2 shadow-lg rounded z-20">
      <div className="flex relative items-center justify-center mb-5 mt-2">
        <h1 className="text-3xl font-bold text-gray-700">Edit task</h1>
        <button
          onClick={() => setIsEditTaskOpen((prevState) => !prevState)}
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
        <div className="flex flex-col gap-1 w-3/4">
          <label htmlFor="title" className="text-xl font-semibold">
            Task Title
          </label>
          <input
            value={title}
            required
            onChange={(e) => setTitle(e.target.value)}
            id="title"
            type="text"
            className="outline-none px-2 py-1 border border-indigo-400 rounded"
          />
        </div>
        <div className="flex flex-col gap-1 w-3/4">
          <label htmlFor="note" className="text-xl font-semibold">
            Task description
          </label>
          <input
            value={description}
            required
            onChange={(e) => setDescription(e.target.value)}
            id="note"
            type="text"
            className="outline-none px-2 py-1 border border-indigo-400 rounded"
          />
        </div>
        <div className="flex flex-col gap-1 w-3/4">
          <label htmlFor="date" className="text-xl font-semibold">
            Due Date
          </label>
          <input
            required
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            id="date"
            type="date"
            className="outline-none px-2 py-1 border border-indigo-400 rounded"
          />
        </div>
        <div className="flex flex-col gap-1 w-3/4">
          <label htmlFor="categories" className="text-xl font-semibold">
            Select Categories
          </label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            id="categories"
            className="outline-none px-2 py-1 border border-indigo-400 rounded"
          >
            <option value="work">Work</option>
            <option value="personal">Personal</option>
            <option value="shopping">Fitness</option>
            <option value="study">Study</option>
          </select>
        </div>
        <div className="flex items-center py-2 gap-10">
          <div className="flex gap-2 items-center">
            <label htmlFor="remainder">Set remainder</label>
            <input
              onChange={(e) => setRemainder(e.target.checked)}
              type="checkbox"
              checked={remainder}
              id="remainder"
              className="outline-none px-2 py-1 border border-indigo-400 rounded"
            />
          </div>
          <div className="flex gap-2 items-center">
            <label htmlFor="repeat">Auto Repeat</label>
            <input
              onChange={(e) => setRepeat(e.target.checked)}
              type="checkbox"
              checked={repeat}
              id="repeat"
              className="outline-none px-2 py-1 border border-indigo-400 rounded"
            />
          </div>
        </div>
        <div className="flex flex-col w-1/2">
          <button
            type="submit"
            className="bg-indigo-600 py-2 text-gray-200 text-xl rounded"
          >
            Add new task
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditTask;
