import React, { useContext, useEffect } from "react";
import Usercontext from "../context/Usercontext";
import { useNavigate } from "react-router-dom";
import "./profile.css";
const Profile = () => {
  const navigate = useNavigate();

  const context = useContext(Usercontext);
  const { user, getuser } = context;
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/");
    }
    getuser();
  });

  const logout = () => {
    navigate("/");
    localStorage.removeItem("token");
  };
  return (
    <>
      <div id="probox">
        <div className="mb-3">
          <span>
            <b>Email:</b> {user.email}{" "}
          </span>
        </div>
        <div className="mb-3">
          <span>
            <b>First Name:</b> {user.firstname}
          </span>
        </div>
        <div className="mb-3">
          <span>
            <b>Last Name:</b> {user.lastname}
          </span>
        </div>
        <div className="mb-3">
          <span>
            <b>Address:</b> {user.address}
          </span>
        </div>
        <div className="mb-3">
          <span>
            <b>Phone:</b> {user.phone}
          </span>
        </div>
        <button type="button" className="btn btn-primary" onClick={logout}>
          Logout
        </button>
      </div>
    </>
  );
};

export default Profile;
