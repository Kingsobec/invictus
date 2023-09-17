import { useState } from "react";
import { auth, provider } from "../firebase-config";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleEmailChange = () => {};
  return (
    <div className="flex justify-center items-center min-h-[80vh] text-center">
      <div className="">
        <p className="text-[2rem] font-semibold text-green-600">
          INVICTUS WEB APP
        </p>

        <div className=" flex flex-col">
          <label htmlFor="email" className=" text-[1.2rem] text-green-900">
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
            className="mt-2 text-[1.2rem] text-green-900"
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
          <button className=" py-1 px-2 bg-white rounded-md trans text-green-900 hover:scale-110 font-semibold">
            LOGIN
          </button>
          <button className=" py-1 px-2 bg-white rounded-md trans text-green-900 hover:scale-110 font-semibold">
            CREATE ACCOUNT
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
