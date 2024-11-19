import Login from "./pages/Login";
import { Routes, Route, Navigate, useLocation, Outlet } from "react-router-dom";
import { Toaster } from "sonner";
import Project from "./pages/Project";
import Tasks from "./pages/Tasks";
// import Users from "./pages/Users";
import Task from "./pages/Task";
import { useSelector } from "react-redux";
import Sidebar from "./components/Sidebar";
// import Navbar from "./components/Navbar";
import CustomFooter from "./components/CustomFooter";
import Header from "./components/Header";

function Layout() {
  const { user } = useSelector((state) => state.auth);

  const location = useLocation();

  return user ? (
    <div className="w-full h-screen flex flex-col md:flex-row">
      <div className="w-1/5 h-screen bg-white sticky top-0 hidden md:block">
        <Sidebar />
      </div>

      {/* <MobileSidebar/> */}
      <div className="flex-1 overflow-y-auto">
        {/* <Navbar /> */}

        <div className="p-4 2xl:px-10">
          <Outlet />
        </div>
      </div>
    </div>
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
}

function App() {
  return (
    <div className="w-full min-h-screen bg-slate-200">
      <Header />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/project" element={<Project />} />
          <Route path="/tasks" element={<Tasks />} />
          {/* <Route path="/completed/:status" element={<Tasks />} />
          <Route path="/inprogress/:status" element={<Tasks />} />
          <Route path="/todo/:status" element={<Tasks />} />
          <Route path="/users" element={<Users />} /> */}
          {/* <Route path="/task/:id" element={<Task />} /> */}
          <Route path="/task" element={<Task />} />
        </Route>

        <Route path="/login" element={<Login />} />
      </Routes>

      <Toaster richColors />
      <CustomFooter />
    </div>
  );
}

export default App;
