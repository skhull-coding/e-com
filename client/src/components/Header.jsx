import NavMenu from "./NavMenu";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header
      id="main-header"
      className="flex items-center py-3 px-6 sticky z-50"
    >
      <Link to={"/"} id="logo" className="mx-auto font-medium select-none">
        <span className="text-3xl text-white">Webstore</span>
        <span className="text-red-400 text-base align-top">2.0</span>
      </Link>
      <NavMenu />
    </header>
  );
};

export default Header;
