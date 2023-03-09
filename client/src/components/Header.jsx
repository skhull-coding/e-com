import logoHeader from "../icons/logo1.png"
import Searchbar from "../components/Searchbar"

const Header = () => {
  return (
    <header className="2xl:h-36 h-24 bg-[#172F43] flex items-center px-4 justify-between">
      <img src={logoHeader} alt="Webstore 2.0" className="h-[90%]" />
      <Searchbar />
    </header>
  );
};

export default Header;
