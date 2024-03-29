import React from "react";
import storeImg from "../../public/images/home page.png";
import PopularBooks from "./PopularBooks";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="py-10 px-4 lg:flex justify-center items-center lg:py-5 lg:w-11/12/12 lg:mx-auto bg-purple-950 text-white">
        <div className="lg:w-1/2">
          <h1 className="text-center font-medium text-2xl capitalize tracking-wider leading-10 md:text-3xl lg:pt-7">
            Online Book library
          </h1>

          <p className="text-center text-base py-3 md:text-xl md:px-20 md:py-5 lg:p-4">
            {" "}
            Browse the collection of our best top interesting Books. you will
            definitely find what you are looking for.
          </p>
          <button className="border-2 p-2 flex justify-center items-center mx-auto my-4 bg-purple-950 text-white hover:bg-purple-800 transition-all rounded-md">
            <Link to="/books">Read Books</Link>
          </button>
        </div>
        <div className="md:p-16 lg:w-1/2">
          <img src={storeImg} alt="Book Store image" />
        </div>
      </div>
      <div className="bg-purple-950 text-white text-center">
        <PopularBooks />
      </div>
    </>
  );
};

export default Home;
