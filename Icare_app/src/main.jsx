import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
// import { Provider } from "./contexts/user.jsx";
// import { Store } from "./store/index.js";
import { Provider } from "react-redux";
import { store } from "./store/newIndex.js";
// import UserContext from "../src/contexts/"

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  // <Provider>
  //   <App />
  // </Provider>
  <Provider store={store}>
  <App />
</Provider>
);
