import React from "react";
import { logo } from "../../assets";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase-config";
import { useNavigate } from "react-router-dom";

const Navbar = ({userData, isAuth}) => {
  // const nickname = userData.displayName;
  // const displayPhoto = userData.photoURL;
  const navigate = useNavigate()

    const signUserOut = () => {
      signOut(auth).then(() => {
        localStorage.clear();
        navigate('/login')
      });
    };
  return (
    <>
      {/* {isAuth && <div className="flex justify-between items-center px-4 py-2">
        <p className=" text-[1.2rem] font-bold text-green-700 italic">
          {nickname}
        </p>
        <img src={logo} alt="Rx Logo" className="h-[40px]" />
        <div className="">
          <button className="text-red-600" onClick={signUserOut}>logout</button>
          <img
            src={displayPhoto}
            alt=""
            className="h-[40px] w-[40px] rounded-full"
          />
        </div>
      </div>} */}
    </>
  );
};

export default Navbar;
