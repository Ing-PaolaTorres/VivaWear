import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import FloatingSocialIcons from "../components/FloatingSocialIcons";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { products } from "../data/products";

const carouselImages = [
  "/assets/images/Banner-1.jpeg",
  "/assets/images/Banner-2.jpeg",
  "/assets/images/Banner-3.jpeg",
];

const Home = () => {
  const { category, subcategory } = useParams();
  const [loadedImages, setLoadedImages] = useState({});

  const filteredProducts = category
    ? products.filter(
      (product) =>
        product.category === category && product.subcategory === subcategory
    )
    : products.slice(0, 20);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    adaptiveHeight: true,
  };

  // Función que maneja el estado de carga de cada imagen
  const handleImageLoad = (imgId) => {
    setLoadedImages((prev) => ({
      ...prev,
      [imgId]: true, // Marca como cargada la imagen específica
    }));
  };

  return (
    <div className="relative flex flex-col items-center justify-center text-center bg-[#D5CFDF] min-h-screen pt-[55px] sm:pt-[65px]">
      <FloatingSocialIcons />

      <section className="relative flex flex-col items-center justify-center px-4 py-6 sm:py-8 mt-6 sm:mt-6">
        <div className="flex items-center justify-center space-x-3 sm:space-x-6 relative z-10">
          <img
            src="/assets/images/Icon-1.png"
            alt="icon-christmas-1"
            className="w-10 sm:w-14 animate-bounce-slow"
          />

          <h1 className="text-3xl sm:text-4xl font-extrabold text-black">
            ¡Bienvenido a VivaWear!
          </h1>

          <img
            src="/assets/images/Icon-2.png"
            alt="icon-christmas-2"
            className="w-10 sm:w-14 animate-bounce-slow-delay"
          />
        </div>

        <p className="text-base sm:text-lg text-gray-700 max-w-md mx-auto mt-2">
          Diseñamos sonrisas en cada prenda.
        </p>
        <p className="text-base sm:text-lg text-gray-700 max-w-md mx-auto mt-2">
          Personaliza, combina y crea el look perfecto.
        </p>
      </section>

      {/* Carrusel */}
      <section className="w-full max-w-5xl mx-auto mb-8 sm:mb-12 px-2 sm:px-4">
        <Slider {...settings}>
          {carouselImages.map((img, index) => (
            <div key={index} className="relative flex justify-center">
              {/* Loader por imagen */}
              {!loadedImages[`carousel-${index}`] && (
                <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-50 z-10">
                  <div className="spinner-circle animate-spin-slow inline-block w-16 h-16 border-t-4 border-b-4 border-gray-900 rounded-full" />
                </div>
              )}

              <img
                src={img}
                alt={`Promoción ${index + 1}`}
                className="w-full h-[250px] sm:h-[400px] object-cover rounded-lg shadow-md"
                onLoad={() => handleImageLoad(`carousel-${index}`)} // Cuando se carga la imagen, ocultamos el loader
              />
            </div>
          ))}
        </Slider>
      </section>

      {/* Productos */}
      <section className="w-full max-w-6xl mx-auto px-4 pb-10">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-black mb-6">
          {category && subcategory
            ? `Productos en ${subcategory} de ${category}`
            : "Descubre Nuestro Mundo Viva"}
        </h2>

        {/* Filtra los productos según la categoría */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="relative border rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-lg transition-all"
            >
              {/* Loader en cada imagen de producto */}
              {!loadedImages[`product-${product.id}`] && (
                <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-50 z-10">
                  <div className="spinner-circle animate-spin-slow inline-block w-16 h-16 border-t-4 border-b-4 border-gray-900 rounded-full" />
                </div>
              )}

              <img
                src={product.img}
                alt={product.name}
                className="w-full h-36 sm:h-48 object-cover"
                onLoad={() => handleImageLoad(`product-${product.id}`)} // Cuando se carga la imagen, ocultamos el loader
              />
              <div className="p-2 sm:p-4 text-center">
                <h3 className="font-semibold text-sm sm:text-lg truncate">
                  {product.name}
                </h3>
                <p className="text-pink-500 font-bold text-sm sm:text-base">
                  {product.price}
                </p>
                <p className="text-gray-600 text-xs sm:text-sm mt-1 line-clamp-2">
                  {product.description}
                </p>
                <Link to={`/producto/${product.id}`}>
                  <button className="mt-2 w-full px-3 py-1 sm:py-2 bg-[#FE9494] text-white rounded hover:bg-pink-600 transition text-sm sm:text-base">
                    Ver más
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
