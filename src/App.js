import "./styles/App.css";
import React from "react";
import { PusherProvider } from "@harelpls/use-pusher";
import Task from "./Components/Task";
const config = {
  clientKey: process.env.REACT_APP_CLIENT_KEY,
  cluster: "ap2",
};
function App() {
  return (
    <div className="App">
      <PusherProvider {...config}>
        <Task />
      </PusherProvider>
    </div>
  );
}

export default App;
