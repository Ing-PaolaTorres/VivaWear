import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import { categories } from "../data/categories";

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
  // { label: "Admin", to: "/admin/login", special: true },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null); // Estado para controlar la categoría activa
  const navbarRef = useRef(null); // Referencia para detectar clics fuera del navbar

  const toggleMenu = () => setIsOpen(!isOpen);

  const toggleCategory = (index) => {
    setActiveCategory(activeCategory === index ? null : index); // Toggle subcategorías
  };

  // Detectar clics fuera del navbar para cerrar las subcategorías
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setActiveCategory(null); // Cierra el menú si se hace clic fuera
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    // Limpiar el listener cuando el componente se desmonte
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="w-full fixed top-0 left-0 z-50">
      {/* 🔝 TopBanner */}
      <TopBanner />

      {/* 🌸 Navbar principal */}
      <nav className="bg-[#D5CFDF] text-black shadow-md" ref={navbarRef}>
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
            {/* Inicio */}
            {navLinks.map(({ label, to, icon, special }) => (
              <Link
                key={label}
                to={to}
                className={`flex items-center transition ${special ? "hover:text-[#F9C6C9] font-semibold" : "hover:text-[#07689F]"}
                  cursor-pointer`} // Aquí se agrega cursor-pointer
              >
                {icon}
                {label}
              </Link>
            ))}

            {/* Categorías con submenú */}
            {categories.map((category, index) => (
              <div key={category.label} className="relative">
                <button
                  onClick={() => toggleCategory(index)}
                  className="flex items-center space-x-2 transition hover:text-[#07689F] cursor-pointer" // Agregado cursor-pointer
                >
                  <span>{category.label}</span>
                  <FaChevronDown className={`transition-transform ${activeCategory === index ? 'rotate-180' : ''}`} />
                </button>
                {activeCategory === index && (
                  <div className="absolute left-0 top-full mt-2 bg-[#D5CFDF] shadow-md rounded-lg w-40">
                    {category.subcategories.map((subcategory) => (
                      <Link
                        key={subcategory.label}
                        to={subcategory.to}
                        className="block px-4 py-2 text-sm text-[#07689F] hover:bg-[#F9C6C9] rounded"
                      >
                        {subcategory.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Menú móvil desplegable */}
        <div
          className={`md:hidden bg-[#D5CFDF] transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
            }`}
        >
          <div className="flex flex-col space-y-4 py-4 px-6 text-center text-base font-medium border-t border-pink-200">
            {/* Inicio y categorías en móvil */}
            {navLinks.map(({ label, to, icon, special }) => (
              <Link
                key={label}
                to={to}
                className={`flex items-center justify-center transition ${special ? "hover:text-[#F9C6C9] font-semibold" : "hover:text-[#07689F]"}
                  cursor-pointer`} // Aquí también se agrega cursor-pointer
                onClick={() => setIsOpen(false)}
              >
                {icon}
                {label}
              </Link>
            ))}

            {/* Categorías en móvil */}
            {categories.map((category, index) => (
              <div key={category.label} className="relative">
                <button
                  onClick={() => toggleCategory(index)}
                  className="flex items-center justify-center space-x-2 text-lg cursor-pointer" // Agregado cursor-pointer
                >
                  <span>{category.label}</span>
                  <FaChevronDown className={`transition-transform ${activeCategory === index ? 'rotate-180' : ''}`} />
                </button>
                {activeCategory === index && (
                  <div className="mt-2 bg-[#D5CFDF] rounded-lg w-full">
                    {category.subcategories.map((subcategory) => (
                      <Link
                        key={subcategory.label}
                        to={subcategory.to}
                        className="block px-4 py-2 text-sm text-[#07689F] hover:bg-[#F9C6C9]"
                        onClick={() => setIsOpen(false)}
                      >
                        {subcategory.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
