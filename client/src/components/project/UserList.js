import { Listbox } from "@headlessui/react";
import { BsChevronExpand } from "react-icons/bs";
import { MdCheck } from "react-icons/md";
import { summary } from "../../assets/data"; // Ensure data is correctly imported
import clsx from "clsx";
import { getInitials } from "../../utils";
import {
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { Transition } from "@headlessui/react";
import React, { Fragment, useEffect, useState, useMemo } from "react";

const UserList = ({ setTeam, team, className }) => {
  // If summary.users is static, you don't need useMemo
  const data = summary.users || [];

  const [selectedUsers, setSelectedUsers] = useState(() => {
    // Pre-select users based on team ids passed as a prop
    return data.filter((user) => team.includes(user.id));
  });

  const handleChange = (selectedUser) => {
    setSelectedUsers((prevSelected) => {
      const isAlreadySelected = prevSelected.some(
        (user) => user.id === selectedUser.id
      );
      if (isAlreadySelected) {
        return prevSelected.filter((user) => user.id !== selectedUser.id);
      } else {
        return [...prevSelected, selectedUser];
      }
    });
  };

  // Update team IDs whenever selectedUsers changes
  useEffect(() => {
    setTeam(selectedUsers.map((user) => user.id));
  }, [selectedUsers, setTeam]);

  return (
    <div>
      <p className="text-gray-700 mb-2">Project Team Members:</p>
      <Listbox value={selectedUsers} onChange={handleChange} multiple>
        <div className="relative mt-1">
          <ListboxButton
            className={`relative w-full cursor-default rounded bg-white pl-3 pr-10 text-left px-3 py-2.5 2xl:py-3 border border-gray-300 sm:text-sm ${className}`}
          >
            {/* <ListboxButton className="relative w-full cursor-default rounded-lg bg-white pl-3 pr-10 py-2 text-left shadow border border-gray-300 sm:text-sm"> */}
            <span className="block truncate">
              {selectedUsers.length > 0
                ? selectedUsers.map((user) => user.name).join(", ")
                : "Select team members"}
            </span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <BsChevronExpand
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </ListboxButton>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <ListboxOptions className="absolute z-10 mt-1 w-full max-h-60 overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {data.map((user, index) => (
                <ListboxOption
                  key={index}
                  className={({ active }) =>
                    clsx(
                      "relative cursor-default select-none py-2 pl-10 pr-4",
                      active ? "bg-blue-100 text-blue-900" : "text-gray-900"
                    )
                  }
                  value={user}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={clsx(
                          "flex items-center gap-2 truncate",
                          selected && "font-medium"
                        )}
                      >
                        <div className="w-6 h-6 rounded-full text-white flex items-center justify-center bg-blue-600">
                          {getInitials(user.name)}
                        </div>
                        {user.name}
                      </span>
                      {selected && (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-blue-600">
                          <MdCheck className="h-5 w-5" aria-hidden="true" />
                        </span>
                      )}
                    </>
                  )}
                </ListboxOption>
              ))}
            </ListboxOptions>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};

export default UserList;
