import React from "react";
import {
  Menu,
  Transition,
  MenuButton,
  MenuItems,
  MenuItem,
} from "@headlessui/react";
import { Fragment, useState } from "react";
import { FaUser, FaUserLock } from "react-icons/fa";
import { IoLogOutOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getInitials } from "../utils/index.js";
import clsx from "clsx";

const UserAvatar = () => {
  const [open, setOpen] = useState(false);
  const [openPassword, setOpenPassword] = useState(false);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = () => {
    console.log("logout");
  };

  return (
    <div>
      <Menu as="div" className="relative inline-block text-left">
        <MenuButton as={Fragment}>
          {({ open }) => (
            <button
              className={clsx(
                "w-10 h-10 2xl:w-12 2xl:h-12 flex items-center justify-center rounded-full bg-blue-600",
                open && "bg-blue-700"
              )}
            >
              <span className="text-white font-semibold">
                {getInitials(user?.name)}
              </span>
            </button>
          )}
        </MenuButton>

        {/* // <div>
    //   <Menu as="div" className="relative inline-block text-left">
    //     <div>
    //       <MenuButton className="w-10 h-10 2xl:w-12 2xl:h-12 items-center justify-center rounded-full bg-blue-600">
    //         <span className="text-white font-semibold">
    //           {getInitials(user?.name)}
    //         </span>
    //       </MenuButton>
    //     </div> */}

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <MenuItems className="absolute right-0 mt-2 w-56 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none">
            <div className="py-1">
              <MenuItem as={Fragment}>
                {({ open }) => (
                  <button
                    className={clsx(
                      "group flex rounded-md items-center w-full px-2 py-2 text-sm",
                      open ? "bg-gray-100 text-gray-900" : "text-gray-700"
                    )}
                    onClick={logoutHandler}
                  >
                    <IoLogOutOutline
                      className="w-5 h-5 mr-2"
                      aria-hidden="true"
                    />
                    Logout
                  </button>
                )}
              </MenuItem>
            </div>
          </MenuItems>

          {/* <MenuItems className="absolute right-0 mt-2 w-56 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none">
            <div className="py-1">
              <MenuItem>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700"
                    } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                    onClick={logoutHandler}
                  >
                    <IoLogOutOutline
                      className="w-5 h-5 mr-2"
                      aria-hidden="true"
                    />
                    Logout
                  </button>
                )}
              </MenuItem>
            </div>
          </MenuItems> */}
        </Transition>
      </Menu>
    </div>
  );
};

export default UserAvatar;
