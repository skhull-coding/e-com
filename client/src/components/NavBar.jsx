import React from "react";
import NavItem from "./NavItem";

const NavBar = () => {
  return (
    <div className="fixed top-[calc(50%-1.5rem)] left-3 w-12 rounded-full h-12 flex items-center justify-center bg-teal-300/20 border border-black/20">
      <div className="material-symbols-outlined">home</div>
      <nav className="absolute left-0 top-0">
        <NavItem name="home" top="-top-14" />
        <NavItem name="home" top="-top-7" left="left-12" />
        <NavItem name="home" top="top-7" left="left-12" />
        <NavItem name="home" top="top-14" />
      </nav>
    </div>
  );
};

export default NavBar;
