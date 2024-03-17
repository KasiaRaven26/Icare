import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { addLoggedInUser } from "../../store/newIndex";
// import { useThunk } from '../../../src/hooks/useThunk';
import Button from "../../ButtonComponent/Button";

import axios from "axios";
import "./login.css";
import { useDispatch } from "react-redux";

export function LoginNew() {
  const [users, setUsers] = useState([]);
  const [loginDetails, setLoginDetails] = useState({ name: "", password: "" });
  // const [doAddUser, isAddingUser, addingUserError] = useThunk(addUser)


  const navigate = useNavigate();
  const dispatch = useDispatch();

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
        /// Need to push the changes to redux store here
        dispatch(addLoggedInUser(loginDetails))
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
            
              
            
           <div className="button-container"> <Button type="submit">submit</Button>
            <Button type="close">close</Button></div>
          </form>
          
        </div>
      </div>
    </div>
  );
}
