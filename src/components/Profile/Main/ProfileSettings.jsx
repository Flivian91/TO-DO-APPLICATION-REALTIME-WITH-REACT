import React from "react";

function ProfileSettings() {
  return (
    <div className="w-full bg-white py-5 px-2 rounded shadow">
      <h1 className="text-3xl font-bold text-gray-800 py-4 px-2">Personal Information</h1>
      <form  className="flex flex-col gap-5 mb-2">
        <div className="flex flex-col gap-2 px-2">
          <label htmlFor="name" className="text-xl font-bold text-gray-700">
            Name
          </label>
          <input
            value="Flivian Mwirigi"
            type="text"
            id="name"
            className="rounded"
          />
        </div>
        <div className="flex flex-col gap-2 px-2">
          <label htmlFor="email" className="text-xl font-bold text-gray-700">
            Email
          </label>
          <input
            value="flivian@gmail.com"
            type="email"
            id="email"
            className="rounded"
          />
        </div>
        <div className="flex flex-col gap-2 px-2">
          <label htmlFor="username" className="text-xl font-bold text-gray-700">
            Username
          </label>
          <input
            value="dflivo"
            type="email"
            id="username"
            className="rounded"
          />
        </div>
        <div className="flex flex-col gap-2 px-2">
          <label htmlFor="file" className="text-xl font-bold text-gray-700">
            Profile image
          </label>
          <div className="flex gap-4 items-center py-2">
            <img
              className="w-16 h-16 rounded-full"
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
              alt=""
            />
            <input
              type="file"
              id="file"
              className="rounded file:bg-gray-400/30 file:border-none file:py-1 file:px-4 file:cursor-pointer"
            />
          </div>
        </div>
        <div className="flex flex-col items-center mt-4">
          <button className="text-xl bg-indigo-600 text-gray-100 font-bold text-center w-full py-2 rounded hover:bg-indigo-500">
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

export default ProfileSettings;
