import React, { useRef, Fragment } from "react";
import { Routes, Route, Navigate, useLocation, Outlet } from "react-router-dom";
import { Toaster } from "sonner";
import { useSelector, useDispatch } from "react-redux";
import clsx from "clsx";
import { Transition } from "@headlessui/react";
import { IoClose } from "react-icons/io5";

import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import CustomFooter from "./components/CustomFooter";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Tasks from "./pages/Tasks";
import Users from "./pages/Users";
import Task from "./pages/Task";
import Project from "./pages/Project";
import { setOpenSidebar } from "./redux/slices/authSlice";

// Layout Component for Protected Routes
function ProtectedLayout() {
  return (
    <div className="w-full h-screen flex flex-col md:flex-row">
      {/* Sidebar for large screens */}
      <div className="w-1/5 h-screen bg-white sticky top-0 hidden md:block">
        <Sidebar />
      </div>

      {/* Mobile Sidebar */}
      <MobileSidebar />

      {/* Main content */}
      <div className="flex-1 overflow-y-auto">
        <Navbar />
        <div className="p-4 2xl:px-10">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

// Mobile Sidebar Component
const MobileSidebar = () => {
  const { isSidebarOpen } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const closeSidebar = () => {
    dispatch(setOpenSidebar(false));
  };

  return (
    <Transition
      show={isSidebarOpen}
      as={Fragment}
      enter="transition-opacity duration-700"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-700"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div
        className={clsx(
          "md:hidden fixed inset-0 z-40 bg-black/40 transition-all duration-700",
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        )}
        onClick={closeSidebar}
      >
        <div className="bg-white w-3/4 h-full">
          <div className="w-full flex justify-end px-5 mt-5">
            <button onClick={closeSidebar}>
              <IoClose size={25} />
            </button>
          </div>
          <Sidebar />
        </div>
      </div>
    </Transition>
  );
};

// App Component
function App() {
  const location = useLocation();

  // Determine if the current route is protected
  const isProtectedRoute = !["/home", "/login", "/register"].includes(
    location.pathname
  );

  return (
    <div className="w-full min-h-screen bg-slate-200">
      {/* Header */}
      <Header isProtected={isProtectedRoute} />

      {/* Routes */}
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Protected Routes */}
        <Route element={<ProtectedLayout />}>
          <Route path="/projects" element={<Projects />} />
          <Route path="/project/" element={<Project />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/task/:id" element={<Task />} />
          <Route path="/users" element={<Users />} />
        </Route>
      </Routes>

      {/* Footer */}
      <CustomFooter />

      {/* Notifications */}
      <Toaster richColors />
    </div>
  );
}

export default App;
