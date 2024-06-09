import React, { useContext } from "react";
import DisplayRecentTask from "../Dashboard/DisplayRecentTask";
import { TaskContext } from "../../utils/Context/TaskProvider";

function Categories() {
  const { tasks } = useContext(TaskContext);
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-center py-6">
        <h1 className="text-3xl font-bold text-gray-600 text-center">
          We found{" "}
          <span className="text-indigo-600 text-3xl ">{tasks.length}</span>{" "}
          categories for you 🤗
        </h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 place-content-start gap-y-10 gap-x-2">
        <CategoriesTaskList
          text="🥰 Personal"
          tasks={tasks}
          category="personal"
        />
        <CategoriesTaskList text="⚒️ Work" tasks={tasks} category="work" />
        <CategoriesTaskList text="📚 Study" tasks={tasks} category="study" />
        <CategoriesTaskList
          text="💪 Fitness"
          tasks={tasks}
          category="Fitness"
        />
      </div>
    </div>
  );
}
function CategoriesTaskList({ text, tasks, category }) {
  const filteredTasks = (tasks || []).filter(
    (task) => task.category.toLowerCase() === category.toLowerCase()
  );
  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-3xl font-bold text-gray-800">{text}</h1>
      <div className="flex flex-col gap-3">
        {filteredTasks.length === 0 ? (
          <p className="text-center text-lg text-gray-700 font-bold">
            No Item found :-)
          </p>
        ) : (
          filteredTasks.map((task) => (
            <DisplayRecentTask task={task} key={task.id} />
          ))
        )}
      </div>
    </div>
  );
}

export default Categories;
