import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = ({isAuth, userData}) => {
  const navigate = useNavigate()
  useEffect(() => {
    !isAuth && navigate('/login')
    // console.log(isAuth);
    // console.log(userData.displayName);
    return
  },[])
  return <div>Dashboard</div>;
};

export default Dashboard;
