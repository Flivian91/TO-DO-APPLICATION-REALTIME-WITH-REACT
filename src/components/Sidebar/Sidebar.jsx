import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { CiBoxList } from "react-icons/ci";
import { FaFolderTree } from "react-icons/fa6";
import { FaRegCalendarAlt } from "react-icons/fa";
import { TiInputChecked } from "react-icons/ti";
import { MdOutlinePendingActions } from "react-icons/md";
import { CiLogout } from "react-icons/ci";
import { NavLink } from "react-router-dom";
const sidebarLinks = [
  {
    icon: <AiOutlineHome />,
    title: "Dashboard",
    to: "dashboard",
    id: 1,
  },
  {
    icon: <CiBoxList />,
    title: "All Task",
    to: "all-task",
    id: 2,
  },
  {
    icon: <FaFolderTree />,
    title: "Categories",
    to: "categories",
    id: 3,
  },
  {
    icon: <FaRegCalendarAlt />,
    title: "Today’s Tasks",
    to: "today-task",
    id: 4,
  },
  {
    icon: <TiInputChecked />,
    title: "Completed Tasks",
    to: "completed-task",
    id: 5,
  },
  {
    icon: <MdOutlinePendingActions />,
    title: "Pending Tasks",
    to: "pending-task",
    id: 6,
  },
  {
    icon: <CiLogout />,
    title: "Logout",
    to: "logout",
    id: 7,
  },
];

function Sidebar({ setIsSearchOpen }) {
  return (
    <div className="flex  flex-col gap-3 shadow-lg">
      {/* Search Button */}
      <div className="px-2">
        <button
          onClick={() => setIsSearchOpen((prevSate) => !prevSate)}
          className="w-full flex justify-between text-indigo-600 items-center py-2 bg-gray-400/30 px-2 mt-1 outline-none rounded shadow hover:bg-gray-400/60 text-lg"
        >
          <span>Search Task</span>
          <span>Ctrl + K</span>
        </button>
      </div>
      <div>
        <nav className="px-2">
          <ul className="flex flex-col gap-2">
            {sidebarLinks.map((link) => {
              return (
                <NavLink
                  to={link.to}
                  key={link.id}
                  activeClassName="active" // Class to apply when link is active
                  className="w-full text-xl font-bold  hover:bg-indigo-600 hover:text-white hover:shadow rounded py-2 px-1"
                >
                  <button className="flex items-center gap-2 w-full">
                    {link.icon}
                    {link.title}
                  </button>
                </NavLink>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Sidebar;
