import React from "react";
import MovieCard from "./MovieCard";
import Shimmer from "./Shimmer";

const MovieList = ({ title, movies }) => {
  return !movies ? (
    <Shimmer />
  ) : (
    <div className="px-6 bg-black">
      <h1 className="text-3xl pb-2 pt-6 font-bold text-white text-shadow-white-sm">{title}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex">
          {movies.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
