import { Footer } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

export default function FooterModule() {
  return (
    <Footer
      container
      className="border border-t-8 border-teal-600 dark:bg-gray-800 text-white"
    >
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid w-full justify-between sm:flex md:grid-cols-1">
          <div className="mt-4">
            <Link
              to="/"
              className="self-center whitespace-nowrap text-lg sm:text-xl font-medium dark:text-white"
            >
              <span className="px-2 py-1 bg-gradient-to-tr from-indigo-800 via-purple-400 to-pink-400 rounded-md text-white">
                TaskMan
              </span>
              App
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-9 mt-3 sm:grid-cols-3 sm:gap-7">
            <div>
              <Footer.Title title="PROVIDED BY" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://unicornuniversity.net/en/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Unicorn University
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="FOLLOW US" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://uuapp.plus4u.net/uu-managementkit-maing02/38744216cb324edca986789798259ba9/document?oid=670684d3590f3b66b6cb5aff&pageOid=670684da055e07f54ab73f5d"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  PM Team 003
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright
            by="TaskMan App. All rights reserved."
            year={new Date().getFullYear()}
          />
        </div>
      </div>
    </Footer>
  );
}
