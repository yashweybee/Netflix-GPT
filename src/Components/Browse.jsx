import React, { useEffect } from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SeconderyContiner from "./SeconderyContiner";
import usePopulerMovies from "../hooks/usePopulerMovies";
import GptPage from "./GptPage";
import { useSelector } from "react-redux";

const Browse = () => {
  const showGptSearch = useSelector((store) => store?.gpt?.showGptSearch);
  console.log(showGptSearch);
  useNowPlayingMovies();
  usePopulerMovies();

  return (
    <div>
      <Header />
      {showGptSearch ? (
        <GptPage />
      ) : (
        <>
          <MainContainer />
          <SeconderyContiner />
        </>
      )}
    </div>
  );
};

export default Browse;
