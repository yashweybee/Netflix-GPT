import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  //   console.log(movies);
  if (!movies) return;
  return (
    <div className="px-6 mt-5">
      <h1 className="text-lg md:text-3xl py-4 text-white">{title}</h1>
      <div className="flex ">
        <div className="flex flex-wrap justify-stretch">
          {movies.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
