import React, {useState, useEffect} from "react";
const url = "https://api.github.com/users";

const ConditionalRendering = () => {
  const [loading, setLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState("default user");

  useEffect(() => {
    fetch(url)
      .then(resp => {
        if (resp.status >= 200 && resp.status <= 299) {
          return resp.json();
        } else {
          setLoading(false);
          setIsError(true);
        }
      })
      .then(user => {
        const {login} = user[0];
        setUser(login);
        setLoading(false);
      })
      .catch(error => console.log(error));
  }, []);

  if (loading) {
    return (
      <div className="p-4">
        <h3>Loading ...</h3>
      </div>
    );
  }
  if (isError) {
    return (
      <div className="p-4 text-red-700">
        <h1>Error ...</h1>
      </div>
    );
  }
  return <div className="p-4 font-semibold text-xl text-blue-700">{user}</div>;
};

export default ConditionalRendering;
