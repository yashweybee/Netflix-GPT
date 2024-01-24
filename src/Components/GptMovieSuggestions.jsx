import React from "react";
import { useSelector } from "react-redux";
import MovieList from "../Components/MovieList";

const GptMovieSuggestions = () => {
  const { gptMovieResults, gptMovieNames } = useSelector((store) => store?.gpt);
  if (!gptMovieNames || !gptMovieResults) return;

  return (
    <div className="p-4 m-4 bg-black text-white bg-opacity-90">
      <div>
        {gptMovieNames.map((movie, index) => (
          <MovieList
            key={movie}
            title={movie}
            movies={gptMovieResults[index]}
          />
        ))}
      </div>
    </div>
  );
};

export default GptMovieSuggestions;
