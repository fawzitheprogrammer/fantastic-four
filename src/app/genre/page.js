'use client'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import requests from '../../api/Requests'
import { useSearchParams } from 'next/navigation';
import Movie from '../../components/Movie';


export default function SelectedGenre() {


  const searchParams = useSearchParams();

  const genreId = searchParams.get('id')

  const genreTitle = searchParams.get('title')

  // A state to hold all movies fetched from API
  const [movies, setMovies] = useState([]);


  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=caf2d2376a53622b50ee54394777517d&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${genreId}`).then((response) => {
      setMovies(response.data.results);
    });
  }, [genreId]);


  return (
    <div className='flex justify-center relative items-center group '>

      <div className="w-full xl:w-[1300px] h-full  ">
        <h1 className="text-black ml-2 text-m pt-2 lg:text-2xl lg:py-8">{genreTitle} Movie</h1>
        {movies.map((movie, index) => (<Movie key={index} item={movie} />))}
      </div>

    </div>
  )
}
