import { Route, Routes } from "react-router-dom";
import React from "react";
const NavBar = () => {
  //
  return (
    <div className="flex items-center justify-between p-8 z-[100] w-full absolute">
      {/* Our website name*/}
      <div>
      <h1 className='text-white -2000 text-4xl font-bold cursor-pointer'>
       FANTASTIC FOUR
        </h1>
        </div>
     
      {/* Sign in and sign up  buttons*/}
      <div>
        <button className="text-white pr-4">Sign In</button>
        <button className=" shadow bg-white -500  text-black  px-6 py-2 rounded cursor-pointer">
          Sign Up
        </button>
      </div>
    </div>
  );
};
export default NavBar;