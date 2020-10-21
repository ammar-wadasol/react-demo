import React, {useState, useContext} from "react";
import {data} from "../data";

const UserContext = React.createContext();

const PropDrilling = () => {
  const [user, setUser] = useState(data);

  const removeUser = id => {
    setUser(item => {
      return item.filter(item => item.id !== id);
    });
  };

  return (
    <UserContext.Provider value={{removeUser, user}}>
      <h3 className="text-center pt-10 ">Context API</h3>
      <List />
    </UserContext.Provider>
  );
};

const List = () => {
  const {user} = useContext(UserContext);
  return (
    <>
      {user.map(item => {
        const {id} = item;
        return <SinglePerson key={id} {...item} />;
      })}
    </>
  );
};

const SinglePerson = ({id, name}) => {
  const {removeUser} = useContext(UserContext);
  return (
    <div className="item">
      <h4>{id}</h4>
      <h4>{name}</h4>
      <button onClick={() => removeUser(id)}>remove</button>
    </div>
  );
};

export default PropDrilling;
