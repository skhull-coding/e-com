import NavMenu from "./NavMenu";

const Header = () => {
  return (
    <header
      id="main-header"
      className= "flex items-center py-3 px-6 sticky"
    >
      <div id="logo" className="mx-auto font-medium select-none">
        <span className="text-3xl text-white">Webstore</span>
        <span className="text-red-400 text-base align-top">2.0</span>
      </div>
      <NavMenu />
    </header>
  );
};

export default Header;
