import React from "react";


function NavbarGeating() {
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
    <div className="text-lg sm:text-2xl">
      <span className="text-gray-900 font-bold font-mono">
        Good {timeMessage}, flivian👋
      </span>
    </div>
  );
}

export default NavbarGeating;
