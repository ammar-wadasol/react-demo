import React, {useState} from "react";
import {data} from "../data";

const UseStateArray = () => {
  const [state, setState] = useState(data);

  const deleteHandler = () => {
    if (state.length > 0) {
      setState([]);
    } else {
      setState(data);
    }
  };

  const removeItem = id => {
    setState(oldArray => {
      const newArray = oldArray.filter(item => item.id !== id);
      return newArray;
    });
  };

  return (
    <>
      <h2>Example use state array</h2>
      {state.length > 0
        ? state.map(person => {
            const {id, name} = person;
            return (
              <div key={id} className="item">
                <h4>{name}</h4>
                <button className="btn" onClick={() => removeItem(id)}>
                  remove
                </button>
              </div>
            );
          })
        : ""}
      <button className="btn" onClick={deleteHandler}>
        {state.length > 0 ? "delete" : "undo"}
      </button>
    </>
  );
};

export default UseStateArray;
