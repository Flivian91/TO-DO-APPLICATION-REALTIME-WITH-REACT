import React from "react";
import { IoMdSettings } from "react-icons/io";
import { MdManageAccounts } from "react-icons/md";
import { NavLink } from "react-router-dom";
const profileSidebarLinks = [
  {
    icon: "😊",
    title: "Profile",
    link: "settings",
    id: 1,
  },
  {
    icon: <IoMdSettings />,
    title: "Customization",
    link: "customization",
    id: 2,
  },
  {
    icon: <MdManageAccounts />,
    title: "Account",
    link: "account-management",
    id: 3,
  },
];

function ProfileSidebar({ onActiveLink, activeLink }) {
  return (
    <div className="bg-gray-200 px-2 mt-6">
      <ul className="flex flex-col gap-2">
        {profileSidebarLinks.map((link) => (
          <NavLink
            to={link.link}
            onClick={() => onActiveLink(link.id)}
            key={link.id}
            className={`${
              activeLink === link.id ? "bg-white shadow" : "hover:bg-indigo-200"
            } px-2 py-2 rounded text-xl  cursor-pointer text-gray-800 font-bold flex items-center gap-2`}
          >
            <span className="text-indigo-600">{link.icon}</span>
            <span>{link.title}</span>
          </NavLink>
        ))}
      </ul>
    </div>
  );
}

export default ProfileSidebar;
