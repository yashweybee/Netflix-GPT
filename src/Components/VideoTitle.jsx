import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] pl-24 absolute text-white bg-gradient-to-r  from-black">
      <h1 className="font-bold text-7xl">{title}</h1>
      <p className="text-xl py-6 w-1/4">{overview}</p>
      <div className="">
        <button className="bg-white text-black text-xl p-3 w-32 mx-2 rounded">
          Play
        </button>
        <button className="bg-gray-500 text-white bg-opacity-50 text-xl p-3 w-32 mx-2 rounded">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
