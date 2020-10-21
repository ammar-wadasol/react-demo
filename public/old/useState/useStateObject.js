import React, {useState} from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "peter",
    age: "24",
    message: "random message",
  });

  const messageHandler = () => {
    if (person.message === "random message") {
      setPerson({...person, message: "message changed"});
    } else {
      setPerson({...person, message: "random message"});
    }
  };

  return (
    <>
      <h1>use state object</h1>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.message}</h3>
      <button className="btn" onClick={messageHandler}>
        {person.message === "random message" ? "change message" : "undo"}
      </button>
    </>
  );
};

export default UseStateObject;
