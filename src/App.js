import React from "react";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
// import Stack from '@mui/material/Stack';

function App() {
  return (
    <div className="app">
      {/* <h1>lets build a Linkedin CLONE</h1> */}
      {/* Header */}
      <Header />
      {/* App Body */}
      <div className="app_body">
        <Sidebar />

        {/* Feed */}
        <Feed />

        {/* Widgets */}
      </div>
    </div>
  );
}

export default App;
