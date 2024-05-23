import React from "react";
import { FiExternalLink } from "react-icons/fi";
import { MdOutlineUpcoming } from "react-icons/md";
import DisplayRecentTask from "./DisplayRecentTask";

export default function Dashboard({
  tasks,
  onComplete,
  onDelete,
  onEdit,
  setIsEditTaskOpen,
  setActiveLink
}) {
  const availableTask = tasks.length;
  const completedTask = tasks.filter((task) => task.completed).length;
  const pendingTask = availableTask - completedTask;
  return (
    <div className="py-2 flex flex-col gap-5">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <TaskSummaryDisplay onClick={()=>setActiveLink(2)} text="All available task" number={availableTask} />
        <TaskSummaryDisplay onClick={()=>setActiveLink(6)} text="Pending task" number={pendingTask} />
        <TaskSummaryDisplay onClick={()=>setActiveLink(5)} text="Completed task" number={completedTask} />
      </div>
      <div className="">
        <div className="flex flex-col gap-6 ">
          <div className="py-1">
            <h1 className="text-3xl text-gray-700 font-extrabold flex items-center gap-3">
              Upcoming Task <MdOutlineUpcoming />
            </h1>
          </div>
          <div className="flex flex-col gap-2 overflow-y-auto">
            {tasks.length === 0 ? (
              <div className="flex items-center justify-center">
                <p className="text-2xl font-bold text-pink-500">
                  No Item Found :)
                </p>
              </div>
            ) : (
              tasks.map((task) => (
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
      </div>
    </div>
  );
}

function TaskSummaryDisplay({ text, number, onClick }) {
  return (
    <div onClick={onClick} className="bg-gray-400/10 bg-gradient-to-tr to-indigo-600/10 from-indigo-400/30 relative py-6 px-2 flex justify-center  flex-col cursor-pointer gap-2 items-center rounded shadow-md border hover:border hover:border-indigo-600/30 transition-all duration-200">
      <span className="text-xl absolute top-1 right-1 text-blue-600">
        <FiExternalLink />
      </span>
      <span className="h-16 w-16 flex items-center justify-center text-4xl bg-white rounded-full font-bold font-mono">
        {number}
      </span>
      <h1
        className={`text-2xl ${
          number === 0 ? "text-pink-600" : "text-blue-700"
        }  py-2 underline`}
      >
        {text}
      </h1>
    </div>
  );
}
// function DisplayRecentTask() {
//   return (
//     <div className="flex gap-2 justify-between shadow-sm py-1 px-2 hover:shadow-md cursor-pointer">
//       <div className="flex items-center gap-2">
//         <input type="checkbox" id="recent" />
//         <label htmlFor="recent">Wake up and Learn React...</label>
//       </div>
//       <div>
//         <span className="text-sm font-mono">2 days</span>
//       </div>
//       <div className="flex items-center gap-4 px-2">
//         <button className="text-xl text-indigo-600">
//           <CiEdit />
//         </button>
//         <button className="text-xl text-indigo-600">
//           <RiDeleteBin5Line />
//         </button>
//       </div>
//     </div>
//   );
// }
