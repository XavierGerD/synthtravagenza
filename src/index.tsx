import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import { appStore } from "./reducer/store";

ReactDOM.render(
  <Provider store={appStore}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
