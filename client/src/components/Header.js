import React, { useState } from "react";
import { Navbar, TextInput } from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import UserAvatar from "./UserAvatar";
import { useSelector, useDispatch } from "react-redux";
import { setOpenSidebar } from "../redux/slices/authSlice";
import Profile from "./Profile"; 

export default function Header() {
  const path = useLocation().pathname;
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  // State to control the visibility of the Profile modal
  const [isProfileOpen, setProfileOpen] = useState(false);

  // Function to toggle the Profile modal
  const toggleProfileModal = () => {
    setProfileOpen(!isProfileOpen);
  };

  return (
    <Navbar className="border-b-8 border-t-2 border-teal-600 h-30">
      <Link
        to="/"
        className="self-center whitespace-nowrap text-sm sm:text-xl font-medium dark:text-white"
      >
        <span className="px-2 py-2 bg-gradient-to-tr from-indigo-800 via-purple-400 to-pink-400 rounded-md text-white">
          TaskMan
        </span>
        <span className="text-gray-500 px-1">App</span>
      </Link>

      {/* Search bar */}
      <form>
        <TextInput
          type="text"
          placeholder="Search..."
          icon={MagnifyingGlassIcon}
          className="flex-1 outline-none bg-transparent placeholder:text-gray-500 text-gray-800"
        />
      </form>

      {/* User avatar and sidebar toggle */}
      <div className="flex gap-3 md:order-2">
        {user && (
          <>
            {/* Sidebar toggle button for mobile */}
            <button
              onClick={() => dispatch(setOpenSidebar(true))}
              className="text-2xl text-gray-500 block md:hidden"
            >
              ☰
            </button>
            
            {/* UserAvatar with onProfileClick handler */}
            <UserAvatar 
              fullName={user.name} 
              onProfileClick={toggleProfileModal} // Pass toggle function to open Profile modal
            />
          </>
        )}
      </div>

      {/* Profile Modal */}
      {isProfileOpen && (
        <Profile isOpen={isProfileOpen} onClose={toggleProfileModal} />
      )}
    </Navbar>
  );
}
