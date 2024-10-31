import React from "react";
import { Sidebar } from "flowbite-react";
import { UserIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function DashboardSidebar() {
  const location = useLocation();
  const [tab, setTab] = useState("");

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get("tab");
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [location.search]);

  return (
    <Sidebar className="w-full md:w-56">
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item
            as={Link}
            to="/dashboard?tab=profile"
            active={tab === "profile"}
            icon={UserIcon}
            label={"User"}
            labelColor="dark"
          >
            Profile
          </Sidebar.Item>
          <Sidebar.Item icon={ArrowRightIcon} className="cursor-pointer">
            Tasks
          </Sidebar.Item>
          <Sidebar.Item icon={ArrowRightIcon} className="cursor-pointer">
            Users
          </Sidebar.Item>
          <Sidebar.Item icon={ArrowRightIcon} className="cursor-pointer">
            Comments
          </Sidebar.Item>
          <Sidebar.Item icon={ArrowRightIcon} className="cursor-pointer">
            Logout
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}
