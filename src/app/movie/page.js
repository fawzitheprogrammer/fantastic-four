'use client';
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import requests from "../../api/Request";
import axios from "axios";

const SingleMovie = () => {


  // GETTING DATA FROM MOVIE SCREEN

  const searchParams = useSearchParams();

  const movieId = JSON.parse(searchParams.get('id'));


  // USE STATE

  const [movie, setMovie] = useState({});


  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=caf2d2376a53622b50ee54394777517d`).then((response) => {
      setMovie(response.data);
    });
  }, []);


  return <div>
    <h1 className="text-white">
      {movie.original_title}
    </h1>
    {/* <h1 className="text-white">
      {`${requests.baseImgUrl}${movieJson.id}`}
    </h1>
    */}
    <img src={`${requests.baseImgUrl}${movie.poster_path}`} alt={movie.title} />
  </div>
};

export default SingleMovie;
