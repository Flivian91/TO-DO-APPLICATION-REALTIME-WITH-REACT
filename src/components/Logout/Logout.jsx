import React, { useState } from "react";

function Logout() {
  const [currentPassword, setCurrentPassword] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  function handleSubmit(e) {
    e.preventDefault();
    console.log(currentPassword);
    setIsDeleting(true)
    setTimeout(() => {
      setIsDeleting(false)
    }, 2000);
    setCurrentPassword("");
  }
  return (
    <div className="flex flex-col items-center py-3">
      <div className="w-full sm:w-3/4 ">
        <h1 className="text-4xl my-1 font-bold text-center text-red-600">
          We hate to see you go.😪
        </h1>
        <p className="text-center text-lg text-gray-700 font-medium">
          Before you delete your account, we would want you to know that this
          action will delete your{" "}
          <span className="text-red-600 font-bold">Task</span> in This
          platforms. If that's what you want, please proceed with entering your
          password to confirm that it's you.
        </p>
        <div className="flex flex-col gap-3">
          <form
            onSubmit={handleSubmit}
            name="User Information"
            autoComplete="on"
            className="flex flex-col gap-3 py-2 px-0"
          >
            <div className="flex flex-col gap-3 px-2 py-5">
              <div className="flex flex-col gap-2">
                <label htmlFor="email-del" className="check-label">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email-del"
                  className="disabled:border-gray-600 disabled:bg-gray-200/50 rounded text-gray-700"
                  value="dflivo@gmail.com"
                  required
                  disabled
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="phone-del" className="check-label">
                  Enter Current password
                </label>
                <input
                  type="password"
                  id="phone-del"
                  className="check-input"
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  required
                />
              </div>
              <div className="flex items-center mt-5">
                <button
                  type="submit"
                  className="py-2 w-full rounded-lg text-white text-xl font-medium hover:bg-red-500 active:bg-red-700 focus:ring-1 focus:ring-offset-2 focus:ring-offset-red-600 transition-all duration-300 bg-red-600"
                >
                  {isDeleting ? "Deleting..." : "Delete Account"}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Logout;
