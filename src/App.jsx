import { useState } from "react";
import "./App.css";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import Navbar from "./components/Navbar/Navbar";
import NavbarGeating from "./components/Navbar/NavbarGeating";
import NavbarProfileAddTask from "./components/Navbar/NavbarProfileAddTask";
import Footer from "./components/Footer/Footer";

export default function App({currentUser}) {
  const [isAddTaskOpen, setIsAddTaskOpen] = useState(false);
  const [isProfileOpen, setIsprofileOpen] = useState(false);
  return (
    <div className="bg-gray-200/30 w-full  flex flex-col 2xl:mx-auto 2xl:container ">
      <Navbar>
        <NavbarGeating currentUser={currentUser} />
        <NavbarProfileAddTask
          setIsprofileOpen={setIsprofileOpen}
          setIsAddTaskOpen={setIsAddTaskOpen}
          isProfileOpen={isProfileOpen}
        />
      </Navbar>
      <div>
        {isProfileOpen ? (
          <Profile setIsprofileOpen={setIsprofileOpen} />
        ) : (
          <Home
            isAddTaskOpen={isAddTaskOpen}
            setIsAddTaskOpen={setIsAddTaskOpen}
          />
        )}
      </div>
      <Footer />
    </div>
  );
}
