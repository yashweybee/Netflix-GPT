import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-64 pl-24">
      <h1 className="font-bold text-6xl">{title}</h1>
      <p className="text-lg py-6 w-1/2">{overview}</p>
      <div className="">
        <button className=" bg-gray-700 text-black text-lg p-3 w-32 rounded ">
          Play
        </button>
        <button className="bg-gray-400 text-black text-lg p-3 w-32 mx-2 rounded">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
