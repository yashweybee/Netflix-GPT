import React from "react";
import { useSelector } from "react-redux";
import lang from "../utils/languageConstants";

const GptSearchBar = () => {
  const selectedLang = useSelector((store) => store?.config?.lang);

  return (
    <div className="pt-[15%] flex justify-center">
      <form className="w-1/2 bg-black grid grid-cols-12 rounded">
        <input
          className="p-4 m-4 rounded col-span-9"
          type="text"
          name="gpt search"
          placeholder={lang[selectedLang].gptSearchPlaceholder}
        />
        <button className="col-span-3 m-5 px-3 py-3 text-white bg-red-700 rounded">
          {lang[selectedLang].searchBtnTxt}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;