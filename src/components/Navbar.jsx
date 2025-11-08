import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import { categories } from "../data/categories";

// === TopBanner integrado ===
const TopBanner = () => {
  return (
    <div className="w-full bg-[#B01b2e] text-white py-2 overflow-hidden relative">
      <div className="animate-marquee whitespace-nowrap flex items-center">
        <span className="mx-6 text-xs sm:text-sm font-medium">
          🎉 ¡Envío gratis por compras mayores a $150.000! 🎉
        </span>
        <span className="mx-6 text-xs sm:text-sm font-medium">
          🧸 ¡Nuevos productos para bebés disponibles ahora! 🧸
        </span>
        <span className="mx-6 text-xs sm:text-sm font-medium">
          🌈 ¡Diseñamos momentos que se visten de amor! 🌈
        </span>
      </div>
    </div>
  );
};

// === Navbar ===
const navLinks = [
  { label: "Inicio", to: "/" },
  { label: "Conócenos", to: "/conocenos" },
  { label: "Contáctanos", to: "/contacto" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null); // Estado para controlar la categoría activa
  const navbarRef = useRef(null); // Referencia para detectar clics fuera del navbar
  const [selectedCategory, setSelectedCategory] = useState(null); // Estado para manejar categoría seleccionada

  const toggleMenu = () => setIsOpen(!isOpen);

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

  const toggleCategory = (index) => {
    setActiveCategory(activeCategory === index ? null : index);
  };

  const onCategoryChange = (categoryLabel) => {
    setSelectedCategory(categoryLabel); // Actualiza la categoría seleccionada
    setIsOpen(false);
    setActiveCategory(null); // Cierra las subcategorías al cambiar de categoría
  };

  // Maneja el clic en "Inicio" para cerrar las subcategorías
  const handleHomeClick = () => {
    setSelectedCategory(null); // Resetea la categoría seleccionada
    setActiveCategory(null); // Cierra las subcategorías
    setIsOpen(false); // Cierra el menú móvil
  };

  return (
    <header className="w-full fixed top-0 left-0 z-50">
      {/* 🔝 TopBanner */}
      <TopBanner />

      {/* 🌸 Navbar principal */}
      <nav className="bg-[#EAF8FB] text-black shadow-md" ref={navbarRef}>
        <div className="max-w-7xl mx-auto h-16 flex justify-between items-center px-4">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center space-x-2 select-none"
            onClick={handleHomeClick} // Cierra las subcategorías al hacer clic en "Inicio"
          >
            <span className="text-2xl font-bold tracking-wide">VivaWear</span>
          </Link>

          {/* Botón menú móvil */}
          <button
            className="md:hidden text-black text-2xl focus:outline-none"
            onClick={toggleMenu}
          >
            {isOpen ? <FaTimes className="text-black" /> : <FaBars className="text-black" />}
          </button>

          {/* Menú escritorio */}
          <div className="hidden md:flex space-x-6 text-sm font-medium">
            {/* Inicio */}
            {navLinks.map(({ label, to, icon, special }) => (
              <Link
                key={label}
                to={to}
                className={`flex items-center transition ${special ? "hover:text-[#F9C6C9] font-semibold" : "hover:text-[#07689F]"}`}
                onClick={handleHomeClick} // Cierra las subcategorías al hacer clic en "Inicio"
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
                  className="flex items-center space-x-2 transition hover:text-[#07689F] cursor-pointer"
                >
                  <span>{category.label}</span>
                  <FaChevronDown className={`transition-transform ${activeCategory === index ? 'rotate-180' : ''}`} />
                </button>
                {activeCategory === index && (
                  <div className="absolute left-0 top-full mt-2 bg-[#D5CFDF] shadow-md rounded-lg w-40">
                    {category.subcategories.map((subcategory) => (
                      <Link
                        key={subcategory.label}
                        to={subcategory.to} // Usamos la ruta completa de cada subcategoría
                        className="block px-4 py-2 text-sm text-[#07689F] hover:bg-[#F9C6C9] rounded"
                        onClick={() => onCategoryChange(subcategory.label)} // Actualiza la categoría seleccionada
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
          className={`md:hidden bg-[#EAF8FB] transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
        >
          <div className="flex flex-col space-y-4 py-4 px-6 text-center text-base font-medium border-t border-pink-200">
            {/* Inicio y categorías en móvil */}
            {navLinks.map(({ label, to, icon, special }) => (
              <Link
                key={label}
                to={to}
                className={`flex items-center justify-center transition ${special ? "hover:text-[#F9C6C9] font-semibold" : "hover:text-[#07689F]"}`}
                onClick={handleHomeClick} // Cierra las subcategorías al hacer clic en "Inicio"
              >
                {icon}
                {label}
              </Link>
            ))}

            {/* Categorías en móvil */}
            {categories.map((category, index) => (
              <div key={category.label} className="relative">
                <button
                  onClick={() => toggleCategory(index)} // Pasa el label al hacer clic
                  className="flex items-center space-x-2 transition hover:text-[#07689F] cursor-pointer"
                >
                  <span>{category.label}</span>
                  <FaChevronDown className={`transition-transform ${activeCategory === index ? 'rotate-180' : ''}`} />
                </button>
                {activeCategory === index && (
                  <div className="mt-2 bg-[#EAF8FB] rounded-lg w-full">
                    {category.subcategories.map((subcategory) => (
                      <Link
                        key={subcategory.label}
                        to={subcategory.to} // Usamos la ruta completa de cada subcategoría
                        className="block px-4 py-2 text-sm text-[#07689F] hover:bg-[#F9C6C9] rounded"
                        onClick={() => onCategoryChange(subcategory.label)} // Actualiza la categoría seleccionada
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
