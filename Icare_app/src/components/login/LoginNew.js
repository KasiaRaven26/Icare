import React, { useState, useEffect, useContext } from "react";
import { json, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import { addUser, removeUser } from "../../store";

import axios from "axios";
import "./login.css";

export function Login(props) {
  const [users, setUsers] = useState([]);
  const [loginDetails, setLoginDetails] = useState({ name: "", password: "" });
  const [loginSuccess, setLoginSuccess] = useState(true);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const getUsers = async () => {
    const response = await axios.get("http://localhost:3001/users");
    const response2 = await axios.post(
      "http://localhost:3001/login",
      JSON.stringify({ name: "Adam Kirwan", password: "pword" }),
      {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      }
    );
    const userArray = response.data;
    console.log(response2.data);
    setUsers(userArray);
    dispatch(addUser(userArray));
  };

  useEffect(() => {
    getUsers();
  }, []);

  const currentUser = useSelector((state) => {
    console.log(state);
    return state.users;
  });

  // const handleAddUser = (user) => {
  //   // const action = addUser(user);
  //   // console.log(action);
  //   // console.log(addUser(user));

  //
  // };

  const handleSubmit = (event) => {
    // const login = true
    event.preventDefault();
    console.log(currentUser);
    setLoginSuccess(true);

    currentUser.forEach((element) => {
      if (
        element.Name == loginDetails.name &&
        element.Password == loginDetails.password
      ) {
        navigate("/client");
      }
    });
  };

  const handleChange = (event) => {
    if (event.target.name == "password") {
      let loginCreds = { ...loginDetails, password: event.target.value };
      setLoginDetails(loginCreds);
    }
    if (event.target.name == "full-name") {
      let loginCreds = { ...loginDetails, name: event.target.value };
      setLoginDetails(loginCreds);
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <form onSubmit={handleSubmit}>
          <div>
            <label>Full Name</label>
            <input
              value={loginDetails.name}
              id="full-name"
              name="full-name"
              type="text"
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Password</label>
            <input
              value={loginDetails.password}
              id="password"
              name="password"
              type="text"
              onChange={handleChange}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
