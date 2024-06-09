import { useReducer, useState } from "react";
import "./App.css";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import Footer from "./components/Footer/Footer";
import { TaskContext, TaskDispatchContext } from "./utils/Context/TaskProvider";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import ProfileSettings from "./components/Profile/Main/ProfileSettings";
import Customization from "./components/Profile/Main/Customization";
import Account from "./components/Profile/Main/Account";
import Dashboard from "./components/Dashboard/Dashboard";
import Task from "./components/Task/Task";
import Categories from "./components/Categories/Categories";
import TodayTask from "./components/TodayTask/TodayTask";
import CompletedTask from "./components/CompletedTask/CompletedTask";
import PendingTask from "./components/PendingTask/PendingTask";
import Logout from "./components/Logout/Logout";

function taskReducer(state, action) {
  switch (action.type) {
    case "add-new-task": {
      const newtask = [...state.tasks, action.payload];
      return {
        ...state,
        tasks: newtask,
      };
    }
    case "completed-task":
      const completedTask = state.tasks.map((task) =>
        task.id === action.payload
          ? { ...task, completed: !task.completed }
          : task
      );
      return {
        ...state,
        tasks: completedTask,
      };
    case "delete-task": {
      const deleteTask = state.tasks.filter(
        (task) => task.id != action.payload
      );
      return {
        ...state,
        tasks: deleteTask,
      };
    }
    case "update-task": {
      const updateTask = state.tasks.map((task) =>
        task.id === action.payload.id ? action.payload : task
      );
      return {
        ...state,
        tasks: updateTask,
      };
    }
    case "edit-task": {
      const editingTask = state.tasks.find(
        (task) => task.id === action.payload
      );
      return {
        ...state,
        taskEdit: editingTask,
      };
    }
    case "set-edit-task": {
      return {
        ...state,
        isEditTaskOpen: !state.isEditTaskOpen,
      };
    }

    case "set-add-task": {
      return {
        ...state,
        isAddTaskOpen: !state.isAddTaskOpen,
      };
    }
    case "update-sort": {
      let sortedTasks;
      if (action.payload === "ascending") {
        sortedTasks = state.tasks
          .slice()
          .sort((a, b) => a.title.localeCompare(b.title));
      } else if (action.payload === "descending") {
        sortedTasks = state.tasks
          .slice()
          .sort((a, b) => b.title.localeCompare(a.title));
      } else if (action.payload === "date") {
        sortedTasks = state.tasks
          .slice()
          .sort((a, b) => new Date(b.dueDate) - new Date(a.dueDate));
      }
      return {
        ...state,
        sortBy: action.payload,
        tasks: sortedTasks,
      };
    }
    case "filter-task": {
      return {
        ...state,
        filter: action.payload,
      };
    }
    default:
      throw Error("Action Not Found" + action.type);
  }
}
const initialState = {
  tasks: [],
  isEditTaskOpen: false,
  isAddTaskOpen: false,
  taskEdit: [],
  filter: "all", //completed, pending
  sortBy: "ascending", //descending, dateAdded
  searchQuery: [], //add an array of recent search
  isSearchOpen: false,
  searchResult: [], //stores previous search item
  sortedTasks: [],
};
export default function App({ currentUser }) {
  const [state, dispatch] = useReducer(taskReducer, initialState);
  return (
    <TaskContext.Provider value={state}>
      <TaskDispatchContext.Provider value={dispatch}>
        <div className="bg-gray-200/30 w-full  flex flex-col 2xl:mx-auto 2xl:container ">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />}>
                <Route index element={<Navigate to="dashboard" replace />} />
                <Route index path="dashboard" element={<Dashboard />} />
                <Route path="all-task" element={<Task />} />
                <Route path="categories" element={<Categories />} />
                <Route path="today-task" element={<TodayTask />} />
                <Route path="completed-task" element={<CompletedTask />} />
                <Route path="pending-task" element={<PendingTask />} />
                <Route path="logout" element={<Logout />} />
              </Route>
              <Route path="/profile" element={<Profile />}>
                <Route index element={<Navigate to="settings" replace />} />
                <Route index path="settings" element={<ProfileSettings />} />
                <Route path="customization" element={<Customization />} />
                <Route path="account-management" element={<Account />} />
              </Route>
            </Routes>
          </BrowserRouter>
          <Footer />
        </div>
      </TaskDispatchContext.Provider>
    </TaskContext.Provider>
  );
}
