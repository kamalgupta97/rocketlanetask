import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { useChannel } from "@harelpls/use-pusher";
import Test from "./Components/Test";

function App() {
  const channel = useChannel("kamal-channel");

  return (
    <div>
      <Test channel={channel} />
    </div>
  );
}

export default App;
