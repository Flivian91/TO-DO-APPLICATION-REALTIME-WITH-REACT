import React from "react";


function NavbarGeating({currentUser}) {
  const date = new Date();
  const hour = date.getHours()
  let timeMessage;
  if (hour >= 5 && hour < 12) {
    timeMessage = "Morning";
  } else if (hour >= 12 && hour < 16) {
    timeMessage = "Afternoon";
  } else if (hour >= 16 && hour <= 19) {
    timeMessage = "Evening";
  } else {
    timeMessage = "Night";
  }
  return (
    <div className="text-base sm:text-2xl">
      <span className="text-gray-900 font-bold dark:text-gray-200">
        Good {timeMessage}, Flivian👋
      </span>
    </div>
  );
}

export default NavbarGeating;
