import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
import Layout from "../components/Layout/Layout";
import AddNewTask from "../components/common/AddNewTask";
import Overlay from "../components/common/Overlay";
import Searchbar from "../components/common/Searchbar";
import Dashboard from "../components/Dashboard/Dashboard";
import EditTask from "../components/common/EditTask";
import Task from "../components/Task/Task";
import TaskDisplay from "../components/Task/TaskDisplay";
import Categories from "../components/Categories/Categories";
import TodayTask from "../components/TodayTask/TodayTask";
import Logout from "../components/Logout/Logout";
import PendingTask from "../components/PendingTask/PendingTask";
import CompletedTask from "../components/CompletedTask/CompletedTask";
import { initialTasks } from "./InitialTasks";

function Home({ isAddTaskOpen, setIsAddTaskOpen }) {
  const [isEditTaskOpen, setIsEditTaskOpen] = useState(false);
  const [tasks, setTasks] = useState(initialTasks);
  const [taskEdit, setTaskEdit] = useState([]);
  const [name, setName] = useState(true);
  const [date, setDate] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [pending, setPending] = useState(false);
  const [sortBy, setSortBy] = useState("ascending");
  const [activeLink, setActiveLink] = useState(1);
  const [searchItems, setSearchItems] = useState([]);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchResults, SetSearchResults] = useState([]);
  let sortedItems = tasks;
  // Add data to the local storage
  useEffect(
    function () {
      localStorage.setItem("task", JSON.stringify(tasks));
    },
    [tasks]
  );
  // Retrive data from local storage
  useEffect(function () {
    const tasksLocal = JSON.parse(localStorage.getItem("task"));
    tasksLocal && setTasks(tasksLocal);
  }, []);
  // Function to add new task
  function handleAddNewTask(task) {
    setTasks((prevTask) => [
      ...prevTask,
      { ...task, completed: task.dueDate < Date.now() ? true : false },
    ]);
  }
  function handleCompleted(id) {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
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
  let sortByTask;
  if (sortBy === "ascending")
    sortByTask = sortedItems
      .slice()
      .sort((a, b) => a.title.localeCompare(b.title));
  if (sortBy === "descending")
    sortByTask = sortedItems
      .slice()
      .sort((a, b) => b.title.localeCompare(a.title));
  if (sortBy === "date") {
    sortByTask = sortedItems
      .slice()
      .sort((a, b) => b.dueDate.localeCompare(a.dueDate));
  }
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
      {isAddTaskOpen && <Overlay isOpen={setIsAddTaskOpen} />}
      {isEditTaskOpen && <Overlay isOpen={setIsEditTaskOpen} />}
      {isSearchOpen && <Overlay isOpen={setIsSearchOpen} />}
      {isAddTaskOpen && (
        <AddNewTask
          setIsAddTaskOpen={setIsAddTaskOpen}
          onAddNewTask={handleAddNewTask}
        />
      )}
      {isEditTaskOpen && (
        <EditTask
          setIsEditTaskOpen={setIsEditTaskOpen}
          taskEdit={taskEdit}
          key={taskEdit.id}
          onUpdate={handleUpdateTask}
        />
      )}
      {isSearchOpen && (
        <Searchbar
          onSearch={handleSearch}
          searchResults={searchResults}
          setIsSearchOpen={setIsSearchOpen}
          onComplete={handleCompleted}
          onDelete={handleDelete}
          onEdit={handleEdit}
          setIsEditTaskOpen={setIsEditTaskOpen}
        />
      )}

      <div className="grid md:grid-cols-[300px_1fr] gap-3 ">
        <Sidebar
          onClick={handleClick}
          activeLink={activeLink}
          setIsSearchOpen={setIsSearchOpen}
        />
        <Layout>
          {activeLink === 1 && (
            <Dashboard
              tasks={tasks}
              onComplete={handleCompleted}
              onDelete={handleDelete}
              onEdit={handleEdit}
              setIsEditTaskOpen={setIsEditTaskOpen}
              setActiveLink={setActiveLink}
            />
          )}

          {activeLink === 2 && (
            <Task
              tasks={tasks}
              name={name}
              completed={completed}
              pending={pending}
              setName={setName}
              setCompleted={setCompleted}
              setPending={setPending}
              sortedItems={sortByTask}
              sortBy={sortBy}
              setSortBy={setSortBy}
            >
              <TaskDisplay
                tasks={sortByTask}
                onComplete={handleCompleted}
                onDelete={handleDelete}
                onEdit={handleEdit}
                setIsEditTaskOpen={setIsEditTaskOpen}
              />
            </Task>
          )}
          {activeLink === 3 && (
            <Categories
              tasks={tasks}
              onComplete={handleCompleted}
              onDelete={handleDelete}
              onEdit={handleEdit}
              setIsEditTaskOpen={setIsEditTaskOpen}
            />
          )}
          {activeLink === 4 && (
            <TodayTask
              tasks={tasks}
              onComplete={handleCompleted}
              onDelete={handleDelete}
              onEdit={handleEdit}
              setIsEditTaskOpen={setIsEditTaskOpen}
            />
          )}
          {activeLink === 5 && (
            <CompletedTask
              tasks={tasks}
              onComplete={handleCompleted}
              onDelete={handleDelete}
              onEdit={handleEdit}
              setIsEditTaskOpen={setIsEditTaskOpen}
            />
          )}
          {activeLink === 6 && (
            <PendingTask
              tasks={tasks}
              onComplete={handleCompleted}
              onDelete={handleDelete}
              onEdit={handleEdit}
              setIsEditTaskOpen={setIsEditTaskOpen}
            />
          )}
          {activeLink === 7 && <Logout />}
        </Layout>
      </div>
    </div>
  );
}

export default Home;
