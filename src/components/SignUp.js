import { useState } from "react";
import { Link } from "react-router-dom";

let array = [];

const SignUp = ({ handleSubmit }) => {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  handleSubmit = (e) => {
    e.preventDefault();

    if (name === undefined || email === undefined || password === undefined) {
      setError(true);
    } else {
      let user = { name: name, email: email, password: password };
      setSubmitted(true);
      setError(false);
      array.push(user);
      console.log(array);
      localStorage.setItem("accounts", JSON.stringify(array));
      console.log(localStorage);
      setName("");
      setEmail("");
      setPassword("");
    };
  };

  const successMessage = () => {
    return (
      <div
        className="success"
        style={{
          display: submitted ? { name } : "none",
        }}
      >
        <h1>User {name} successfully registrered!</h1>
      </div>
    );
  };

  const errorMessage = () => {
    return (
      <div
        className="error"
        style={{
          display: error ? "" : "none",
        }}
      >
        <h1>Please enter all the fields</h1>
      </div>
    );
  };

  return (
    <div className="form">
      <div className="messages">
        {errorMessage()}
        {successMessage()}
      </div>
      <form onSubmit={handleSubmit}>
        <div className="field">
          <label>Name:</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="field">
          <label className="form-label">Email:</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="field">
          <label className="form-label">Password:</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <Link to="/login">
          <button onClick={handleSubmit} className="btn">Sign up</button>
          {console.log("linked")}
        </Link>
      </form>
    </div>
  );
};

export default SignUp;
