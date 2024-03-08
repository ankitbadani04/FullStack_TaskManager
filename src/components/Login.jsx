import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ setLoggedIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    localStorage.setItem("userEmail", email);
    localStorage.setItem("userPassword", password);
    console.log("Login successful. Email:", email, "Password:", password);
    setLoggedIn(true);
    navigate("/");
  };

  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
