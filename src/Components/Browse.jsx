import React, { useEffect } from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import { useSelector } from "react-redux";
import MainContainer from "./MainContainer";
import SeconderyContiner from "./SeconderyContiner";

const Browse = () => {
  useNowPlayingMovies();

  // console.log(nowPlayingMovies);

  return (
    <div>
      <Header />
      <MainContainer />
      <SeconderyContiner />
    </div>
  );
};

export default Browse;
