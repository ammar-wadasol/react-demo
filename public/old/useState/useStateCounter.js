import React, {useState} from "react";

const UseStateCounter = () => {
  const [value, setValue] = useState(0);

  const buttonHandler = id => {
    if (id === 1) {
      if (value > 0) setValue(value - 1);
      else setValue(0);
    } else if (id === 2) {
      setValue(0);
    } else {
      setValue(value + 1);
    }
  };

  const complexHandler = () => {
    setTimeout(() => {
      setValue(s => setValue(s + 1));
    }, 2000);
  };

  return (
    <>
      <section style={{margin: "4rem 0"}}>
        <h2>regular counter</h2>
        <h1>{value}</h1>
        <button className="btn" onClick={() => buttonHandler(1)}>
          decrease
        </button>
        <button className="btn" onClick={() => buttonHandler(2)}>
          reset
        </button>
        <button className="btn" onClick={() => buttonHandler(3)}>
          increase
        </button>
      </section>
      <section style={{margin: "4rem 0"}}>
        <h2>complex counter</h2>
        <h1>{value}</h1>
        <button className="btn" onClick={complexHandler}>
          increase after 2 seconds
        </button>
      </section>
    </>
  );
};

export default UseStateCounter;
