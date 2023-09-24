import { useEffect, useState } from "react";
import React from "react";
import Login from "./components/auth/Login";
import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import Dashboard from "./components/dashboard/Dashboard";
import ExamList from "./components/dashboard/ExamList";
import Cbt from "./components/cbt/Cbt";
function App() {
  const [userData, setUserData] = useState(null);
  const [isAuth, setIsAuth] = useState(false);
  const [cbtMode, setCbtMode] = useState(false);
  useEffect(() => {
    const storedIsAuth = localStorage.getItem("isAuth");
    const storedUserData = localStorage.getItem("userData");
    // console.log(JSON.parse(storedUserData));
    setIsAuth(storedIsAuth === "true");
    setUserData(JSON.parse(storedUserData));
    // console.log(userData);
  }, [isAuth]);
  return (
    <div className="">
      {isAuth && (
        <Navbar setIsAuth={setIsAuth} userData={userData} isAuth={isAuth} />
      )}
      <div className="">
        <Routes>
          <Route
            path="/"
            element={
              <Dashboard
                isAuth={isAuth}
                setIsAuth={setIsAuth}
                userData={userData}
              />
            }
          />
          <Route path="/quiz" element={<ExamList />} />
          <Route path="/cbt-mode" element={<Cbt />} />

          <Route
            path="/login"
            element={
              <Login
                setIsAuth={setIsAuth}
                setUserData={setUserData}
                isAuth={isAuth}
              />
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
