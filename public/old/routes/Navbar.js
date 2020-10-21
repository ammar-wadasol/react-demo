import React from "react";
import {Link} from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul className="text-center text-blue-700 font-semibold bg-gray-200 justify-center flex">
        <li className=" px-4 py-6">
          <Link to="/">Home</Link>
        </li>
        <li className=" px-4 py-6">
          <Link to="/about">About</Link>
        </li>
        <li className=" px-4 py-6">
          <Link to="/people">People</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
