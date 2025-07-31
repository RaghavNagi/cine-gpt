import React, { useRef } from "react";
import { geminiApi } from "../utils/geminiApi";
import { API_OPTIONS } from "../utils/constants";
import { addGeminiMovieResult } from "../utils/gptSlice";
import { useDispatch } from "react-redux";

const GptSearchBar = () => {
  const searchText = useRef(null);
  const dispatch = useDispatch();

  // search movie in TMDB
  const searchMovieTMDB = async(movie) => {
    const data = await fetch("https://api.themoviedb.org/3/search/movie?query="+movie+"&include_adult=false&language=en-US&page=1", API_OPTIONS)
    const json = await data.json();
    return json.results;
  }

  const handleGeminiSearchClick = async () => {
    console.log(searchText.current.value);
    const gptQuery =
      ". only give me names of 5 movies, comma separated like the example result given ahead. Example Result: Movie1, Movie2, Movie3, Movie4, Movie5";
    // Make an API call to gemini and get movie result
    const fullPrompt =
      "You are a helpful movie recommendation assistant. " +
      searchText.current.value +
      gptQuery;
    const geminiResult = await geminiApi(fullPrompt);    

    const geminiMovies = geminiResult.split(",");
    // with split() it will return an array    

    // for each movie search TMDB API
    const promiseArray = geminiMovies.map(movie => searchMovieTMDB(movie.trim()));
    // [promise1, promise2, promise3, promise4, promise5]


    const tmdbResults = await Promise.all(promiseArray);
    console.log(tmdbResults);
    
    dispatch(addGeminiMovieResult({movieNames: geminiMovies ,movieResults: tmdbResults}));
  };

 

  return (
    <div className="pt-[10%] flex justify-center bg-[#212121]">
      <form
        className=" grid grid-cols-12 w-1/2 rounded-lg shadow-[0_0_15px_rgba(255,255,255,0.5)]"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 col-span-9 rounded"
          placeholder="What would you like to watch today?"
        />
        <button
          className="col-span-3 py-2 px-4 m-4 bg-red-700 text-white rounded-lg text-xl font-semibold hover:bg-red-800 transition-colors disabled:bg-gray-500 disabled:cursor-not-allowed"
          onClick={handleGeminiSearchClick}
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
