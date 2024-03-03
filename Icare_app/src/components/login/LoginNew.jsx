import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";
import "./login.css";

export function LoginNew() {
  const [users, setUsers] = useState([]);
  const [loginDetails, setLoginDetails] = useState({ name: "", password: "" });

  const navigate = useNavigate();

  const getUsers = async () => {
    const response = await axios.get("http://localhost:3001/users");
    const userArray = response.data;
    setUsers(userArray);
  };

  useEffect(() => {
    getUsers();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    users.forEach((element) => {
      if (
        element.Name == loginDetails.name &&
        element.Password == loginDetails.password
      ) {
        navigate("/client");
      }
    });
  };

  const handleClose = () => {
    navigate("/")
  }

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
    <div>
      <div className="modal">
        <div className="modal-content">
          <h1>Login</h1>

          <form className="login-form" onSubmit={handleSubmit}>
            <div>
              <label className="input-label">Full Name</label>
              <input
                className="input-name"
                value={loginDetails.name}
                id="full-name"
                name="full-name"
                type="text"
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="input-label">Password</label>
              <input
                className="input-password"
                value={loginDetails.password}
                id="password"
                name="password"
                type="text"
                onChange={handleChange}
              />
            </div>
            <button className="submit-button" type="submit">
              Submit
            </button>
          </form>
          <button className="close-button" onClick={handleClose}>
            close
          </button>
        </div>
      </div>
    </div>
  );
}
