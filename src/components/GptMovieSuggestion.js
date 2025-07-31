import React from "react";
import { useSelector } from "react-redux";
import Shimmer from "./Shimmer";
import MovieList from "./MovieList";

const GptMovieSuggestion = () => {
  const { movieNames, movieResults } = useSelector((store) => store.gpt);
  if (movieNames === null) return <Shimmer />;

  return (
    <div className="p-4 m-4 text-white bg-[#212121} h-full">
      <div>
        {movieNames.map((movieName, index) => (
          <MovieList key={movieName} title={movieName} movies={movieResults[index]} />
        ))}
      </div>
    </div>
  );
};

export default GptMovieSuggestion;
