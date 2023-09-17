import { useEffect, useState } from "react";
import React from "react";
import Login from "./components/auth/Login";
import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/common/Navbar";

function App() {
  const [isAuth, setIsAuth] = useState(false);
  return (
    <div className="">
      {isAuth && <Navbar setIsAuth={setIsAuth} />}
      <div className="">
        <Login setIsAuth={setIsAuth} />
      </div>
    </div>
  );
}

export default App;
