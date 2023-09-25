import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = ({ isAuth, userData }) => {
  console.log(userData);
  const nickname = userData.displayName;
  const displayPhoto = userData.photoURL;
  const fullName = userData.fullName;
  const [courses, setCourses] = useState([{}]);
  const navigate = useNavigate();
  useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    }
    return;
  }, [isAuth]);
  return (
    <div className=" p-4">
      <div className="">
        <img
          src={displayPhoto}
          alt=""
          className=" w-[200px] h-[200px] object-cover object-center rounded-full  border-green-900 border-2"
        />
        <p className="">{ nickname}</p>
      </div>
    </div>
  );
};

export default Dashboard;
