"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { HiHome, HiUserGroup, HiOutlineFilm, HiMenuAlt2 } from "react-icons/hi";
import { IoMdColorPalette, IoIosTv } from "react-icons/io";

import requests from "../api/Requests";

const CustomDrawer = () => {
  const [genre, setGenre] = useState([]);

  useEffect(() => {
    axios.get(requests.genres).then((response) => {
      setGenre(response.data.genres);
    });
  }, []);

  return (
    <div className="drawer ">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}
        <label
          htmlFor="my-drawer"
          className="btn btn-primary drawer-button bg-gray-200 border-none hover:bg-gray-100 lg:flex hidden"
        >
          <HiMenuAlt2 className="my-auto p-0" color="black" size={25} />
          Browse
        </label>

        <label
          htmlFor="my-drawer"
          className="btn btn-primary drawer-button bg-gray-200 border-none hover:bg-gray-100  lg:hidden"
        >
          <HiMenuAlt2 className="my-auto p-0" color="black" size={20} />
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
            <a>
              <HiHome size={25} />
              Home
            </a>
          </li>
          <li>
            <a>
              <HiOutlineFilm size={25} />
              Movies
            </a>
          </li>
          <li>
            <a>
              <HiUserGroup size={25} />
              Actors
            </a>
          </li>

          <div className="collapse collapse-arrow h-auto p-0 m-0">
            <input type="checkbox" className="min-h-0 p-0" />
            <div className="collapse-title flex min-h-12 ">
              <div className="flex fixed">
                <IoMdColorPalette size={25} />
                <p className="my-auto ml-2">Genres</p>
              </div>
            </div>
            <div className="collapse-content rounded-e bg-gray-200 pt-2">
              <ol className="flex-wrap">
                {genre.map((number, index) => (
                  <li
                    key={index}
                    className="p-2 m-2 hover:bg-vibrant-orange hover:rounded-md"
                  >
                    {number.name}
                  </li>
                ))}
              </ol>
            </div>
          </div>
          <li>
            <a>
              <IoIosTv size={25} />
              TV Shows
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CustomDrawer;
