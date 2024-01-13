import React, { useState, useEffect, useContext } from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";
import UserContext from "../../contexts/user";

export function Login(props) {
  const { getUsers, users } = useContext(UserContext);

  const [loginDetails, setLoginDetails] = useState({ name: "", password: "" });
  const [loginSuccess, setLoginSuccess] = useState(true);

  const navigate = useNavigate();


  useEffect(() => {
    getUsers();
  }, []);

  const handleSubmit = (event) => {
    const login = true
    event.preventDefault();
    console.log(loginSuccess)

    setLoginSuccess(true)
    console.log(loginSuccess)

    users.forEach((element) => {
      if (
        element.Name == loginDetails.name &&
        element.Password == loginDetails.password
      ) {
        props.closeModal();
        navigate("/");
      } else {
        setLoginSuccess(false);
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

  const removeWarningButton = () => {
    console.log("sadsad")
    setLoginSuccess(true)
  }

  const html = () => {
    return (
      <div class="alert">
        <span
          className="closebtn"
          onClick={removeWarningButton}
        >
          &times;
        </span>
        <strong>Login Failed!</strong>
      </div>
    );
  };

  return (
    <div>
      <div className="modal">
        <div className="modal-content">
          <header>
            <h1>Login</h1>
          </header>
          <body>
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
            <button onClick={props.closeModal}>Hide</button>
            {!loginSuccess && html()}
          </body>
          <footer></footer>
        </div>
      </div>
    </div>
  );
}
