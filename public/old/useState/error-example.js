import React, {useState} from "react";

function ErrorExample() {
  const handleClick = () => {
    if (text === "random title") {
      setText("hello world");
    } else {
      setText("random title");
    }
  };

  const [text, setText] = useState("random title");
  return (
    <>
      <h2>{text}</h2>
      <button type="button" className="btn" onClick={handleClick}>
        submit
      </button>
    </>
  );
}

export default React.memo(ErrorExample);
