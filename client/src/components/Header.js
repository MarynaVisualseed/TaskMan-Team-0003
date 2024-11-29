import React from "react";
import { Navbar, TextInput } from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import UserAvatar from "./UserAvatar";
import { useSelector, useDispatch } from "react-redux";
import { setOpenSidebar } from "../redux/slices/authSlice";

export default function Header() {
  const path = useLocation().pathname;
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

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
      <form>
        <TextInput
          type="text"
          placeholder="Search..."
          icon={MagnifyingGlassIcon}
          className="flex-1 outline-none bg-transparent placeholder:text-gray-500 text-gray-800"
        />
      </form>

      <div className="flex gap-3 md:order-2">
        {user && (
          <>
            <button
              onClick={() => dispatch(setOpenSidebar(true))}
              className="text-2xl text-gray-500 block md:hidden"
            >
              ☰
            </button>
            <UserAvatar fullName={user.name} />{" "}
          </>
        )}
      </div>
    </Navbar>
  );
}
