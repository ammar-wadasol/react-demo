import React, {useState, useEffect} from "react";

const url = "https://api.github.com/users";

const UseEffectBasics = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const resp = await fetch(url);
    const users = await resp.json();
    setUsers(users);
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
          const {id, login, avatar_url, html_url} = user;
          return (
            <div
              key={id}
              className="flex border m-2 border-gray-400 bg-gray-300 rounded  p-4 md:w-2/5 w-full sm:w-full lg:w-1/4"
            >
              <img
                src={avatar_url}
                alt={user.login}
                className="rounded-full h-12 w-12 flex items-center justify-center"
              />
              <div className="flex-col ml-4 justify-items-center ">
                <div className="text-left text-gray-700 font-semibold">
                  {login}
                </div>
                <div className="text-left text-blue-400">
                  <a href={html_url}>Profile</a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default UseEffectBasics;
