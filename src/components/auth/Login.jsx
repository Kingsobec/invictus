import { useRef, useState, useTransition } from "react";
import { auth, provider, db, storageRef } from "../../firebase-config";
import { useNavigate } from "react-router-dom";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [passwordConfirm, setPasswordConfirm] = useState("");
  const [register, setRegister] = useState(false);
  const [fullName, setFullName] = useState("");
  const [username, setUserName] = useState("");
  const [regNumber, setRegNumber] = useState("");
  const [profilePics, setProfilePics] = useState(null);
  const [profilePicsURL, setProfilePicsURL] = useState("");

  const fileInputRef = useRef(null);
  const handleImageChange = async () => {
    if (!profilePics) return;
    const filesFolderRef = ref(storageRef, `profileImages/${profilePics.name}`);

    try {
      await uploadBytes(filesFolderRef, profilePics);
      const downloadURL = await getDownloadURL(filesFolderRef);
      setProfilePicsURL(downloadURL);
    } catch (error) {
      alert(error);
    }
  };
  console.log(profilePicsURL);
  const auth = getAuth();

  const createAccount = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        setRegister(true);
        const user = userCredential.user;
        // console.log(user);
        alert("Account created successfully");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
        // ..
      });
  };
  const registerUser = () => {
    console.log(profilePicsURL);
    updateProfile(auth.currentUser, {
      displayName: username,
      regNumber: regNumber,
      fullName: fullName,
      photoURL: profilePicsURL,
    })
      .then(() => {
        alert("registration successful");
        // Profile updated!
        // ...
      })
      .catch((error) => {
        alert(error);
        // An error occurred
        // ...
      });
  };
  const signIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
      });
  };
  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
    });
  };

  return (
    <div className="flex justify-center items-center min-h-[100vh] text-center rxbg">
      {!register ? (
        <div className="bg-[#ffffffee] p-4">
          <p className="text-[2rem] font-semibold text-green-600 mb-8">
            INVICTUS WEB APP
          </p>

          <div className=" flex flex-col">
            <label
              htmlFor="email"
              className=" text-[1.2rem] text-green-900 font-semibold"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              value={email}
              placeholder="email"
              className="p-2 text-[1.2rem] rounded bg-white border border-green-900"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <label
              htmlFor="password"
              className="mt-2 text-[1.2rem] text-green-900 font-semibold"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              className="p-2 text-[1.2rem] rounded border border-green-900 mb-4"
              value={password}
              placeholder="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>

          <div className="flex flex-col justify-center items-center gap-2">
            <button
              className=" py-1 px-2 bg-green-600 rounded-md trans text-white hover:scale-110 font-semibold"
              onClick={signIn}
            >
              LOGIN
            </button>
            <button
              className="  py-1 px-2 bg-green-600 rounded-md trans text-white hover:scale-110 font-semibold"
              onClick={createAccount}
            >
              CREATE ACCOUNT
            </button>
          </div>
        </div>
      ) : (
        <div className="bg-[#ffffffee] p-4">
          <p className="text-[2rem] font-semibold text-green-600 mb-8">
            INVICTUS WEB APP
          </p>

          <div className=" flex flex-col">
            {/* <label
              htmlFor="email"
              className=" text-[1rem] text-green-900 font-semibold"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              value={email}
              placeholder="email"
              className="p-1 text-[1.2rem] rounded bg-white border border-green-900"
            />
            <label
              htmlFor="password"
              className="mt-2 text-[1rem] text-green-900 font-semibold"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              className="p-1 text-[1.2rem] rounded border border-green-900"
              value={password}
              placeholder="password"
            />
            <label
              htmlFor="passwordConfirm"
              className="mt-2 text-[1rem] text-green-900 font-semibold"
            >
              Confirm password
            </label>
            <input
              type="password"
              name="passwordConfirm"
              className={`p-1 text-[1.2rem] rounded border border-green-900 trans ${
                passwordConfirm !== password && "text-[#f00]"
              }`}
              value={passwordConfirm}
              placeholder="password"
              onChange={(e) => setPasswordConfirm(e.target.value)}
            /> */}
            <label
              htmlFor="fullName"
              className="mt-2 text-[1rem] text-green-900 font-semibold"
            >
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              value={fullName}
              className="p-1 text-[1.2rem] rounded border border-green-900"
              placeholder="full name on class list"
              onChange={(e) => setFullName(e.target.value)}
            />

            <label
              htmlFor="regNumber"
              className="mt-2 text-[1rem] text-green-900 font-semibold"
            >
              Reg Number
            </label>
            <input
              type=""
              name="regNumber"
              value={regNumber}
              onChange={(e) => setRegNumber(e.target.value)}
              className="p-1 text-[1.2rem] rounded border border-green-900"
              placeholder="reg number"
            />

            <label
              htmlFor="username"
              className="mt-2 text-[1rem] text-green-900 font-semibold"
            >
              Username
            </label>
            <input
              type="text"
              name="username"
              value={username}
              onChange={(e) => setUserName(e.target.value)}
              className="p-1 text-[1.2rem] rounded border border-green-900"
              placeholder="username or nickname"
            />
            <label
              htmlFor="picture"
              className="mt-2 text-[1rem] text-green-900 font-semibold"
            >
              Picture
            </label>
            <input
              type="file"
              name="picture"
              accept="image/*"
              className="mb-4 w-full"
              id="image"
              ref={fileInputRef}
              onChange={(e) => {
                setProfilePics(e.target.files[0]);
                handleImageChange();
              }}
            />
            {profilePicsURL && (
              <>
                <img
                  src={profilePicsURL}
                  alt="profile picture"
                  className="m-auto w-2/3 p-4"
                />
              </>
            )}
          </div>

          <div className="flex flex-col justify-center items-center gap-2">
            <button
              className=" py-1 px-2 bg-green-600 rounded-md trans text-white hover:scale-110 font-semibold"
              onClick={() => {
                registerUser();
              }}
            >
              REGISTER
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
