import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddStudent = () => {
  const [roll, setRoll] = useState("");
  const [username, setUsername] = useState("");
  const [grade, setGrade] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/student/register", {
        roll,
        username,
        password,
        grade,
      })
      .then((res) => {
        if (res.data.registered) {
          navigate("/dashboard");
        }
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="bg-purple-950 text-center py-20 ">
      <form
        className="w-1/2 mx-auto bg-gray-400 py-5 rounded-md "
        onSubmit={handleSubmit}
      >
        <h2 className="text-center py-3 text-2xl font-serif uppercase font-semibold tracking-wider">
          Add Student
        </h2>

        <div className="flex flex-col gap-y-3 px-10">
          <div className="flex flex-col">
            <label htmlFor="roll" className="text-left py-0.5">
              Roll No:
            </label>
            <input
              type="text"
              id="roll"
              name="roll"
              placeholder="Enter Roll No."
              onChange={(e) => setRoll(e.target.value)}
              className="py-1 px-2 rounded-sm"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="username" className="text-left py-0.5">
              User Name:
            </label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Enter Username"
              onChange={(e) => setUsername(e.target.value)}
              className="py-1 px-2 rounded-sm"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="grade" className="text-left py-0.5">
              Grade:
            </label>
            <input
              type="text"
              id="grade"
              name="grade"
              placeholder="Enter Student Grade"
              onChange={(e) => setGrade(e.target.value)}
              className="py-1 px-2 rounded-sm"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password" className="text-left py-0.5">
              Password:
            </label>
            <input
              type="text"
              id="password"
              name="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              className="py-1 px-2 rounded-sm"
            />
          </div>
          <button
            type="submit"
            className="w-full mt-8 my-4 p-2 text-white uppercase border bg-green-500 hover:bg-green-700 transition-all rounded-md"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddStudent;
