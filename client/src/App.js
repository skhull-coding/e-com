import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
// import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <section className="min-h-screen w-full relative">
      <Header />
      <NavBar />
      <Home />
    </section>
  );
}

export default App;
