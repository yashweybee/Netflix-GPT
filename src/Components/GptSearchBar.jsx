import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResults } from "../utils/gptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const searchText = useRef(null);
  const selectedLang = useSelector((store) => store?.config?.lang);

  const searchMovieAPi = async (movieName) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movieName}&include_adult=false&language=en-US&page=1`,
      API_OPTIONS
    );
    const jsonData = await data.json();
    return jsonData.results;
  };

  const handleSearch = async () => {
    // console.log(searchText.current.value);
    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query : " +
      searchText.current.value +
      ". only give me names of 10 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });

    const gptMovieResult = gptResults.choices[0]?.message.content.split(",");
    const gptMoviesResultPromises = gptMovieResult.map((movie) =>
      searchMovieAPi(movie)
    );

    const gptMoviesResultData = await Promise.all(gptMoviesResultPromises);

    dispatch(
      addGptMovieResults({
        movieNames: gptMovieResult,
        movieResults: gptMoviesResultData,
      })
    );
  };

  return (
    <div className="pt-[15%] flex justify-center">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-1/2 bg-black grid grid-cols-12 rounded"
      >
        <input
          ref={searchText}
          className="p-4 m-4 rounded col-span-9"
          type="text"
          name="gpt search"
          placeholder={lang[selectedLang].gptSearchPlaceholder}
        />
        <button
          onClick={handleSearch}
          className="col-span-3 m-5 px-3 py-3 text-white bg-red-700 rounded"
        >
          {lang[selectedLang].searchBtnTxt}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
