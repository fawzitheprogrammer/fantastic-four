"use client";
import { Route, Routes } from "react-router-dom";
import React from "react";
import CustomDrawer from "./CustomDrawer";
import SearchBar from "../components/SearchBar";

const NavBar = () => {
  //

  return (
    <div className=" bg-white   w-full ">
      {/* Our website logo */}
      <div className="w-full xl:w-[1360px] mx-auto flex items-center justify-between p-4">
        <div className="flex flex-row-reverse items-center lg:flex-row">
          <img
            src="/logo.jpg"
            alt="Logo"
            className="w-[200px] md:w-[220px] lg:w[250px] xl:w-[300px]  px-4"
          />
          <CustomDrawer />
        </div>
        <SearchBar />
      </div>

      {/* <div className="dropdown dropdown-hover">
        <div tabIndex={0} role="button" className="btn m-1">
          Hover
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            <a>Item 1</a>
          </li>
          <li>
            <a>Item 2</a>
          </li>
        </ul>
      </div> */}

      {/* <button className="bg-gray-700 rounded p-2 flex text-center">
        <FaBars className="mt-1 p-0" color="white" />
        <p className="text-white ml-2">Browse</p>
      </button> */}

      {/* <DrawerDefault /> */}

      {/* Sign in and sign up  buttons*/}
      {/* <div>
        <button className="text-white pr-4">Sign In</button>
        <button className="bg-vibrant-blue text-black px-6 py-2 rounded cursor-pointer">
          Sign Up
        </button>
      </div> */}
    </div>
  );
};

export default NavBar;
