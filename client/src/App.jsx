import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Header from "./modules/Header";
import Footer from "./modules/Footer";
//import PrivateRoute from "./modules/PrivateRoute";
import Task from "./pages/Task";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/dashboard" element={<Dashboard />} />
        {/* <Route element={<PrivateRoute />}>
          
        </Route> */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/task" element={<Task />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
