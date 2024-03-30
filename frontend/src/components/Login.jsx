import React, { useState } from "react";

import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("admin");
  const navigate = useNavigate();

  axios.defaults.withCredentials = true;
  const handleSubmit = () => {
    axios
      .post("http://localhost:3001/auth/login", { userName, password, role })
      .then((res) => {
        if (res.data.login && res.data.role == "admin") {
          navigate("/dashboard");
        }
      })
      .catch((err) => console.error(err));
  };
  return (
    <div className="bg-purple-950 py-20">
      <div className="w-1/2 mx-auto bg-gray-400 rounded-md py-10 px-5">
        <h2 className="text-center py-3 text-2xl font-serif uppercase font-semibold tracking-wider">
          Login
        </h2>
        <div className="flex flex-col py-1">
          <label htmlFor="username" className="my-0.5">
            Username:
          </label>
          <input
            type="text"
            placeholder="Enter Username"
            className="p-2"
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div className="flex flex-col py-1">
          <label htmlFor="password" className="my-0.5">
            Password:
          </label>
          <input
            type="text"
            placeholder="Enter Password"
            className="p-2"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex flex-col py-1">
          <label htmlFor="role" className="my-0.5">
            Role:
          </label>
          <select
            name="role"
            id="role"
            className="p-2 "
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="admin">Admin</option>
            <option value="student">Student</option>
          </select>
        </div>
        <button
          className="w-full mt-8 my-4 p-2 text-white uppercase border bg-green-500 hover:bg-green-700 transition-all rounded-md"
          onClick={handleSubmit}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
