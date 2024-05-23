import React from "react";
import DisplayRecentTask from "../Dashboard/DisplayRecentTask";

function TaskDisplay({
  tasks,
  onComplete,
  onDelete,
  onEdit,
  setIsEditTaskOpen,
}) {
  return (
    <div className="px-2  h-96 py-2 flex gap-2 flex-col">
      {tasks.map((task) => (
        <DisplayRecentTask
          key={task.id}
          task={task}
          onComplete={onComplete}
          onDelete={onDelete}
          onEdit={onEdit}
          setIsEditTaskOpen={setIsEditTaskOpen}
        />
      ))}
    </div>
  );
}

export default TaskDisplay;
