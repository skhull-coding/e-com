import React from "react";
import { Link } from "react-router-dom";

const NavItem = (props) => {
  return (
    <Link to={props.link} className="navItem flex bg-[#172F43] items-center gap-3 hover:brightness-125 p-[25px] relative z-50">
      <div className="floatingText flex justify-center items-center 2xl:text-lg text-sm tracking-wider overflow-hidden absolute w-0 transition-all text-white h-full md:left-0 top-0 bg-[#172f43]">{props.altText.toUpperCase()}</div>
      <img
        src={props.type}
        alt={props.altText}
        className="w-[4vw] 2xl:max-w-[50px] max-w-[20px]"
      />
    </Link>
  );
};

export default NavItem;
