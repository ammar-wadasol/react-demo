import React from "react";
import Sidebar from "./Sidebar";
import Chat from "./Chat";
function App() {
  // const [data, setData] = useState({name: "hashir"});
  return (
    <div className="flex bg-gray-400 p-4 w-screen h-screen ">
      <div className="flex bg-gray-200 w-screen shadow-xl">
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
}

export default App;

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
