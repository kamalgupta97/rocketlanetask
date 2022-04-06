import "./styles/App.css";
import React from "react";
import { useChannel } from "@harelpls/use-pusher";

import Task from "./Components/Task";
import { Loader } from "./styled-components/styled";

function App() {
  const channel = useChannel("kamal-channel");

  return (
    <div className="App">
      <Task channel={channel} />
    </div>
  );
}

export default App;
