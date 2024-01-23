"use client";

import { Tabs, Tab } from "@nextui-org/tabs";
import {
  IconHome,
  IconUser,
  IconNews,
  IconSearch,
  IconBookmark,
} from "@tabler/icons-react";

import { usePathname, useRouter } from "next/navigation";

export default function NavDock() {
  const pathname = usePathname();
  const router = useRouter();
  return (
    <div className="fixed bottom-4 z-50 flex w-screen items-center justify-center">
      <Tabs
        classNames={{
          base: "w-11/12 lg:w-1/3 h-full",
          tabList:
            "w-full h-16 bg-gray-300 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20 border border-gray-700",
          tab: "w-full h-full",
        }}
        aria-label="Options"
        variant="solid"
        radius="full"
        selectedKey={pathname}
        onSelectionChange={(key) => {
          if (typeof key === "string") router.push(key);
        }}
      >
        <Tab
          key="/dashboard/blogSearch"
          title={
            <div className="flex items-center space-x-2">
              <IconSearch />
            </div>
          }
        />
        <Tab
          key="/dashboard/exploreFeed"
          title={
            <div className="flex items-center space-x-2">
              <IconNews />
            </div>
          }
        />
        <Tab
          key="/dashboard/homeFeed"
          title={
            <div className="flex items-center space-x-2">
              <IconHome />
            </div>
          }
        />
        <Tab
          key="/dashboard/savedBlogs"
          title={
            <div className="flex items-center space-x-2">
              <IconBookmark />
            </div>
          }
        />
        <Tab
          key="/dashboard/user"
          title={
            <div className="flex items-center space-x-2">
              <IconUser />
            </div>
          }
        />
      </Tabs>
    </div>
  );
}
