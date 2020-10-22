import React, {useEffect, useState} from "react";
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import Pusher from "pusher-js";
import axios from "./axios";

function App() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    axios.get("/messages/sync").then(resp => {
      setMessages(resp.data);
    });
  }, []);

  useEffect(() => {
    Pusher.logToConsole = true;

    const pusher = new Pusher("557b03d9f98aaca5bf02", {
      cluster: "ap2",
    });

    var channel = pusher.subscribe("messages");
    channel.bind("inserted", newMessage => {
      setMessages([...messages, newMessage]);
    });

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, [messages]);

  console.log(messages);

  return (
    <div className="flex bg-gray-400 p-4 w-screen h-screen ">
      <div className="flex bg-gray-200 w-screen shadow-xl">
        <Sidebar />
        <Chat messages={messages} />
      </div>
    </div>
  );
}

export default App;

// const [data, setData] = useState({name: "hashir"});

/* <input
type="text"
onChange={({target: {value}}) => {
  setData({name: value});
}}
/>
<button
onClick={() => {
  setData({name: "Hello"});
  }}
  >
  Set Name
  </button>


// const Test = ({data: {name}}) => {
//   return <h1>{name}</h1>;
// };
<Test data={data} /> */
