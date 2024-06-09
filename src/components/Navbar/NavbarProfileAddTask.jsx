import React, { useContext } from "react";
import { CgProfile } from "react-icons/cg";
import { TaskDispatchContext } from "../../utils/Context/TaskProvider";
import { Link } from "react-router-dom";

export default function NavbarProfileAddTask() {
  const dispatch = useContext(TaskDispatchContext);
  const { pathname } = window.location;
  const isProfile = pathname.replace("/", "").toLowerCase() === "profile";
  return (
    <div className="flex items-center gap-2  sm:gap-4">
      <div className="flex items-center">
        {!isProfile && (
          <button
            onClick={() => dispatch({ type: "set-add-task" })}
            className="px-2 sm:px-6 py-1 bg-indigo-600 text-gray-100 rounded text-base sm:text-xl hover:bg-indigo-600/90"
          >
            Add new task
          </button>
        )}
      </div>
      <Link
        to="/profile"
        className="cursor-pointer text-4xl text-indigo-700 flex items-center justify-center"
      >
        <CgProfile />
      </Link>
    </div>
  );
}
