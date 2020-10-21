import React, {useState, useEffect} from "react";
import {data} from "../data";
import {Link} from "react-router-dom";

const People = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    setUsers(data);
  };

  useEffect(() => {
    getUsers();
  }, []);
  return (
    <>
      <h1 className="text-center pb-6 m-1">Github users</h1>
      {/* <div className="inline-grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-x-4 w-full"> */}
      <div className="flex flex-wrap w-full justify-center">
        {users.map(user => {
          const {id, name} = user;
          return (
            <div
              key={id}
              className="flex justify-between border m-2 border-gray-400 bg-gray-300 rounded p-4 md:w-2/5 w-full sm:w-full lg:w-1/4"
            >
              <div className=" text-gray-700 font-semibold">{id}</div>
              <div className=" text-gray-700 font-semibold">{name}</div>
              <div className="text-white text-xs bg-blue-500 rounded px-2 py-1 font-semibold">
                <Link to={`/person/${id}`}>Learn More</Link>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default People;
