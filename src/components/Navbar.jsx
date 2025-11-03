import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";

// === TopBanner integrado ===
const TopBanner = () => {
  return (
    <div className="w-full bg-[#FFD166] text-black py-2 overflow-hidden relative">
      <div className="animate-marquee whitespace-nowrap flex items-center">
        <span className="mx-6 text-xs sm:text-sm font-medium">
          🎉 ¡Envío gratis por compras mayores a $150.000! 🎉
        </span>
        <span className="mx-6 text-xs sm:text-sm font-medium">
          🧸 ¡Nuevos productos para bebés disponibles ahora! 🧸
        </span>
        <span className="mx-6 text-xs sm:text-sm font-medium">
          🌈 Descuentos hasta 40% en ropa infantil 🌈
        </span>
      </div>
    </div>
  );
};

// === Navbar ===
const navLinks = [
  { label: "Inicio", to: "/" },
  { label: "Productos", to: "/productos" },
  // { label: "Carrito", to: "/cart", icon: <FaShoppingCart className="mr-2" /> },
  // { label: "Admin", to: "/admin/login", special: true },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="w-full fixed top-0 left-0 z-50">
      {/* 🔝 TopBanner */}
      <TopBanner />

      {/* 🌸 Navbar principal */}
      <nav className="bg-[#D5CFDF] text-white shadow-md">
        <div className="max-w-7xl mx-auto h-16 flex justify-between items-center px-4">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center space-x-2 select-none"
            onClick={() => setIsOpen(false)}
          >
            <span className="text-2xl font-bold tracking-wide">VivaWear</span>
          </Link>

          {/* Botón menú móvil */}
          <button
            className="md:hidden text-white text-2xl focus:outline-none"
            onClick={toggleMenu}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>

          {/* Menú escritorio */}
          <div className="hidden md:flex space-x-6 text-sm font-medium">
            {navLinks.map(({ label, to, icon, special }) => (
              <Link
                key={label}
                to={to}
                className={`flex items-center transition ${
                  special
                    ? "hover:text-[#F9C6C9] font-semibold"
                    : "hover:text-[#07689F]"
                }`}
              >
                {icon}
                {label}
              </Link>
            ))}
          </div>
        </div>

        {/* Menú móvil desplegable */}
        <div
          className={`md:hidden bg-[#D5CFDF] transition-all duration-300 ease-in-out overflow-hidden ${
            isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col space-y-4 py-4 px-6 text-center text-base font-medium border-t border-pink-200">
            {navLinks.map(({ label, to, icon, special }) => (
              <Link
                key={label}
                to={to}
                className={`flex items-center justify-center transition ${
                  special
                    ? "hover:text-[#F9C6C9] font-semibold"
                    : "hover:text-[#07689F]"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {icon}
                {label}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
