import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "./contexts/user.jsx";
// import UserContext from "../src/contexts/"

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  <Provider>
    <App />
  </Provider>
);
