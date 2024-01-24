import React, { useEffect } from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SeconderyContiner from "./SeconderyContiner";
import usePopulerMovies from "../hooks/usePopulerMovies";
import GptSearch from "./GptSearch";

const Browse = () => {
  useNowPlayingMovies();
  usePopulerMovies();

  return (
    <div>
      <Header />
      <GptSearch />
      <MainContainer />
      <SeconderyContiner />
    </div>
  );
};

export default Browse;
