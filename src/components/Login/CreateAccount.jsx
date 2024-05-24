import React, { useState } from "react";

function CreateAccount({setIscreateAccount}) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-gradient-to-tr from-indigo-500/20 to-indigo-700/20">
      <div className="w-full sm:w-[500px]  bg-white px-2 py-10 flex flex-col gap-4 mx-2 rounded-md shadow-md">
        <div className="flex items-center justify-center py-2">
          <h1 className="font-bold text-2xl text-indigo-600 uppercase">
            create new account
          </h1>
        </div>
        <form className="flex flex-col gap-2">
          <div className="flex flex-col gap-2 px-2">
            <label htmlFor="name" className="text-xl font-bold text-gray-700">
              Full Name
            </label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              id="name"
              className="rounded"
              required
            />
          </div>
          <div className="flex flex-col gap-2 px-2">
            <label htmlFor="email" className="text-xl font-bold text-gray-700">
              Email
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
              className="rounded"
              required
            />
          </div>
          <div className="flex flex-col gap-2 px-2">
            <label
              htmlFor="new-pass"
              className="text-xl font-bold text-gray-700"
            >
              Password
            </label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="new-pass"
              className="rounded"
              required
            />
          </div>
          <div className="flex flex-col items-center my-4 px-2">
            <button className="text-xl bg-indigo-600 text-gray-100 font-bold text-center w-full py-2 rounded hover:bg-indigo-500">
              Create account
            </button>
          </div>
        </form>
        <div className="flex justify-between items-center px-2">
          <span className="text-xl">Already have account?</span>
          <button onClick={()=> setIscreateAccount(prevState => !prevState)} className="text-indigo-600 font-bold text-xl hover:underline">
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default CreateAccount;
