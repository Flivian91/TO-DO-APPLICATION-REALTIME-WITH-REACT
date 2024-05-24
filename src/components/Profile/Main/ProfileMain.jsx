import React from "react";
import Customization from "./Customization";
import ProfileSettings from "./ProfileSettings";
import Account from "./Account";

function ProfileMain({activeLink}) {
  return (
    <div className="flex flex-col gap-3">
      <div className="py-3">
        <h1 className="font-bold text-2xl text-indigo-600">@Flivian</h1>
      </div>
      {
        activeLink===1 && <Customization/>
      }
      {
        activeLink===2 && <ProfileSettings/>
      }
      {
        activeLink===3 && <Account/>
      }
    </div>
  );
}

export default ProfileMain;
