import React, { useState } from "react";
import truncate from "../helper/truncate_string";
import { FaHeart, FaRegHeart, FaStar } from "react-icons/fa";
import Link from "next/link";
import requests from "../api/Requests";

const Movie = ({ item }) => {
  const [like, setLike] = useState(false);

  // Icon size
  const iconSize = 20;

  return (
    <>
      <Link
        href={{
          pathname: `/movie`,
          query: { title: item.title, id: item?.id },
        }}
      >
        <div class="inline-block m-2 mb-2 w-1/2 px-1 lg:p-2 mx-auto  sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 ">
          <div class="rounded-lg bg-white shadow-lg">
            <div className="  inline-block cursor-pointer relative">
              <img
                src={`${requests.baseImgUrl}${item.poster_path}`}
                alt={item.title}
                class="rounded-t-lg "
              />
              <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white">
                <p className="white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full w-full text-center">
                  {item.title}
                  <p>
                    {like ? (
                      <FaHeart
                        size={iconSize}
                        className="absolute top-4 left-4 text-gray-300 "
                      />
                    ) : (
                      <FaRegHeart
                        size={iconSize}
                        className="absolute top-4 left-4 text-gray-300 "
                      />
                    )}
                  </p>
                </p>
              </div>
            </div>
            <div className="p-4">
              <p className="break-words">
                <h2 className="mb-2 text-lg font-semibold overflow-hidden text-ellipsis whitespace-nowrap">
                  {item.title}
                </h2>
              </p>
              <p className="mb-2 text-xs lg:text-sm text-gray-700">
                Release Date: {item?.release_date}
              </p>
              <p className="mb-4 text-sm text-gray-700 flex ">
                Rating:{" "}
                <div className="flex ml-2">
                  <FaStar
                    className="mt-[3px] mr-1 "
                    color="#FF8C00"
                    size={15}
                  />
                  {item?.vote_average.toFixed(1)}
                </div>
              </p>
              <button
                href="#"
                className="w-full rounded-lg bg-blue-500 px-4 py-2 text-center font-semibold text-white hover:bg-blue-600"
              >
                Details
              </button>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Movie;
