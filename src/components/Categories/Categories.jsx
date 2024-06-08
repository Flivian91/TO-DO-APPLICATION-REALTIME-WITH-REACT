import React from "react";
import DisplayRecentTask from "../Dashboard/DisplayRecentTask";

function Categories({
  tasks,
  onComplete,
  onDelete,
  onEdit,
  setIsEditTaskOpen,
}) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-center py-6">
        <h1 className="text-3xl font-bold text-gray-600 text-center">
          We found <span className="text-indigo-600 text-3xl ">4</span>{" "}
          categories for you 🤗
        </h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 place-content-start gap-y-10 gap-x-2">
        <CategoriesTaskList
          text="🥰 Personal"
          tasks={tasks}
          category="personal"
          onComplete={onComplete}
          onDelete={onDelete}
          onEdit={onEdit}
          setIsEditTaskOpen={setIsEditTaskOpen}
        />
        <CategoriesTaskList
          text="⚒️ Work"
          tasks={tasks}
          category="work"
          onComplete={onComplete}
          onDelete={onDelete}
          onEdit={onEdit}
          setIsEditTaskOpen={setIsEditTaskOpen}
        />
        <CategoriesTaskList
          text="📚 Study"
          tasks={tasks}
          category="study"
          onComplete={onComplete}
          onDelete={onDelete}
          onEdit={onEdit}
          setIsEditTaskOpen={setIsEditTaskOpen}
        />
        <CategoriesTaskList
          text="💪 Fitness"
          tasks={tasks}
          category="Fitness"
          onComplete={onComplete}
          onDelete={onDelete}
          onEdit={onEdit}
          setIsEditTaskOpen={setIsEditTaskOpen}
        />
      </div>
    </div>
  );
}
function CategoriesTaskList({
  text,
  tasks,
  category,
  onComplete,
  onDelete,
  onEdit,
  setIsEditTaskOpen,
}) {
  const filteredTasks = (tasks || []).filter(
    (task) => task.category.toLowerCase() === category.toLowerCase()
  );
  console.log(tasks);
  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-3xl font-bold text-gray-800">{text}</h1>
      <div className="flex flex-col gap-3">
        {filteredTasks.length === 0 ? (
          <p className="text-center text-lg text-gray-700 font-bold">No Item found :-)</p>
        ) : (
          filteredTasks.map((task) => (
            <DisplayRecentTask
              task={task}
              onComplete={onComplete}
              onDelete={onDelete}
              onEdit={onEdit}
              setIsEditTaskOpen={setIsEditTaskOpen}
              key={task.id}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default Categories;
