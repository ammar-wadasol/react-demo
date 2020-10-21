import React from "react";
import {Link} from "react-router-dom";

const Error = () => {
  return (
    <div className="text-center pt-10">
      <h3 className="pb-10">Error Page.</h3>

      <Link to="/" className="bg-blue-500 rounded text-white px-4 py-2">
        Back Home
      </Link>
    </div>
  );
};

export default Error;
