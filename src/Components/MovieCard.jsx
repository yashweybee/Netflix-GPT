import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return;
  return (
    <div className="w-36 md:w-48 pr-4 m-2">
      <img
        className="rounded"
        src={IMG_CDN_URL + posterPath}
        alt="movie poster"
      />
    </div>
  );
};

export default MovieCard;
