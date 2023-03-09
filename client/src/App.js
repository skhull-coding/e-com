import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Product from "./pages/Product";
import Arrow from "./components/Arrows";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Announcement from "./components/Announcement";

function App() {
  return (
    <Router>
      <section className="h-screen max-h-screen flex flex-col">
        <Announcement
          body="Website on creation mode"
          link="product"
          linkText="Google.com"
        />
        <Header />
        <Arrow />
        <section className="flex w-full h-full overflow-hidden justify-between">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/product" element={<Product />} />
          </Routes>
          <div id="navSpace" className="md:h-full  2xl:w-[100px] md:w-[70px] h-[70px] relative">
            <NavBar />
          </div>
        </section>
      </section>
    </Router>
  );
}

export default App;
