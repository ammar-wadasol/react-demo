import React from "react";
import DonutLarge from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVert from "@material-ui/icons/MoreVert";
import {Avatar, IconButton} from "@material-ui/core";

const Sidebar = () => {
  return (
    <div className="w-1/3">
      <div className=" flex justify-between ">
        <div className="">
          <IconButton>
            <Avatar src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" />
          </IconButton>
        </div>
        <div className="border-r-2 py-2">
          <IconButton>
            <DonutLarge />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Sidebar;
