import React from "react";
import DisplayRecentTask from "../Dashboard/DisplayRecentTask";

function TodayTask({ tasks, onComplete, onDelete, onEdit, setIsEditTaskOpen }) {
  const todaytask = tasks.filter(task => task.dueDate > Date.now())
  return (
    <div>
      <div className="flex items-center justify-center py-6">
        <h1 className="text-3xl font-bold text-gray-600">
          You have <span className="text-indigo-600 text-3xl text-mono">{todaytask.length}</span>{" "}
          task to complete today 🌤️
        </h1>
      </div>
      <div className="flex flex-col gap-2 overflow-y-auto">
        {todaytask.length === 0 ? (
          <div className="flex items-center justify-center">
            <p className="text-2xl font-bold text-pink-500">
              No available task for today :-)
            </p>
          </div>
        ) : (
          todaytask.map((task) => (
            <DisplayRecentTask
              key={task.id}
              task={task}
              onComplete={onComplete}
              onDelete={onDelete}
              onEdit={onEdit}
              setIsEditTaskOpen={setIsEditTaskOpen}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default TodayTask;
