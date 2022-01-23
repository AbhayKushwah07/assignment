import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";
const Login = () => {
  const navigate = useNavigate();
  const [cred, setcred] = useState({
    email: "",
    password: "",
  });

  const register = () => {
    navigate("/adduser");
  };
  const login = async (e) => {
    e.preventDefault();

    const response = await fetch(`http://localhost:5000/user/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cred),
    });

    const json = await response.json();

    if (json.success) {
      localStorage.setItem("token", json.authtoken);

      navigate("/profile");
    } else {
      alert("invalid credentials");
    }
  };

  const onChange = async (e) => {
    setcred({ ...cred, [e.target.name]: e.target.value });
  };
  return (
    <>
      <div id="logbox">
        <form onSubmit={login}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              onChange={onChange}
              name="email"
              aria-describedby="emailHelp"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              onChange={onChange}
              name="password"
              className="form-control"
              required
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Login
          </button>
          <button
            type="button"
            style={{ marginLeft: "10px" }}
            className="btn btn-success"
            onClick={register}
          >
            Register
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
