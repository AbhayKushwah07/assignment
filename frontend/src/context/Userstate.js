import React from "react";
import Usercontext from "./Usercontext";
import { useState } from "react";

const Userstate = (props) => {
  const host = "http://localhost:5000";
  const Userin = [];

  const [user, setuser] = useState(Userin);

  const getuser = async () => {
    const response = await fetch(`${host}/user/getuser`, {
      method: "GET",

      headers: {
        "Content-Type": "application/json",

        "auth-token": localStorage.getItem("token"),
      },
    });
    const json = await response.json();

    setuser(json);
  };

  const Adduser = async (user) => {
    const response = await fetch(`${host}/user/createuser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const json = await response.json();
    if (json.success) {
      localStorage.setItem("token", json.authtoken);
    } else {
      alert("This email already exist");
    }
  };

  return (
    <Usercontext.Provider value={{ user, setuser, getuser, Adduser }}>
      {props.children}
    </Usercontext.Provider>
  );
};

export default Userstate;
