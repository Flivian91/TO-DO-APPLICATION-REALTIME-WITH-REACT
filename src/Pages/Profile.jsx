import React, { useState } from "react";
import ProfileSidebar from "../components/Profile/ProfileSidebar";
import ProfileMain from "../components/Profile/Main/ProfileMain";
import { IoMdArrowRoundBack } from "react-icons/io";

function Profile({setIsprofileOpen}) {
  const [activeLink, setActiveLink] = useState(1);
  function handleActiveLink(id) {
    setActiveLink(id);
  }
  return (
    <div className="w-full relative h-full flex items-center justify-center bg-gray-200 py-5 mt-1 px-2 2xl:container mx-auto">
      <button onClick={() => setIsprofileOpen(prevState => !prevState)} className="absolute top-1 left-1 flex items-center text-xl text-indigo-600 font-bold">
        <span className="text-2xl">
          <IoMdArrowRoundBack />
        </span>
        <span>Back home</span>
      </button>
      <div className="grid lg:grid-cols-[300px_1fr] w-full md:w-3/4 gap-3">
        <ProfileSidebar
          activeLink={activeLink}
          onActiveLink={handleActiveLink}
        />
        <ProfileMain activeLink={activeLink} />
      </div>
    </div>
  );
}

export default Profile;
