import React, { Fragment } from "react";
import {
  Menu,
  Transition,
  MenuButton,
  MenuItems,
  MenuItem,
} from "@headlessui/react";
import { FaUser, FaUserLock } from "react-icons/fa";
import { IoLogOutOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { getInitials } from "../utils/index.js";
import clsx from "clsx";

const UserAvatar = ({ fullName, onProfileClick }) => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const initials = getInitials(fullName);

  const logoutHandler = () => {
    console.log("logout");
  };

  return (
    <>
      <div>
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <MenuButton className="w-10 h-10 2xl:w-12 2xl:h-12 items-center justify-center rounded-full bg-blue-600">
              <span className="text-white font-semibold">{initials}</span>
            </MenuButton>
          </div>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <MenuItems className="absolute right-0 mt-2 w-56 origin-top-right divide-gray-100 rounded-md bg-white shadow-2xl ring-1 ring-black/5 focus:outline-none">
              <div className="px-1 py-1">
                {/* Profile MenuItem */}
                <MenuItem>
                  {({ active }) => (
                    <button
                      onClick={onProfileClick} 
                      className={clsx(
                        active ? "bg-blue-500 text-white" : "text-gray-900",
                        "group flex rounded-md items-center w-full px-2 py-2 text-sm"
                      )}
                    >
                      <FaUser className="w-5 h-5 mr-2" aria-hidden="true" />
                      Profile
                    </button>
                  )}
                </MenuItem>

                {/* Change Password MenuItem */}
                <MenuItem>
                  {({ active }) => (
                    <button
                      className={clsx(
                        active ? "bg-blue-500 text-white" : "text-gray-900",
                        "group flex rounded-md items-center w-full px-2 py-2 text-sm"
                      )}
                    >
                      <FaUserLock className="w-5 h-5 mr-2" aria-hidden="true" />
                      Change Password
                    </button>
                  )}
                </MenuItem>

                {/* Logout MenuItem */}
                <MenuItem>
                  {({ active }) => (
                    <button
                      onClick={logoutHandler}
                      className={clsx(
                        active ? "bg-blue-500 text-white" : "text-gray-900",
                        "group flex rounded-md items-center w-full px-2 py-2 text-sm"
                      )}
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
          </Transition>
        </Menu>
      </div>
    </>
  );
};

export default UserAvatar;
