import React, { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
import Layout from "../components/Layout/Layout";
import AddNewTask from "../components/AddNewTask";
import Overlay from "../components/Overlay";
import Searchbar from "../components/Searchbar";
import NavbarGeating from "../components/Navbar/NavbarGeating";
import NavbarProfileAddTask from "../components/Navbar/NavbarProfileAddTask";
import Dashboard from "../components/Dashboard/Dashboard";
import EditTask from "../components/EditTask";
import Task from "../components/Task/Task";
import TaskDisplay from "../components/Task/TaskDisplay";
import Categories from "../components/Categories/Categories";
import TodayTask from "../components/TodayTask/TodayTask";
import Logout from "../components/Logout/Logout";
import PendingTask from "../components/PendingTask/PendingTask";
import CompletedTask from "../components/CompletedTask/CompletedTask";
import { initialTasks } from "./InitialTasks";

function Home() {
  const [isAddTaskOpen, setIsAddTaskOpen] = useState(false);
  const [isEditTaskOpen, setIsEditTaskOpen] = useState(false);
  const [tasks, setTasks] = useState(initialTasks);
  const [taskEdit, setTaskEdit] = useState([]);
  const [name, setName] = useState(true);
  const [date, setDate] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [pending, setPending] = useState(false);
  const [sortBy, setSortBy] = useState("ascending");
  const [activeLink, setActiveLink] = useState(1);
  let sortedItems = tasks;

  // Function to add new task
  function handleAddNewTask(task) {
    console.log(task);
    setTasks((prevTask) => [...prevTask, task]);
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
  return (
    <div className="flex flex-col gap-2">
      <Navbar>
        <NavbarGeating />
        <NavbarProfileAddTask setIsAddTaskOpen={setIsAddTaskOpen} />
      </Navbar>
      {isAddTaskOpen && <Overlay setIsAddTaskOpen={setIsAddTaskOpen} />}
      {isEditTaskOpen && <Overlay setIsEditTaskOpen={setIsEditTaskOpen} />}
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
          setTaskEdit={setTaskEdit}
          onUpdate={handleUpdateTask}
        />
      )}
      <Searchbar />
      <div className="grid grid-cols-[300px_1fr] gap-3">
        <Sidebar onClick={handleClick} activeLink={activeLink} />
        <Layout>
          {activeLink === 1 && (
            <Dashboard
              tasks={tasks}
              onComplete={handleCompleted}
              onDelete={handleDelete}
              onEdit={handleEdit}
              setIsEditTaskOpen={setIsEditTaskOpen}
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
          {activeLink === 4 && <TodayTask />}
          {activeLink === 5 && <CompletedTask />}
          {activeLink === 6 && <PendingTask />}
          {activeLink === 7 && <Logout />}
        </Layout>
      </div>
      <div className="py-4 bg-gray-500/20 flex items-center justify-center">
        <p className="text-lg">@Flivian2024</p>
      </div>
    </div>
  );
}

export default Home;
