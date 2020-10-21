import React from "react";
import {Avatar} from "@material-ui/core";

const SidbarChat = () => {
  return (
    <div className="flex h-16 hover:bg-gray-200 py-6 items-center cursor-pointer px-1">
      <div className="flex">
        <Avatar src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" />
      </div>
      <div className="flex-wrap ml-3">
        <p className=" text-xs font-semibold">Chat Name</p>
        <p className="text-xs text-gray-600 leading-none">
          Lorem ipsum dolor sit amet consectetur amet.
        </p>
      </div>
    </div>
  );
};

export default SidbarChat;
