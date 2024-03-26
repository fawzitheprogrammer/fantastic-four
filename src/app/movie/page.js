'use client';
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import axios from "axios";
import requests from '../../api/Requests'
import { resolve } from "styled-jsx/css";
import truncate from "../../helper/truncate_string";
import { FaHeart, FaRegHeart, FaStar } from "react-icons/fa";


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


  return <div >
    <div className="w-full  h-full text-black relative my-4 ">


      <div className="flex   mx-8 mt-10 lg:mt-0 xl:mt-0">

        <div className=" flex-col bottom-4 justify-center lg:flex-row xl:flex-row md:flex w-full   p-4 md:p-8">
          <img
            className=" w-60 h-80  object-cover mr-4 rounded-lg "
            src={`https://image.tmdb.org/t/p/w500/${movie?.poster_path}`}
            alt={movie?.alt}
          />
          <div className="mr-4">
            <h1 className="text-m md-text-5xl font-bold mb-2 lg:flex text-3xl">{truncate(movie?.title, 30)}</h1>
            <p className="text-gray-400 text-sm">
              Released : {movie?.release_date}
            </p>
            <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w[35%] text-xs xl:text-lg text-black ">
              {truncate(movie?.overview, 200)}
            </p>
            <p className="flex">
              Rating:
              <div className="flex ml-2 text-black">
                <FaStar className="mt-[3px] mr-1 " color="#FF8C00" size={15} />
                {movie?.vote_average}
              </div>
            </p>
            <p className="flex ">
              <p className="mr-2 font-semibold">Language:</p>
              <p>{movie.original_language}</p>
            </p>
            <p className="flex ">
              <p className="mr-2 font-semibold">Vote Count:</p>
              <p>{movie.vote_count}</p>
            </p>


          </div>
        </div>
      </div>
    </div>
  </div>
};

export default SingleMovie;
