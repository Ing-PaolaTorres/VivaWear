import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BenefitsBar from "./components/BenefitsBar";
import ProductDetail from "./components/ProductDetail";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/producto/:id" element={<ProductDetail />} />
      </Routes>
      <BenefitsBar />
      <Footer />
    </Router>
  );
}

export default App;
