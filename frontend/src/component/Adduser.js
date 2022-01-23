import React, { useContext, useState } from "react";
import Usercontext from "../context/Usercontext";
import { useNavigate } from "react-router-dom";
import "./adduser.css";
const Adduser = () => {
  const navigate = useNavigate();
  const context = useContext(Usercontext);
  const { Adduser } = context;
  const [user, setuser] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    address: "",
    password: "",
  });
  const Add = (e) => {
    e.preventDefault();

    Adduser(user);
    setTimeout(() => {
      navigate("/profile");
    }, 500);
  };
  const onChange = async (e) => {
    setuser({ ...user, [e.target.name]: e.target.value });
  };
  return (
    <>
      <div id="regbox">
        <form onSubmit={Add}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email{" "}
            </label>
            <input
              type="email"
              className="form-control"
              name="email"
              onChange={onChange}
              aria-describedby="emailHelp"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              First Name
            </label>
            <input
              type="text"
              className="form-control"
              name="firstname"
              onChange={onChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Last Name
            </label>
            <input
              type="text"
              className="form-control"
              name="lastname"
              onChange={onChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Address
            </label>
            <input
              type="text"
              className="form-control"
              name="address"
              onChange={onChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Phone
            </label>
            <input
              type="text"
              className="form-control"
              name="phone"
              onChange={onChange}
              pattern="[1-9]{1}[0-9]{9}"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              name="password"
              onChange={onChange}
              minLength={5}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            register
          </button>
        </form>
      </div>
    </>
  );
};

export default Adduser;
