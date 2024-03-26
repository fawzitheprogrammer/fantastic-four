import React, { useEffect, useState } from "react";
import axios from "axios";
import truncate from "../helper/truncate_string";
import requests from "../api/Requests";

const Main = () => {
  // A state to hold all movies fetched from API
  const [movies, setMovies] = useState([]);

  const movie = movies[Math.floor(Math.random() * movies.length)];

  useEffect(() => {
    axios.get(requests.requestPopular).then((response) => {
      setMovies(response.data.results);
    });
  }, []);

  return (
    <div className="w-full  h-[600px] text-white relative my-4 ">
      <div className="w-full h-full ">
        <div className="absolute w-full h-[600px] bg-gradient-to-r from-black"></div>
        <img
          className="w-full h-full  object-cover "
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={movie?.alt}
        />

        <div className="absolute w-full bottom-0 p-4 md:p-8">
          <h1 className="text-3xl md-text-5xl font-bold ">{movie?.title}</h1>
          <div className="my-4">
            <button className="border border-gray-300 text-black bg-gray-300 py-2 px-5">
              Play
            </button>
            <button className="border border-gray-300 text-white  py-2 px-5 ml-4">
              Watch Later
            </button>
          </div>
          <p className="text-gray-400 text-sm">
            Released : {movie?.release_date}
          </p>
          <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w[35%] text-xs xl:text-lg text-gray-200 ">
            {truncate(movie?.overview, 150)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
