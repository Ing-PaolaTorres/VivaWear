import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import FAQ from "./pages/FAQ";
import ClientService from "./pages/ClientService";
import ContactUs from "./pages/ContactUs";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BenefitsBar from "./components/BenefitsBar";
import ProductDetail from "./components/ProductDetail";
import ShirtCustomization from "./components/ShirtCustomization";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/producto/:id" element={<ProductDetail />} />
        <Route path="/personalizar-camiseta" element={<ShirtCustomization />} />
        <Route path="/categorias/:category/:subcategory" element={<Home />} />
        <Route path="/conocenos" element={<AboutUs />} />
        <Route path="/preguntas-frecuentes" element={<FAQ />} />
        <Route path="/servicio-cliente" element={<ClientService />} />
        <Route path="/contacto" element={<ContactUs />} />
      </Routes>
      <BenefitsBar />
      <Footer />
    </Router>
  );
}

export default App;
