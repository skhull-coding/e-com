import { useRef } from "react";
import NavItem from "./NavItem";

const NavMenu = () => {
  const hamburgerMenu = useRef();
  const Navbar = useRef();

  const handleClickOnMenu = (event) => {
    const childs = event.target.children;
    childs[0].classList.toggle("opacity-0");
    childs[1].classList.toggle("rotate-[45deg]");
    childs[1].classList.toggle("translate-y-1");
    childs[1].classList.toggle("bg-slate-50");
    childs[2].classList.toggle("bg-slate-50");
    childs[1].classList.toggle("bg-red-500");
    childs[2].classList.toggle("bg-red-500");
    childs[2].classList.toggle("-rotate-[45deg]");
    childs[2].classList.toggle("-translate-y-1");

    Navbar.current.classList.toggle("h-0");
    Navbar.current.classList.toggle("h-[calc(6*(3rem))]");
  };

  return (
    <div className="relative">
      <div
        ref={hamburgerMenu}
        id="menu"
        className="w-10 h-5 flex items-center justify-between flex-col"
        onClick={handleClickOnMenu}
      >
        <div className="menuLine bg-pink-400 w-full h-0.5 rounded-full pointer-events-none select-none transition-transform"></div>
        <div className="menuLine bg-slate-50 w-full h-0.5 rounded-full pointer-events-none select-none transition-transform"></div>
        <div className="menuLine bg-slate-50 w-full h-0.5 rounded-full pointer-events-none select-none transition-transform"></div>
      </div>
      <nav
        id="navbar"
        ref={Navbar}
        className="absolute top-[calc(100%+2rem)] gap-2 h-0 overflow-hidden text-slate-900 transition-all flex flex-col select-none left-0 z-50"
      >
        <NavItem text="Home" symbolText="home" link="home" />
        <NavItem text="Products" symbolText="deployed_code" link="product" />
        <NavItem text="Sell" symbolText="sell" />
        <NavItem text="Buy" symbolText="shopping_cart" />
        <NavItem text="Search" symbolText="search" />
        <NavItem text="Profile" symbolText="person" />
      </nav>
    </div>
  );
};

export default NavMenu;
