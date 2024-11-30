import React from "react";
import { MdDashboard, MdOutlineAddTask } from "react-icons/md";
import { FaTasks, FaUsers } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { setOpenSidebar } from "../redux/slices/authSlice";
import { Link } from "react-router-dom";
import clsx from "clsx";

const linkData = [
  {
    label: "Projects",
    link: "projects",
    icon: <MdOutlineAddTask />,
  },
  {
    label: "Project",
    link: "project",
    icon: <MdDashboard />,
  },
  {
    label: "Tasks",
    link: "tasks",
    icon: <FaTasks />,
  },
  // {
  //   label: "Users",
  //   link: "users",
  //   icon: <FaUsers />,
  // },
];

const Sidebar = () => {
  const { user } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const location = useLocation();

  const path = location.pathname.split("/")[1];

  const sidebarLinks = user?.isAdmin ? linkData : linkData.slice(0, 5);

  const closeSibebar = () => {
    dispatch(setOpenSidebar(false));
  };

  const NavLink = ({ el }) => {
    return (
      <Link
        to={el.link}
        onClick={closeSibebar}
        className={clsx(
          "w-full lg:w-3/4 flex gap-2 px-3 py-2 rounded-md items-center text-gray-800 text-base hover:bg-teal-900",
          path === el.link.split("/")[0] ? "bg-teal-500 text-white" : ""
        )}
      >
        {el.icon}
        <span className="hover:text-white">{el.label}</span>
      </Link>
    );
  };

  return (
    <div className="w-full h-full flex flex-col gap-6 p-5">
      <h1 className="flex gap-1 items-center">
        <p className="bg-teal-500 p-2 rounded-full">
          <MdOutlineAddTask className="text-white text-2xl font-black" />
        </p>
        <span className="text-2xl font-bold text-black">TaskMe</span>
      </h1>

      <div className="flex-1 flex flex-col gap-y-5 py-8">
        {sidebarLinks.map((link) => (
          <NavLink el={link} key={link.label} />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
