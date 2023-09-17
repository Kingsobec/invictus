import { useEffect, useState } from "react";
import React from "react";
import Login from "./components/Login";
import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return <div className="">
    <Navbar />
    <div className="">

    <Login/>
    </div>
  </div>;
}

export default App;
