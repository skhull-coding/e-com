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
        <section className="flex h-full justify-between">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          <div id="navSpace" className="h-full 2xl:w-[100px] w-[70px] relative">
            <NavBar />
          </div>
        </section>
      </section>
    </Router>
  );
}

export default App;
