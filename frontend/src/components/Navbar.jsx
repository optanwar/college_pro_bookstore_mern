import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="">
      <nav className="bg-purple-900 flex justify-between p-4 text-white border-b-2 border-purple-500">
        <div className="flex justify-center">
          <Link to="/">
            {" "}
            <h2 className="text-2xl">Books Store </h2>
          </Link>
        </div>
        <div className="flex items-center md:gap-9">
          <Link
            to="/books"
            className="text-white no-underline mx-2 uppercase hover:underline pb-0.5"
          >
            {" "}
            Books
          </Link>
          <Link
            to="/login"
            className="text-white no-underline mx-2 uppercase hover:underline pb-0.5"
          >
            Login
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
