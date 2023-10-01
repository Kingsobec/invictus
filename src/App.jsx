import { useEffect, useState } from "react";
import React from "react";
import Login from "./components/auth/Login";
import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import Dashboard from "./components/dashboard/Dashboard";
import ExamList from "./components/dashboard/ExamList";
import Cbt from "./components/cbt/Cbt";
function App() {
  const [userData, setUserData] = useState(
    JSON.parse(localStorage.getItem("userData"))
  );
  const [isAuth, setIsAuth] = useState(false);
  const [cbtMode, setCbtMode] = useState(false);
  const [time, setTime] = useState(0);
  const [totalQuestion, setTotalQuestion] = useState(0);

  useEffect(() => {
    const storedIsAuth = localStorage.getItem("isAuth");
    // const storedUserData = localStorage.getItem("userData");
    setIsAuth(storedIsAuth === "true");
    // setUserData(JSON.parse(storedUserData));
  }, []);
  return (
    <div className="">
      {isAuth && !cbtMode && (
        <Navbar
          setIsAuth={setIsAuth}
          userData={userData}
          isAuth={isAuth}
          cbtMode={cbtMode}
        />
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
                totalQuestion={totalQuestion}
                time={time}
                setTime={setTime}
                setTotalQuestion={setTotalQuestion}
              />
            }
          />
          <Route path="/quiz" element={<ExamList />} />
          <Route
            path="/cbt-mode"
            element={
              <Cbt
                setCbtMode={setCbtMode}
                totalQuestion={totalQuestion}
                time={time}
                setTime={setTime}
                isAuth={isAuth}
              />
            }
          />
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
