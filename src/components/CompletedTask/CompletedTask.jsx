import React from "react";
import DisplayRecentTask from "../Dashboard/DisplayRecentTask";

function CompletedTask({ tasks, onComplete, onDelete, onEdit, setIsEditTaskOpen }) {
  const completedTask = tasks.filter(task => task.completed)
  return (
    <div>
      <div className="flex items-center justify-center py-6">
        <h1 className="text-3xl font-bold text-gray-600">
          You have completed <span className="text-indigo-600 text-3xl text-mono">{completedTask.length}</span>{" "}
          task so far  🌤️
        </h1>
      </div>
      <div className="flex flex-col gap-2 overflow-y-auto">
        {completedTask.length === 0 ? (
          <div className="flex items-center justify-center">
            <p className="text-2xl font-bold text-pink-500">
              Ooops!! No completed task for today :-)
            </p>
          </div>
        ) : (
          completedTask.map((task) => (
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

export default CompletedTask;
