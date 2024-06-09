import React from "react";
import Customization from "./Customization";
import ProfileSettings from "./ProfileSettings";
import Account from "./Account";
import { Link, Outlet } from "react-router-dom";

function ProfileMain({ activeLink }) {
  return (
    <div className="flex flex-col gap-3">
      <div className="py-3">
        <Link to='/profile/settings' className="font-bold text-2xl text-indigo-600 hover:text-indigo-500">
          @Flivian
        </Link>
      </div>
      <Outlet/>
    </div>
  );
}

export default ProfileMain;
