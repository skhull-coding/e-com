import Header from "./components/Header";
import NavBar from "./components/NavBar";
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
        <section className="flex h-full justify-between md:flex-row flex-col">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          <div id="navSpace" className="md:h-full 2xl:w-[100px] md:w-[70px] w-full h-[70px] relative">
            <NavBar />
          </div>
        </section>
      </section>
    </Router>
  );
}

export default App;
