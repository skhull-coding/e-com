import Logo from "./Logo"
import Searchbar from "./Searchbar"

const Header = () => {
  return (
    <header className="bg-green-50 p-5 flex items-center justify-between gap-3 md:flex-nowrap flex-wrap">
        <Logo />
        <Searchbar />
    </header>
  )
}

export default Header