import React from "react";
import { useState } from "react";
import searchIcon from "../icons/search.png";

const Searchbar = () => {
  const [searchValue, setSearchValue] = useState("");
  return (
    <form
      className="w-full p-0.5 flex 2xl:max-w-6xl max-w-2xl  mr-8"
      onClick={(e) => {
        e.preventDefault();
        console.log("hello")
      }}
    >
      <input
        type="text"
        className="w-full 2xl:text-2xl text-base px-3 py-2 outline-none bg-[#CFEBEF] tracking-wide font-medium rounded-l-lg placeholder:font-thin placeholder:text-black/80"
        placeholder="Search Here"
        value={searchValue}
        onChange={(e) => {
          setSearchValue(e.target.value.trimStart());
        }}
      />
      <button className="px-3 py-1 rounded-r-lg bg-[#CFEBEF]" type="submit">
        <img src={searchIcon} alt="search" className="2xl:w-[50px] w-[25px]" />
      </button>
    </form>
  );
};

export default Searchbar;
