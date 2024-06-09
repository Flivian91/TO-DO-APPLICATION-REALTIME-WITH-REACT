import React, { useContext } from "react";
import DisplayRecentTask from "../Dashboard/DisplayRecentTask";
import { TaskContext } from "../../utils/Context/TaskProvider";

function TaskDisplay() {
  // Show sorted item
  const { tasks } = useContext(TaskContext);
  return (
    <div className="px-2  h-96 py-2 flex gap-2 flex-col">
      {tasks.map((task) => (
        <DisplayRecentTask key={task.id} task={task} />
      ))}
    </div>
  );
}

export default TaskDisplay;
