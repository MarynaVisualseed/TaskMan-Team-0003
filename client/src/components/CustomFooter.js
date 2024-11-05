import React from "react";
import { Link } from "react-router-dom";
import { Footer as FlowbiteFooter } from "flowbite-react";
import logo from "../assets/logo.png";

export default function CustomFooter() {
  return (
    <FlowbiteFooter
      container
      className="border border-t-8 border-teal-600 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
    >
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid w-full justify-between sm:flex md:grid-cols-1">
          <div className="mt-2 flex items-center">
            <img src={logo} alt="Logo" className="w-20 h-25 md:w-30 md:h-38" />
            <span className="ml-4 text-lg font-semibold">
              Task Management Project
            </span>
          </div>
          <div className="grid grid-cols-2 gap-9 mt-2 sm:grid-cols-3 sm:gap-7">
            <div>
              <FlowbiteFooter.Title title="PROVIDED BY" />
              <FlowbiteFooter.LinkGroup col>
                <FlowbiteFooter.Link
                  href="https://unicornuniversity.net/en/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Unicorn University
                </FlowbiteFooter.Link>
              </FlowbiteFooter.LinkGroup>
            </div>
            <div>
              <FlowbiteFooter.Title title="FOLLOW US" />
              <FlowbiteFooter.LinkGroup col>
                <FlowbiteFooter.Link
                  href="https://uuapp.plus4u.net/uu-managementkit-maing02/38744216cb324edca986789798259ba9/document?oid=670684d3590f3b66b6cb5aff&pageOid=670684da055e07f54ab73f5d"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  PM Team 003
                </FlowbiteFooter.Link>
              </FlowbiteFooter.LinkGroup>
            </div>
          </div>
        </div>
        <FlowbiteFooter.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <FlowbiteFooter.Copyright
            by="TaskMan App. All rights reserved."
            year={new Date().getFullYear()}
          />
        </div>
      </div>
    </FlowbiteFooter>
  );
}
