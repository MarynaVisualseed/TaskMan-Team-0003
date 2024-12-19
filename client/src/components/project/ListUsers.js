import React, { useState, useEffect, Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { BsChevronExpand } from "react-icons/bs";
import { MdCheck } from "react-icons/md";
import { summary } from "../../assets/data"; 
import clsx from "clsx";
import { getInitials } from "../../utils";

const ListUsers = ({ setTeam, team, className }) => {
  const users = summary.users || []; 
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [openUpward, setOpenUpward] = useState(false);

  useEffect(() => {
    setTeam(selectedUsers.map((user) => user._id));
  }, [selectedUsers, setTeam]);

  const checkDropdownPosition = (e) => {
    const dropdownRect = e.target.getBoundingClientRect();
    const spaceBelow = window.innerHeight - dropdownRect.bottom;
    setOpenUpward(spaceBelow < 200); 
  };

  return (
    <div className={`relative ${className}`}>
      <p className="text-gray-700 mb-2">Project Team Members:</p>
      <Listbox value={selectedUsers} onChange={setSelectedUsers} multiple>
        <div className="relative">
          {/* Listbox Button */}
          <Listbox.Button
            onClick={checkDropdownPosition}
            className="relative w-full cursor-pointer rounded border border-gray-300 bg-white py-2.5 pl-3 pr-10 text-left shadow-sm focus:outline-none sm:text-sm"
          >
            <span className="block truncate">
              {selectedUsers.length > 0
                ? selectedUsers.map((u) => u.name).join(", ")
                : "Select team members"}
            </span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
              <BsChevronExpand className="h-5 w-5 text-gray-400" />
            </span>
          </Listbox.Button>

          {/* Listbox Dropdown */}
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options
              className={clsx(
                "absolute z-50 w-full max-h-60 overflow-y-auto rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm",
                openUpward ? "bottom-full mb-2" : "mt-1"
              )}
            >
              {users.map((user) => (
                <Listbox.Option
                  key={user._id}
                  className={({ active }) =>
                    clsx(
                      "relative cursor-pointer select-none py-2 pl-10 pr-4",
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
                        <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center">
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
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};

export default ListUsers;
