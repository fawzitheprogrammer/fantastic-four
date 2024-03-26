import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import _ from "lodash";
import MovieSearched from "../components/MovieSearched";
import Movie from "./Movie";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Reference to the debounce function
  const debouncedFetchSuggestions = useRef(
    _.debounce((query) => fetchSuggestions(query), 300) // 300ms delay
  ).current;

  const fetchSuggestions = async (query) => {
    if (!query) {
      setFilteredSuggestions([]); // Clear suggestions on empty query
      return;
    }

    setIsLoading(true);

    try {
      axios
        .get(
          `https://api.themoviedb.org/3/search/movie?api_key=caf2d2376a53622b50ee54394777517d&query=${query}&include_adult=false&language=en-US&page=1`
        )
        .then((response) => {
          setFilteredSuggestions(response.data.results);
        });

      // Process the response.data according to format:
      // const newSuggestions = response.data.results; // Adapt this line
    } catch (error) {
      console.error("Error fetching suggestions:", error);
      // Handle errors appropriately
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setSearchTerm(inputValue);

    // Use the debounced function
    debouncedFetchSuggestions(inputValue);
  };

  return (
    <div className="relative w-full lg:w-1/2 xl:h-1/2 ">
      <label className="input input-bordered flex items-center gap-2 w-full">
        <input
          type="text"
          className="grow"
          placeholder="Search"
          value={searchTerm}
          onChange={handleInputChange}
          onFocus={() => setShowSuggestions(true)}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="w-4 h-4 opacity-70"
        >
          <path
            fillRule="evenodd"
            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
            clipRule="evenodd"
          />
        </svg>
      </label>

      {showSuggestions && (
        <ul
          className="absolute bg-white w-full rounded shadow mt-1 z-10 p-4 overflow-y-auto max-h-[700px]"
          onMouseLeave={() => setShowSuggestions(false)}
        >
          {isLoading ? (
            <li className="px-2 py-2">Loading...</li>
          ) : (
            filteredSuggestions.map((suggestion, index) => (
              <MovieSearched key={index} movie={suggestion} />
            ))
          )}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
