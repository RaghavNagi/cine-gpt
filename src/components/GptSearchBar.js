import React from "react";

const GptSearchBar = () => {
  return (
    <div className="pt-[10%] flex justify-center bg-[#212121]">
      <form className=" grid grid-cols-12 w-1/2 rounded-lg shadow-[0_0_15px_rgba(255,255,255,0.5)]">
        <input
          type="text"
          className="p-4 m-4 col-span-9 rounded"
          placeholder="What would you like to watch today"
        />
        <button className="col-span-3 py-2 px-4 m-4 bg-red-700 text-white rounded-lg text-xl">
          Search
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
