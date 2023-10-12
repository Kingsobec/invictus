import { useEffect, useState } from "react";
import React from "react";
import Login from "./components/auth/Login";
import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import Dashboard from "./components/dashboard/Dashboard";
import ExamList from "./components/dashboard/ExamList";
import Cbt from "./components/cbt/Cbt";
import Footer from "./components/common/Footer";
function App() {
  const [userData, setUserData] = useState(
    JSON.parse(localStorage.getItem("userData"))
  );
  const [isAuth, setIsAuth] = useState(false);
  const [cbtMode, setCbtMode] = useState(false);
  const [time, setTime] = useState(0);
  const [totalQuestion, setTotalQuestion] = useState('');
  const [questions, setQuestions] = useState([{}]);
  const [whichCourse, setWhichCourse] = useState("");
  const [isAdmin, setIsAdmin] = useState("");
  useEffect(() => {
    if (!userData) {
      return
    }
    setIsAdmin(userData.adminMode)
  }, [userData])

  useEffect(() => {
    const storedIsAuth = localStorage.getItem("isAuth");
    setIsAuth(storedIsAuth === "true");
  }, []);
  return (
    <div className="max-w-[1700px] m-auto">
      {isAuth && !cbtMode && (
        <Navbar
          setIsAuth={setIsAuth}
          userData={userData}
          isAuth={isAuth}
          cbtMode={cbtMode}
        />
      )}
      <div className="min-h-[90vh]">
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
                questions={questions}
                setQuestions={setQuestions}
                whichCourse={whichCourse}
                setWhichCourse={setWhichCourse}
                isAdmin={isAdmin}
                setIsAdmin={setIsAdmin}
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
                questions={questions}
                setQuestions={setQuestions}
                whichCourse={whichCourse}
                userData={userData}
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

      {isAuth && !cbtMode && (
        <Footer
          setIsAuth={setIsAuth}
          userData={userData}
          isAuth={isAuth}
          cbtMode={cbtMode}
        />
      )}
    </div>
  );
}

export default App;
