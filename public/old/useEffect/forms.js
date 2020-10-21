import React, {useState} from "react";

const Forms = () => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [users, setUsers] = useState([]);

  const handleSubmit = e => {
    e.preventDefault();
    if (firstName && email) {
      const user = {
        id: new Date().getTime().toString(),
        firstName,
        email,
      };
      setUsers([...users, user]);
      setFirstName("");
      setEmail("");
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
              value={firstName}
              onChange={e => setFirstName(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label htmlFor="email">Email : </label>
            <input
              type="text"
              id="email"
              name="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <button type="submit" onClick={handleSubmit}>
            add person
          </button>
        </form>
      </article>
      <article>
        {users.map(user => {
          const {id, firstName, email} = user;
          return (
            <div key={id} className="item">
              <p>{firstName}</p>
              <p>{email}</p>
            </div>
          );
        })}
      </article>
    </>
  );
};

export default Forms;
