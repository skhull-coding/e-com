import React from "react";
import { useState } from "react";

const Searchbar = () => {
    const [searchValue, setSearchValue] = useState('')
  return (
    <form className="w-full p-0.5 flex" onClick={(e)=>{e.preventDefault()}}>
      <input
        type="text"
        className="w-full text-xl px-3 py-2 border-2 border-blue-300 outline-none focus:ring-1 tracking-wide rounded-l-lg"
        placeholder="Search Here"
        value={searchValue}
        onChange={(e)=>{setSearchValue(e.target.value.trimStart())}}
      />
      <button className="material-symbols-outlined border-2 border-l-0 border-blue-300 px-3 rounded-r-lg bg-green-100 hover:bg-green-200 focus:ring-1 transition-colors" type="submit">search</button>
    </form>
  );
};

export default Searchbar;
