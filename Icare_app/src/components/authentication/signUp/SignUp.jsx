import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authenticated, notAuthenticated } from "../../../store/newIndex";
import { fetchContent, registerUser } from "../../../store/slices/auth";

export function SignUp() {
  const [signUpDetails, setSignUpDetails] = useState({
    name: "",
    password: "",
  });
  const [signUpSuccess, setSignUpSuccess] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContent());
    
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSignUpSuccess(true);
    console.log(signUpDetails);
    console.log(signUpSuccess);

    // dispatch(authenticated({ "logged-in": true }));
    dispatch(registerUser(signUpDetails))
  };

  const users = useSelector((state) => {
    console.log(state)
  })

  const handleChange = (event) => {
    if (event.target.name == "password") {
      let signUpCreds = { ...signUpDetails, password: event.target.value };
      setSignUpDetails(signUpCreds);
    }
    if (event.target.name == "full-name") {
      let signUpCreds = { ...signUpDetails, name: event.target.value };
      setSignUpDetails(signUpCreds);
    }
  };


  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Full Name</label>
        <input
          value={signUpDetails.name}
          id="full-name"
          name="full-name"
          type="text"
          onChange={handleChange}
          autoComplete="none"
        />
      </div>
      <div>
        <label>Password</label>
        <input
          value={signUpDetails.password}
          id="password"
          name="password"
          type="text"
          onChange={handleChange}
          autoComplete="none"
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
