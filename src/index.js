import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { PusherProvider } from "@harelpls/use-pusher";
import { Provider } from "react-redux";
import { store } from "./Redux/store";
const config = {
  clientKey: process.env.REACT_APP_CLIENT_KEY,
  cluster: "ap2",
};
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PusherProvider {...config}>
        <App />
      </PusherProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
