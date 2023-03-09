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
    <nav className="bg-[#172F43] w-full h-full flex flex-col justify-between items-center py-1">
      <div id="upperSection" className=" flex flex-col items-center">
        <NavItem type={home} altText="home" />
        <NavItem type={product} altText="product" />
        <NavItem type={sell} altText="sell" />
        <NavItem type={about} altText="about" />
        <NavItem type={contact} altText="contact" />
      </div>
      <div id="downSection" className=" flex flex-col items-center">
        <NavItem type={cart} altText="cart" />
        <NavItem type={profile} altText="profile" />
      </div>
    </nav>
  );
};

export default NavBar;
