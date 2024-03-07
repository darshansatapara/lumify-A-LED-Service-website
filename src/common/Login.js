import React, { useState } from "react";
import "../css/RegistrationLogin.css";
import { useNavigate } from "react-router-dom";
import client from "../axios/axiosFile";


const Login = () => {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await client.get("/login", {
        email: values.email,
        password: values.password,
      });
      // console.log("response")
      console.log("Login successful:", response.data);

      // Optionally, you can redirect the user to another page
      navigate("/");
    } catch (error) {
      console.error("Login failed:", error.response.data.error);
    }
  };
  const handleInput = (e) => {
    setValues((ele) => ({ ...ele, [e.target.name]: [e.target.value] }));
  };

  return (
    <div className="mainContainer1">
      <div className="mainContainer">
        <div className="login-container">
          <h1 className="heading-register">Login</h1>
          <form onSubmit={handleSubmit} method="GET">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={handleInput}
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={handleInput}
            />
            <button type="submit">Login</button>
          </form>
          <p className="not-account">
            Don't have an account?
            <span
              onClick={() => navigate("/register")}
              className="register-link "
            >
              Register here
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
