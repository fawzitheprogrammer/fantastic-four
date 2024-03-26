'use client';
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import axios from "axios";
import requests from '../../api/Requests'
import { resolve } from "styled-jsx/css";
import truncate from "../../helper/truncate_string";

const SingleMovie = () => {


  // GETTING DATA FROM MOVIE SCREEN

  const searchParams = useSearchParams();

  const movieId = JSON.parse(searchParams.get('id'));


  // USE STATE

  const [movie, setMovie] = useState({});




  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=caf2d2376a53622b50ee54394777517d`);
        setMovie(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    })(); // Call the IIFE immediately 
  }, [movieId]);


  return <div>
    <div className="w-full  h-[600px] text-white relative my-4 ">
      <div className="w-full h-full ">
        <div className="absolute w-full h-[600px] bg-gradient-to-r from-black"></div>
        <div className="absolute w-full h-[600px] bg-gradient-to-l from-black"></div>
        <img
          className="w-full h-full  object-cover "
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={movie?.alt}
        />


        <div className="flex relative bottom-[20%] mx-8 mt-10 lg:mt-0 xl:mt-0">

          <div className="absolute flex-col lg:flex-row xl:flex-row md:flex w-full  bottom-[15%] p-4 md:p-8">
            <img
              className=" w-60 h-80  object-cover mr-4 rounded-lg "
              src={`https://image.tmdb.org/t/p/w500/${movie?.backdrop_path}`}
              alt={movie?.alt}
            />
            <div className="mr-4">
              <h1 className="text-4xl md-text-5xl font-bold mb-2">{movie?.title}</h1>
              <p className="text-gray-400 text-sm">
                Released : {movie?.release_date}
              </p>
              <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w[35%] text-xs xl:text-lg text-gray-200 ">
                {truncate(movie?.overview, 200)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
};

export default SingleMovie;
