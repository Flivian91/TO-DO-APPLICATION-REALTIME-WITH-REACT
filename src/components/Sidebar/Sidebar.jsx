import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { CiBoxList } from "react-icons/ci";
import { FaFolderTree } from "react-icons/fa6";
import { FaRegCalendarAlt } from "react-icons/fa";
import { TiInputChecked } from "react-icons/ti";
import { MdOutlinePendingActions } from "react-icons/md";
import { CiLogout } from "react-icons/ci";
const sidebarLinks = [
  {
    icon: <AiOutlineHome />,
    title: "Dashboard",
    id: 1,
  },
  {
    icon: <CiBoxList />,
    title: "All Task",
    id: 2,
  },
  {
    icon: <FaFolderTree />,
    title: "Categories",
    id: 3,
  },
  {
    icon: <FaRegCalendarAlt />,
    title: "Today’s Tasks",
    id: 4,
  },
  {
    icon: <TiInputChecked />,
    title: "Completed Tasks",
    id: 5,
  },
  {
    icon: <MdOutlinePendingActions />,
    title: "Pending Tasks",
    id: 6,
  },
  {
    icon: <CiLogout />,
    title: "Logout",
    id: 7,
  },
];
function Sidebar({ onClick, activeLink, setIsSearchOpen }) {
  return (
    <div className="flex  flex-col gap-3 shadow-lg">
      {/* Search Button */}
      <div className="px-2">
        <button onClick={()=> setIsSearchOpen(prevSate => !prevSate)} className="w-full flex justify-between text-indigo-600 items-center py-2 bg-gray-400/30 px-2 mt-1 outline-none rounded shadow hover:bg-gray-400/60 text-lg">
          <span>Search Task</span>
          <span>Ctrl + K</span>
        </button>
      </div>
      <div>
        <nav className="px-2">
          <ul className="flex flex-col gap-2">
            {sidebarLinks.map((link) => {
              return (
                <li
                  onClick={() => onClick(link.id)}
                  key={link.id}
                  className={`${
                    activeLink === link.id ? "bg-indigo-600 text-gray-100" : "text-gray-700"
                  } w-full text-xl font-bold  hover:bg-indigo-600 py-2 px-1 hover:shadow rounded hover:text-white`}
                >
                  <button className="flex items-center gap-2 w-full">
                    {link.icon}
                    {link.title}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Sidebar;
