import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = ({ isAuth, userData }) => {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      if (isAuth === false && !userData) {
        navigate("/login");
      }
    }, 1000);
    return;
  }, []);
  return <div>Dashboard</div>;
};

export default Dashboard;
