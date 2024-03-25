import React, { useState } from "react";
import truncate from "../helper/truncate_string";
import { FaHeart, FaRegHeart, FaStar } from "react-icons/fa";
import Link from "next/link";

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
        <div className="inline-block  bg-gray-200 m-2 rounded-lg">
          <div className=" w-[200px]  lg:w-[200px] inline-block cursor-pointer relative">
            <img
              className="w-full h-auto inline-block rounded-t-lg "
              src={`https://image.tmdb.org/t/p/w500/${item?.poster_path}`}
              alt={item?.title}
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
          <div className="flex justify-between p-2">
            <h3 className="text-dark-500 font-bold text-sm">
              {truncate(item.title, 15)}
            </h3>
            <div className="text-black-500 flex justify-center">
              <FaStar className="mt-[3px] mr-1 " color="#FF8C00" size={15} />
              {item?.vote_average.toFixed(1)}
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Movie;
