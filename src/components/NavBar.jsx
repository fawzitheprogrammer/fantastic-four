
import React from "react";
import { FaBars } from "react-icons/fa";

const NavBar = () => {
  
  return (
    <div className="flex items-center justify-between p-8 w-full ">
      {/* Our website logo */}
      <img
        src="/logo.jpg"
        alt="Logo"
        className="w-[200px] md:w-[220px] lg:w[250px] xl:w-[300px]  px-4"
      />

      {/* <button className="bg-gray-700 rounded p-2 flex text-center">
        <FaBars className="mt-1 p-0" color="white" />
        <p className="text-white ml-2">Browse</p>
      </button> */}

      

      {/* Sign in and sign up  buttons*/}
      <div>
        <button className="text-white pr-4">Sign In</button>
        <button className="bg-vibrant-blue text-black px-6 py-2 rounded cursor-pointer">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default NavBar;
