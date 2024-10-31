import { Button, TextInput } from "flowbite-react";
import React from "react";
// import { useSelector } from "react-redux"; add later

// FINISH PAGE

export default function DashboardProfile() {
  //add var on current user using useSelector

  return (
    <div className="max-w-lg mx-auto p-4 w-full">
      <h1 className="my-7 text-center font-semibold text-3xl">PROFILE</h1>
      <form className="flex flex-col gap-5">
        <div className="w-30 h-30 self-center">
          <img
            //src={picture} add later picture
            alt="user"
            className="rounded-full w-full object-cover border-7 border-[purple]"
          />
        </div>
        <TextInput
          type="text"
          id="username"
          placeholder="Username"
          defaultValue={currentUser.usename}
        />
        <TextInput
          type="email"
          id="email"
          placeholder="email"
          defaultValue={currentUser.email}
        />
        <TextInput
          type="password"
          id="password"
          placeholder="password"
          defaultValue="***********"
        />
        <Button type="submit">Update</Button>
      </form>
      <div className="text-red-600 flex justify-between mt-5">
        <span>Delete Account</span>
        <span>Logout</span>
      </div>
    </div>
  );
}
