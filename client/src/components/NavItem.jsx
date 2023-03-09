import React from "react";
import { Link } from "react-router-dom";

const NavItem = (props) => {
  return (
    <Link to={props.link} className="navItem flex bg-[#172F43] items-center gap-3 hover:brightness-125 2xl:p-[25px] p-[20px] relative z-50">
      <div className="floatingText flex justify-center items-center 2xl:text-lg text-sm tracking-wider overflow-hidden absolute w-0 transition-all text-white h-full left-0 bg-[#172f43]">{props.altText.toUpperCase()}</div>
      <img
        src={props.type}
        alt={props.altText}
        className="2xl:w-[50px] w-[30px]"
      />
    </Link>
  );
};

export default NavItem;
