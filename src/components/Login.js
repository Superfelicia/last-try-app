import { Link } from "react-router-dom";
import { useState } from "react";

const Login = ({ handleSubmit }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

  handleSubmit = (e) => {
    e.preventDefault();
    var x = localStorage.getItem("accounts");
    var userArray = JSON.parse(x);

    for (let i = 0; i < userArray.length; i++) {
      if (email === userArray[i].email && password === userArray[i].password) {
        console.log(userArray);
        console.log("success");
      } else if (email === userArray[i].email && password !== userArray[i]) {
        console.log("lol");
        setEmail("");
        setPassword("");
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="field">
        <label>Email:</label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="field">
        <label>Password:</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <Link to="/">
        <button className="btn">Log in</button>
      </Link>
    </form>
  );
};

export default Login;
