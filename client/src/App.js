import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <section className="min-h-screen w-full relative">
        <Header />
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </section>
    </Router>
  );
}

export default App;
