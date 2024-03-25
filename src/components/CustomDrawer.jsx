"use client";
import React from "react";
import { FaBars } from "react-icons/fa";

const CustomDrawer = () => {
  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content drawer">
        {/* Page content here */}
        <label
          htmlFor="my-drawer"
          className="btn btn-primary drawer-button bg-gray-200 border-none hover:bg-gray-100 lg:flex hidden"
        >
          <FaBars className="my-auto p-0 mr-2" color="black" />
          Browse
        </label>
        <label
          htmlFor="my-drawer"
          className="btn btn-primary drawer-button bg-gray-200 border-none hover:bg-gray-100 flex lg:hidden"
        >
          <FaBars className="my-auto p-0" color="black" />
        </label>
      </div>
      <div className="drawer-side z-[10]">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-gray-200 text-base-content ">
          {/* Sidebar content here */}
          <li>
            <a>Sidebar Item 1</a>
          </li>
          <li>
            <a>Sidebar Item 2</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CustomDrawer;
