import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/store";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import { todoApi } from "./redux/features/apiSlice";

ReactDOM.render(
  <Provider store={store}>
    <ApiProvider api={todoApi}>
      <App />
    </ApiProvider>
  </Provider>,
  document.getElementById("root")
);
