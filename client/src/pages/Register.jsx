import { Button, Label, TextInput } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="min-h-screen mt-20">
        <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
          {/* left */}
          <div className="flex-1">
            <Link to="/" className="font-bold dark:text-white text-4xl">
              <span className="px-2 py-1 bg-gradient-to-tr from-indigo-800 via-purple-400 to-pink-400 rounded-md text-white">
                TaskMan
              </span>
              App
            </Link>
            <p className="text-sm mt-8">Task Management Project</p>
          </div>
          {/* right */}

          <div className="flex-1"></div>
          <form className="flex flex-col gap-4 w-full">
            <div className="">
              <Label value="Username" />
              <TextInput
                type="text"
                placeholder="Your username"
                id="username"
              />
            </div>
            <div className="">
              <Label value="Email" />
              <TextInput type="text" placeholder="Your email" id="email" />
            </div>
            <div className="">
              <Label value="Password" />
              <TextInput
                type="text"
                placeholder="Your password"
                id="password"
              />
            </div>
            <Button gradientDuoTone="purpleToPink" type="submit">
              Register
            </Button>
            <div className="flex gap-1 text-sm mt-3">
              <span>Have an account?</span>
              <Link to="/login" className="text-blue-800">
                Login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
