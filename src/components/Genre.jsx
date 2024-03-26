import React from "react";
import { IoMdColorPalette } from "react-icons/io";
import {  HiOutlineFilm } from "react-icons/hi";

import { useEffect, useState } from "react";
import axios from "axios";
import requests from "../api/Requests";
import Link from "next/link";

export default function Genre() {
  const [genre, setGenre] = useState([]);

  useEffect(() => {
    axios.get(requests.genres).then((response) => {
      setGenre(response.data.genres);
    });
  }, []);
  return (
    <>
      <div className="collapse collapse-arrow h-auto p-0 m-0">
        <input type="checkbox" className="min-h-0 p-0" />
        <div className="collapse-title flex min-h-12 ">
          <div className="flex fixed">
            <HiOutlineFilm size={25} />
            <p className="my-auto ml-2">Genres</p>
          </div>
        </div>
        <div className="collapse-content rounded-e bg-gray-200 pt-2">
          <ol className="flex-wrap">
            {genre.map((fetchedGenre, index) => (
              <Link
                href={{
                  pathname: "/genre",
                  query: { title: fetchedGenre.name, id: fetchedGenre.id },
                }}
              >
                <li
                  key={index}
                  className="p-2 m-2 hover:bg-vibrant-orange hover:rounded-md"
                >
                  {fetchedGenre.name}
                </li>
              </Link>
            ))}
          </ol>
        </div>
      </div>
    </>
  );
}
