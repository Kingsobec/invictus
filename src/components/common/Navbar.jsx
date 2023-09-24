import React from "react";
import { logo } from "../../assets";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase-config";
import { useNavigate } from "react-router-dom";

const Navbar = ({ userData, isAuth, cbtMode, setIsAuth }) => {
  const nickname = userData.displayName;
  const displayPhoto = userData.photoURL;
  const navigate = useNavigate();

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      navigate("/login");
      setIsAuth(false)
    });
  };
  // signUserOut()
  return (
    <>
      {isAuth && (
        <div className="flex justify-between items-center px-4 py-2 bg-white border-b-2 border-green-900">
          <div className=" flex gap-2 items-center">
            <img
              src={displayPhoto}
              alt=""
              className="h-[40px] w-[40px] rounded-full"
            />
            <p className=" md:text-[1.2rem] font-bold text-green-700 italic">
              {nickname}
            </p>
          </div>
          <img src={logo} alt="Rx Logo" className="h-[40px]" />
          <div className="">
            <button
              className="text-red-600 text-[1.2rem] font-semibold"
              onClick={signUserOut}
            >
              logout
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
