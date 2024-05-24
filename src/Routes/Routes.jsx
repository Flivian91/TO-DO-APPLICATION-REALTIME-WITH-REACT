import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "../Pages/ErrorPage";
import Dashboard from "../components/Dashboard/Dashboard";
import Task from "../components/Task/Task";
import Categories from "../components/Categories/Categories";
import TodayTask from "../components/TodayTask/TodayTask";
import CompletedTask from "../components/CompletedTask/CompletedTask";
import PendingTask from "../components/PendingTask/PendingTask";
import Logout from "../components/Logout/Logout";
import AddNewTask from "../components/AddNewTask";
import Searchbar from "../components/Searchbar";
import Home from "../Pages/Home";
import Profile from "../Pages/Profile";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/tasks",
        element: <Task />,
      },
      {
        path: "/categories",
        element: <Categories />,
      },
      {
        path: "/today-tasks",
        element: <TodayTask />,
      },
      {
        path: "/pending-tasks",
        element: <PendingTask />,
      },
      {
        path: "/logout",
        element: <Logout />,
      },
      {
        path: "/add-new-task",
        element: <AddNewTask />,
      },
      {
        path: "/search",
        element: <Searchbar />,
      },
    ],
  },

  {
    path: "/profile",
    element: <Profile />,
  },
]);
