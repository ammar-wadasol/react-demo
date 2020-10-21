import React, {useState} from "react";

const MultipleInputs = () => {
  //   const [firstName, setFirstName] = useState("");
  //   const [email, setEmail] = useState("");
  //   const [age, setAge] = useState("");
  const [users, setUsers] = useState([]);
  const [person, setPerson] = useState({firstName: "", email: "", age: ""});

  //   const handleSubmit = e => {
  //     e.preventDefault();
  //     if (firstName && email) {
  //       const user = {
  //         id: new Date().getTime().toString(),
  //         firstName,
  //         email,
  //       };
  //       setUsers([...users, user]);
  //       setFirstName("");
  //       setEmail("");
  //     }
  //     document.getElementById("firstName").focus();
  //   };

  const handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    setPerson({...person, [name]: value});
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (person.firstName && person.email && person.age) {
      const newPerson = {...person, id: new Date().getTime().toString()};
      setUsers([...users, newPerson]);
      setPerson({firstName: "", email: "", age: ""});
    }
    document.getElementById("firstName").focus();
  };

  return (
    <>
      <article>
        <form className="form">
          <div className="form-control">
            <label htmlFor="firstName">Name : </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={person.firstName}
              onChange={handleChange}
            />
          </div>
          <div className="form-control">
            <label htmlFor="email">Email : </label>
            <input
              type="text"
              id="email"
              name="email"
              value={person.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-control">
            <label htmlFor="age">Age : </label>
            <input
              type="text"
              id="age"
              name="age"
              value={person.age}
              onChange={handleChange}
            />
          </div>
          <button type="submit" onClick={handleSubmit}>
            add person
          </button>
        </form>
      </article>
      <article>
        {users.map(user => {
          const {id, firstName, email, age} = user;
          return (
            <div key={id} className="item">
              <p>{firstName}</p>
              <p>{email}</p>
              <p>{age}</p>
            </div>
          );
        })}
      </article>
    </>
  );
};

export default MultipleInputs;
