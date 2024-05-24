import React from "react";
import Customization from "./Customization";
import ProfileSettings from "./ProfileSettings";
import Account from "./Account";

function ProfileMain({ activeLink }) {
  return (
    <div className="flex flex-col gap-3">
      <div className="py-3">
        <button className="font-bold text-2xl text-indigo-600 hover:text-indigo-500">
          @Flivian
        </button>
      </div>
      {activeLink === 1 && <ProfileSettings />}
      {activeLink === 2 && <Customization />}
      {activeLink === 3 && <Account />}
    </div>
  );
}

export default ProfileMain;
