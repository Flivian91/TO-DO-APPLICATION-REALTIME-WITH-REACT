import React from "react";
import DisplayRecentTask from "../Dashboard/DisplayRecentTask";

function PendingTask({ tasks, onComplete, onDelete, onEdit, setIsEditTaskOpen }) {
  const pendingTasks = tasks.filter(task => !task.completed)
  return (
    <div>
      <div className="flex items-center justify-center py-6">
        <h1 className="text-3xl font-bold text-gray-600">
          You have <span className="text-indigo-600 text-3xl text-mono">{pendingTasks.length}</span>{" "}
          pending task with you  📝
        </h1>
      </div>
      <div className="flex flex-col gap-2 overflow-y-auto">
        {pendingTasks.length === 0 ? (
          <div className="flex items-center justify-center">
            <p className="text-2xl font-bold text-pink-500">
              Woow!! You have no pending task with you :-)
            </p>
          </div>
        ) : (
          pendingTasks.map((task) => (
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

export default PendingTask;
