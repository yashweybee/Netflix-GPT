import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SeconderyContiner = () => {
  const movies = useSelector((store) => store?.movies);
  if (!movies) return;

  console.log(movies?.populerMovies);

  return (
    <div className="bg-black">
      <div className="items relative z-20 -mt-48">
        <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies} />
        <MovieList title={"Populer"} movies={movies?.populerMovies} />
        <MovieList title={"Trending"} movies={movies?.nowPlayingMovies} />
        <MovieList title={"Horrer"} movies={movies?.nowPlayingMovies} />
        <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies} />
      </div>
    </div>
  );
};

export default SeconderyContiner;
