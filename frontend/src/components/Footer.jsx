import React from "react";
import youtube from "../../public/images/youtube.svg";
import facebook from "../../public/images/facebook.svg";
import twitter from "../../public/images/twitter-white.svg";
import instagram from "../../public/images/instagram.svg";
import whatsapp from "../../public/images/whatsapp.svg";
import email from "../../public/images/envelope.svg";

const Footer = () => {
  return (
    <div className="py-2 text-center border-t-2 bg-purple-800 text-white border-purple-500">
      <div className="py-10 md:flex w-11/12 justify-center items-center">
        <div className="text-left pt-5 px-5 w-1/2 ">
          <h2 className="text-3xl font-semibold font-sans py-1">
            Online Book Store
          </h2>
          <p className="font-sans text-base pb-4">
            Browse the collection of our best top interesting Books. you will
            definitely find what you are looking for.
          </p>
        </div>
        <div className="text-left px-5 pb-5  w-1/2  ">
          <h2 className="text-3xl  text-center font-semibold font-sans py-1">
            Contact Us
          </h2>
          <div className="py-4 flex gap-4 flex-wrap justify-center items-center">
            <img
              src={youtube}
              alt="Youtube Icon"
              className="cursor-pointer"
              height={40}
              width={40}
            />
            <img
              src={facebook}
              alt="facebook Icon"
              className="cursor-pointer"
              height={35}
              width={35}
            />
            <img
              src={twitter}
              alt="Twitter Icon"
              className="cursor-pointer"
              height={35}
              width={35}
            />
            <img
              src={instagram}
              alt="instagram Icon"
              className="cursor-pointer"
              height={35}
              width={35}
            />
            <img
              src={whatsapp}
              alt="whatsapp Icon"
              className="cursor-pointer"
              height={355}
              width={35}
            />
            <img
              src={email}
              alt="email Icon"
              className="cursor-pointer"
              height={40}
              width={40}
            />
          </div>
        </div>
      </div>
      <h1 className="text-sm pt-2 border-t border-purple-400">
        Copyright &copy; 2024 OPTANWAR
      </h1>
    </div>
  );
};

export default Footer;
