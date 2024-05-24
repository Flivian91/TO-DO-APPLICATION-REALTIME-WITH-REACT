import React from "react";

function Customization() {
  return (
    <div className="w-full bg-white px-2 flex-col flex gap-5 py-4 rounded">
      {/* Apperareance */}
      <div>
        <h1 className="text-3xl font-bold text-gray-800 py-2 px-2">
          Select Theme
        </h1>
        <div className="w-full grid grid-cols-2 gap-4">
          <div className="flex items-center gap-2 py-3 bg-gray-200 px-4 cursor-pointer rounded">
            <input type="radio" name="theme" id="light" checked />
            <label htmlFor="light" className="text-xl font-bold">
              Light Mode
            </label>
          </div>
          <div className="flex items-center gap-2 py-3 bg-gray-200 px-4 cursor-pointer rounded">
            <input type="radio" name="theme" id="dark" />
            <label htmlFor="dark" className="text-xl font-bold">
              Dark Mode
            </label>
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-3xl font-bold text-gray-800 py-2 px-2">
          Select Font Family
        </h1>
        <div className="w-full grid grid-cols-2 gap-4">
          <div className="flex items-center gap-2 py-3 bg-gray-200 px-4 cursor-pointer rounded">
            <input type="radio" name="font" id="roman" checked />
            <label htmlFor="roman" className="text-xl font-bold">
              Poppins
            </label>
          </div>
          <div className="flex items-center gap-2 py-3 bg-gray-200 px-4 cursor-pointer rounded">
            <input type="radio" name="font" id="helvetica" />
            <label htmlFor="helvetica" className="text-xl font-bold">
              Helvetica
            </label>
          </div>
          <div className="flex items-center gap-2 py-3 bg-gray-200 px-4 cursor-pointer rounded">
            <input type="radio" name="font" id="roboto" />
            <label htmlFor="roboto" className="text-xl font-bold">
              Roboto
            </label>
          </div>
          <div className="flex items-center gap-2 py-3 bg-gray-200 px-4 cursor-pointer rounded">
            <input type="radio" name="font" id="lato" />
            <label htmlFor="lato" className="text-xl font-bold">
              Lato
            </label>
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-3xl font-bold text-gray-800 py-2 px-2">
          Notification
        </h1>
        <div className="w-full grid grid-cols-1 gap-4">
          <div className="flex items-center gap-2 py-2  px-4 cursor-pointer rounded">
            <input
              type="checkbox"
              className="rounded"
              name="theme"
              id="remainder"
              checked
            />
            <label htmlFor="remainder" className="text-xl font-bold">
              Allow to Receive notification 
            </label>
          </div>
          <div className="flex items-center gap-2 py-2 px-4 cursor-pointer rounded">
            <input
              type="checkbox"
              className="rounded"
              name="theme"
              id="autoRepeat"
            />
            <label htmlFor="autoRepeat" className="text-xl font-bold">
              Allow auto repeat of task 
            </label>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center mt-4">
        <button className="text-xl bg-indigo-600 text-gray-100 font-bold text-center w-full py-2 rounded hover:bg-indigo-500">
          Save
        </button>
      </div>
    </div>
  );
}

export default Customization;
