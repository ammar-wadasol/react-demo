import React, {useState, useEffect} from "react";

const ShortCircuit = () => {
  const [show, setShow] = useState(false);
  const [error, setError] = useState(false);

  //   const handleError = () => {
  //     const isError = !error;
  //     setError(isError);
  //   };

  return (
    <div className="p-4">
      <button className="btn" onClick={() => setShow(!show)}>
        show/hide
      </button>
      {show && <Item />}
    </div>
  );
};

const Item = () => {
  const [size, setSize] = useState(window.innerHeight);

  const checkSize = () => {
    setSize(window.innerHeight);
  };
  useEffect(() => {
    window.addEventListener("resize", checkSize);
    return () => {
      window.removeEventListener("resize", checkSize);
    };
  }, []);

  return (
    <div className="mt-8">
      <h2>window</h2>
      <h2> size : {size} </h2>
    </div>
  );
};

export default ShortCircuit;
