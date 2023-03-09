import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Announcement from "./components/Announcement";

function App() {
  return (
    <Router>
      <Announcement body="Website on creation mode" />
      <Header />
      <section className="min-h-screen w-full relative">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </section>
    </Router>
  );
}

export default App;
