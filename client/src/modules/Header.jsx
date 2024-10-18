import React from "react";
import { Navbar, TextInput, Button } from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
import { MagnifyingGlassIcon, MoonIcon } from "@heroicons/react/24/outline";

export default function Header() {
  const path = useLocation().pathname;
  return (
    <Navbar className="border-b-8 border-t-2 border-teal-600 h-30">
      <Link
        to="/"
        className="self-center whitespace-nowrap text-sm sm:text-xl font-medium dark:text-white"
      >
        <span className="px-2 py-1 bg-gradient-to-tr from-indigo-800 via-purple-400 to-pink-400 rounded-md text-white">
          TaskMan
        </span>
        App
      </Link>
      <form>
        <TextInput
          type="text"
          placeholder="Search..."
          icon={MagnifyingGlassIcon}
          className="hidden lg:inline"
        />
      </form>
      <Button className="w-10 h-10 lg:hidden" color="gray">
        <MagnifyingGlassIcon />
      </Button>
      <div className="flex gap-3 md:order-2">
        <Button className="w-12 h-10 hidden sm:inline" color="gray">
          <MoonIcon className="w-5 h-5" />
        </Button>
        <Link to="/login">
          <Button gradientDuoTone="purpleToBlue">Login</Button>
        </Link>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link as={Link} to="/" active={path === "/"}>
          Home
        </Navbar.Link>
        <Navbar.Link as={Link} to="/projects" active={path === "/projects"}>
          Projects
        </Navbar.Link>
        <Navbar.Link as={Link} to="/dashboard" active={path === "/dashboard"}>
          Dashboard
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
