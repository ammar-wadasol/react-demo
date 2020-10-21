import React, {useRef, useEffect} from "react";

const UseRef = () => {
  const refContainer = useRef(null);
  const divRef = useRef();

  const handleSubmit = e => {
    e.preventDefault();
    console.log(refContainer.current.value);
  };

  useEffect(() => {
    refContainer.current.focus();
  });
  return (
    <>
      <form className="p-10 shadow-lg">
        <div>
          <input
            type="text"
            id="abc"
            className="mx-5 py-1 px-4 shadow-sm"
            ref={refContainer}
          />
          <button
            type="button"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded"
            onClick={handleSubmit}
          >
            submit
          </button>
        </div>
        <div className="py-10">
          <h5 ref={divRef}>heading ref</h5>
        </div>
      </form>
    </>
  );
};

export default UseRef;
