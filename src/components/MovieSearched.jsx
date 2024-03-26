import React from "react";
import requests from "../api/Requests";
import { FaHeart, FaRegHeart, FaStar } from "react-icons/fa";
import Link from "next/link";
import truncate from "../helper/truncate_string";

const MovieSearched = ({ movie }) => {
  return (
    <>
      <Link
        href={{
          pathname: `/movie`,
          query: { title: movie?.title, id: movie?.id },
        }}
      >
        <div className="flex">
          <img
            src={`${requests.baseImgUrl}${movie?.poster_path}`}
            alt={movie?.title}
            className="w-28 h-32 mb-2 object-cover" // object-cover for image scaling
          />
          <div className="p-4">
            <h1 className="text-semibold text-black text-sm lg:text-1xl">
              {truncate(movie?.title, 40)}
            </h1>
            <p className="text-xs lg:text-lg md:text-sm xl:text-lg">
              Release date {movie.release_date}
            </p>
            <p class="mb-4 text-sm text-gray-700 lg:flex hidden">
              Rating:{" "}
              <div className="flex ml-2">
                <FaStar className="mt-[3px] mr-1 " color="#FF8C00" size={15} />
                {movie?.vote_average.toFixed(1)}
              </div>
            </p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default MovieSearched;

{
  /* <div className="card card-side bg-base-100 shadow-xl w-fit md:w-1/2 lg:w-1/3 h-48 p-3">
  <figure>
    <img
      src={`${requests.baseImgUrl}${movie?.poster_path}`}
      alt={movie?.title}
      className="w-full h-full object-cover" // object-cover for image scaling
    />
  </figure>
  <div className="card-body flex flex-col justify-between">
    {" "}
    {/* Flexbox */
}
//     <h2 className="card-title text-sm">{movie?.title}</h2>
//     <p className="text-xs">Click the button to watch on Jetflix app.</p>
//   </div>
// </div>; */}
