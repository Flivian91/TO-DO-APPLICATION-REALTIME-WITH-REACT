import React, { useState } from "react";

function Account() {
  const [oldPassword, setOldPassword] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")



  return (
    <div className="bg-white px-2 py-6 shadow rounded">
      <form className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold text-gray-800 py-4 px-2">
          Account managemant
        </h1>
        <div className="flex flex-col gap-2 px-2">
          <label
            htmlFor="old-password"
            className="text-xl font-bold text-gray-700"
          >
            Current password
          </label>
          <input value={oldPassword} onChange={(e)=> setOldPassword(e.target.value)} type="password" id="old-password" className="rounded" />
        </div>
        <div className="flex flex-col gap-2 px-2">
          <label htmlFor="new-pass" className="text-xl font-bold text-gray-700">
            New password
          </label>
          <input value={password} onChange={(e)=> setPassword(e.target.value)} type="password" id="new-pass" className="rounded" />
        </div>
        <div className="flex flex-col gap-2 px-2">
          <label
            htmlFor="conf-new-pass"
            className="text-xl font-bold text-gray-700"
          >
            Confirm new password
          </label>
          <input value={confirmPassword} onChange={(e)=> setConfirmPassword(e.target.value)} type="password" id="conf-new-pass" className="rounded" />
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

export default Account;
