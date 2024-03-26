"use client";
import React, { useEffect, useState } from "react";
import { HiHome, HiUserGroup, HiOutlineFilm, HiMenuAlt2 } from "react-icons/hi";
import { IoIosTv } from "react-icons/io";
import Genre from "../components/Genre";

const CustomDrawer = () => {
  return (
    <div className="drawer w-fit">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}
        <label
          htmlFor="my-drawer"
          className="btn btn-primary w-fit drawer-button bg-gray-200 border-none hover:bg-gray-100 lg:flex hidden"
        >
          <HiMenuAlt2 className="my-auto p-0" color="black" size={25} />
          Browse
        </label>

        <label
          htmlFor="my-drawer"
          className="btn btn-primary drawer-button w-fit bg-white shadow-none border-none hover:bg-gray-100  lg:hidden"
        >
          <HiMenuAlt2 className="my-auto p-0" color="black" size={30} />
        </label>
      </div>
      <div className="drawer-side z-[10]">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        />
        <ul className="menu bg-gray-100 min-h-full  w-80 p-8 text-black text-m">
          <li>
            <a href="/">
              <HiHome size={25} />
              Home
            </a>
          </li>
          <li>
            <a>
              <IoIosTv size={25} />
              TV Shows
            </a>
          </li>
          <li>
            <a>
              <HiUserGroup size={25} />
              Actors
            </a>
          </li>

          {/* Genre component */}
          <Genre />
        </ul>
      </div>
    </div>
  );
};

export default CustomDrawer;
