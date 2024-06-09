import React, { useContext, useEffect, useReducer, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
import Layout from "../components/Layout/Layout";
import AddNewTask from "../components/common/AddNewTask";
import Overlay from "../components/common/Overlay";
import Searchbar from "../components/common/Searchbar";
import Dashboard from "../components/Dashboard/Dashboard";
import EditTask from "../components/common/EditTask";
import { initialTasks } from "./InitialTasks";
import { TaskContext } from "../utils/Context/TaskProvider";

function Home() {
  const [Notvaila, setIsEditTaskOpen] = useState(false); //worked
  const { isEditTaskOpen } = useContext(TaskContext);
  const { isAddTaskOpen } = useContext(TaskContext);

  const [tasks, setTasks] = useState(initialTasks); //tasks fetch from an API
  const [taskEdit, setTaskEdit] = useState([]);
  // Sate Should be threated same
  const [name, setName] = useState(true);
  const [completed, setCompleted] = useState(false);
  const [pending, setPending] = useState(false);
  const [sortBy, setSortBy] = useState("ascending");
  const [activeLink, setActiveLink] = useState(1); //use React Router dom
  const [searchItems, setSearchItems] = useState([]);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchResults, SetSearchResults] = useState([]);
  let sortedItems = tasks;
  function handleCompleted(id) {
    dispatch({ type: "completed-task", payload: id });
  }
  function handleDelete(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }
  function handleEdit(id) {
    setTaskEdit(tasks.find((task) => task?.id === id));
  }
  function handleUpdateTask(updatedTask) {
    setTasks(
      tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task))
    );
  }
  if (name) {
    sortedItems = tasks.slice();
  }
  if (completed) {
    sortedItems = tasks.filter((task) => task.completed);
  }
  if (pending) {
    sortedItems = tasks.filter((task) => !task.completed);
  }
  // let sortByTask;
  // if (sortBy === "ascending")
  //   sortByTask = sortedItems
  //     .slice()
  //     .sort((a, b) => a.title.localeCompare(b.title));
  // if (sortBy === "descending")
  //   sortByTask = sortedItems
  //     .slice()
  //     .sort((a, b) => b.title.localeCompare(a.title));
  // if (sortBy === "date") {
  //   sortByTask = sortedItems
  //     .slice()
  //     .sort((a, b) => b.dueDate.localeCompare(a.dueDate));
  // }
  function handleClick(id) {
    setActiveLink(id);
  }
  function handleSearch(query) {
    setSearchItems((prevSearch) => [query, ...prevSearch]);
    handleFilterSearch(query.search, tasks);
  }
  function handleFilterSearch(query, items) {
    SetSearchResults(
      items.filter((item) =>
        item.title.toLowerCase().includes(query.toLowerCase())
      )
    );
  }
  // Wrong format to be corrected later
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      setIsSearchOpen(false);
      setIsAddTaskOpen(false);
      setIsEditTaskOpen(false);
    }
  });
  return (
    <div className="flex flex-col gap-2">
      <Navbar />
      {isAddTaskOpen && <Overlay value="set-add-task" />}
      {isEditTaskOpen && <Overlay value="set-edit-task" />}
      {isSearchOpen && <Overlay isOpen={setIsSearchOpen} />}
      {isAddTaskOpen && <AddNewTask />}
      {isEditTaskOpen && <EditTask key={taskEdit.id} />}
      {isSearchOpen && (
        <Searchbar
          onSearch={handleSearch}
          searchResults={searchResults}
          setIsSearchOpen={setIsSearchOpen}
          onComplete={handleCompleted}
          onDelete={handleDelete}
          onEdit={handleEdit}
          // setIsEditTaskOpen={setIsEditTaskOpen}
        />
      )}

      <div className="grid md:grid-cols-[300px_1fr] gap-3 ">
        <Sidebar
          onClick={handleClick}
          activeLink={activeLink}
          setIsSearchOpen={setIsSearchOpen}
        />
        <Layout />
      </div>
    </div>
  );
}

export default Home;
