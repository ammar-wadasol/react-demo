import React, {useState, useEffect} from "react";
import {data} from "../data";
import {Link, useParams} from "react-router-dom";

const Person = () => {
  let {id} = useParams();

  useEffect(() => {
    const newPerson = data.find(person => person.id === +id);
    setName(newPerson.name);
  }, [id]);
  const [name, setName] = useState("default name");
  return (
    <div className="container flex-col">
      <h3>{name}</h3>
      <div className="text-white mx-auto text-xs w-32 bg-gray-700 hover:bg-gray-900 rounded px-2 py-1 font-semibold">
        <Link to={`/people`}>Back To People</Link>
      </div>
    </div>
  );
};

export default Person;
