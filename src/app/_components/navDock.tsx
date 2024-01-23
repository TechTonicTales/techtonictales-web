import React from "react";
import { Tabs, Tab } from "@nextui-org/tabs";
import { IconHome, IconUser, IconNews } from "@tabler/icons-react";

export default function NavDock() {
  return (
    <div className="fixed bottom-10 z-50 flex w-screen items-center justify-center">
      <Tabs
        classNames={{
          base: "w-1/3 h-full",
          tabList:
            "w-full h-16 bg-gray-300 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20 border border-gray-700",
          tab: "w-full h-full",
        }}
        aria-label="Options"
        variant="solid"
        radius="full"
      >
        <Tab
          key="news"
          title={
            <div className="flex items-center space-x-2">
              <IconNews />
            </div>
          }
        />
        <Tab
          key="news2"
          title={
            <div className="flex items-center space-x-2">
              <IconNews />
            </div>
          }
        />
        <Tab
          key="home"
          title={
            <div className="flex items-center space-x-2">
              <IconHome />
            </div>
          }
        />
        <Tab
          key="user"
          title={
            <div className="flex items-center space-x-2">
              <IconUser />
            </div>
          }
        />
        <Tab
          key="user2"
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
