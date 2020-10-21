import React from "react";
import {SearchOutlined, MoreVert, Chat, DonutLarge} from "@material-ui/icons";
import {Avatar, IconButton} from "@material-ui/core";
import SidebarChat from "./SidbarChat";

const Sidebar = () => {
  return (
    <div className="w-1/3 flex-col overflow-hidden">
      <div className=" flex justify-between">
        <div className="">
          <IconButton>
            <Avatar src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" />
          </IconButton>
        </div>
        <div className=" py-2">
          <IconButton>
            <DonutLarge />
          </IconButton>
          <IconButton>
            <Chat />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className="h-full">
        <div className="bg-gray-100 py-2 h-full ">
          <div className="flex justify-between align-items-center bg-white px-4 py-1 text-gray-600 rounded-full mx-1 shadow-sm">
            <SearchOutlined />
            <input
              type="text"
              placeholder="Search or start new chat"
              className="text-xs w-full mx-4 focus:outline-none"
            />
          </div>
          <div className=" bg-white m-2 h-full  overflow-auto shadow-sm">
            <h4 className="text-center py-2 font-bold">Add new Chat</h4>
            <SidebarChat />
            <SidebarChat />
            <SidebarChat />
            <SidebarChat />
            <SidebarChat />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
