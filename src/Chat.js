import React, {useState} from "react";
import {Avatar, IconButton} from "@material-ui/core";
import {
  SearchOutlined,
  MoreVert,
  AttachFile,
  InsertEmoticon,
  Mic,
} from "@material-ui/icons";
import axios from "./axios";
import ScrollToBottom from "react-scroll-to-bottom";

const Chat = ({messages}) => {
  const [input, setInput] = useState("");

  const sendMessageHandler = async e => {
    e.preventDefault();
    await axios.post("/messages/new", {
      message: input,
      timestamp: new Date().toLocaleString(),
      isRecieved: false,
    });

    setInput("");
  };

  return (
    <div className="w-2/3 ">
      <div className="flex-col h-full relative overflow-hidden">
        <div className="flex justify-between p-2 h-1/12 shadow-sm border-b border-l">
          <div className="flex">
            <Avatar src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" />
            <div className="mx-4">
              <p className="text-sm font-bold">Room Name</p>
              <p className="text-xs">Last seen at..</p>
            </div>
          </div>
          <div>
            <IconButton>
              <SearchOutlined />
            </IconButton>
            <IconButton>
              <AttachFile />
            </IconButton>
            <IconButton>
              <MoreVert />
            </IconButton>
          </div>
        </div>
        <ScrollToBottom className="h-full">
          <div
            className="bg-auto p-4"
            style={{
              backgroundImage:
                "url(https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png)",
            }}
          >
            <div className="mb-24">
              {messages.map(message => {
                return (
                  <div key={message._id}>
                    {message.isRecieved ? (
                      <div className="flex-col pb-4">
                        <div className="bg-white rounded-lg w-4/5 p-2 text-md">
                          {message.message}
                          <span
                            style={{fontSize: "xx-small", marginLeft: "10px"}}
                          >
                            {message.timestamp}
                          </span>
                        </div>
                      </div>
                    ) : (
                      <div className="pb-4 flex items-center flex-row-reverse">
                        <div className=""></div>
                        <div className="bg-green-200 rounded-lg w-4/5 p-2 text-md">
                          {message.message}
                          <span
                            style={{fontSize: "xx-small", marginLeft: "10px"}}
                          >
                            {message.timestamp}
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </ScrollToBottom>
        <div className="absolute bottom-0 text-gray-600 flex justify-around items-center right-0 bg-gray-200 py-2 w-full">
          <div className="w-1/6 px-6">
            <InsertEmoticon />
          </div>
          <form action="" className="w-full inline-block  mr-6">
            <input
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              className="text-xs py-1 rounded-full px-4 w-full focus:outline-none"
              placeholder="Type a message"
            />
            <button
              type="submit"
              onClick={sendMessageHandler}
              className="hidden"
            >
              Send a message
            </button>
          </form>
          <div className="w-1/6">
            <Mic />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
