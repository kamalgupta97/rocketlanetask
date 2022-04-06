import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { PusherProvider } from "@harelpls/use-pusher";
import { Provider } from "react-redux";
import { store } from "./Redux/store";
const config = {
  // required config props
  clientKey: process.env.REACT_APP_CLIENT_KEY, // Added client in a env file to secure this from outsiders
  cluster: "ap2",

  // optional if you'd like to trigger events. BYO endpoint.
  // see "Trigger Server" below for more info
  triggerEndpoint: "/pusher/trigger",

  // required for private/presence channels
  // also sends auth headers to trigger endpoint
  authEndpoint: "/pusher/auth",
  auth: {
    headers: { Authorization: "Bearer token" },
  },
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
