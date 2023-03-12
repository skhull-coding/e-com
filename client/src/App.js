import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Cursor from "./components/Cursor";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Products from "./pages/Products";
import Footer from "./components/Footer";

function App() {
  return (
    <section id="body" className="overflow-y-auto overflow-x-hidden h-screen w-full before:fixed before:w-screen before:min-h-screen before:top-0 before:left-0 before:bg-center before:bg-no-repeat before:bg-cover before:-z-50 before:blur-md">
      <Router>
        <Cursor />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/products" element={<Products />} />
        </Routes>
        <Footer />
      </Router>
    </section>
  );
}

export default App;
