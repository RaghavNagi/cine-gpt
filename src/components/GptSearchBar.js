import React, { useRef } from "react";
import { geminiApi } from "../utils/geminiApi";

const GptSearchBar = () => {
  const searchText = useRef(null);

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

    console.log(geminiMovies);
    
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
