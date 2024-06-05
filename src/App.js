import React from "react";
import "./App.css";
import Greeting from "./Component/Greeting";
import UserList from "./Component/UserList";

function App() {
  return (
    <div className="App">
      <Greeting />
      <UserList />
    </div>
  );
}

export default App;
