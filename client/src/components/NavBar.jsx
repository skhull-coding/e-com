import React from "react";
import NavItem from "./NavItem";
import home from "../icons/home.png";
import contact from "../icons/contact.png";
import product from "../icons/product.png";
import about from "../icons/about.png";
import sell from "../icons/sell.png";
import cart from "../icons/cart.png";
import profile from "../icons/profile.png";

const NavBar = () => {
  return (
    <nav className="bg-[#172F43] w-full h-full flex flex-col justify-between items-center py-10">
      <div id="upperSection" className=" flex flex-col items-center gap-[36px]">
        <NavItem type={home} />
        <NavItem type={product} />
        <NavItem type={sell} />
        <NavItem type={about} />
        <NavItem type={contact} />
      </div>
      <div id="downSection" className=" flex flex-col items-center gap-[36px]">
        <NavItem type={cart} />
        <NavItem type={profile} />
      </div>
    </nav>
  );
};

export default NavBar;
