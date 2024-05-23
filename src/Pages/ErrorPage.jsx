import React from "react";
export default function ErrorPage() {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      {/* <img className='object-contain object-center' src={errorImage} alt="" /> */}
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-indigo-600 font-extrabold text-9xl">Ooops!</h1>
        <h3 className="text-2xl uppercase mt-5 font-bold">404 - not found</h3>
        <p className="text-center text-xl w-[400px]">
          The page you are looking for might have been removed or its name have
          changed or it is temporary unavailable
        </p>
        <Link
          className="text-xl bg-indigo-600 text-gray-100 px-5 py-1 rounded"
          to="/"
        >
          Back to homepage
        </Link>
      </div>
    </div>
  );
}
