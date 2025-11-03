import React from "react";
import { Link } from "react-router-dom";
import { FaWhatsapp, FaInstagram, FaFacebookF } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const carouselImages = [
  "https://images.pexels.com/photos/3965546/pexels-photo-3965546.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
  "https://images.pexels.com/photos/5632377/pexels-photo-5632377.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
  "https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
];

const products = [
  {
    id: 1,
    name: "T-Shirt Minnie",
    price: "$48.000",
    img: "/assets/images/product-1.jpeg",
    description:
      "Camiseta Minnie de algodón suave y transpirable. Perfecta para el día a día con total comodidad y diversión.",
  },
  {
    id: 2,
    name: "T-Shirt Mickey",
    price: "$48.000",
    img: "/assets/images/product-4.jpeg",
    description:
      "Camiseta Mickey en algodón ligero, alegre y cómoda. Ideal para paseos, juegos y actividades cotidianas.",
  },
  {
    id: 3,
    name: "T-Shirt Friends",
    price: "$48.000",
    img: "/assets/images/product-7.jpeg",
    description:
      "Camiseta Friends en suave tono rosa pastel. Tela de alta calidad que mantiene a tu pequeño fresco y cómodo todo el día.",
  },
  {
    id: 4,
    name: "Conjunto Minnie - Sudadera",
    price: "$93.000",
    img: "/assets/images/product-8.jpeg",
    description:
      "Conjunto de sudadera Minnie con pantalón de cintura elástica. Ideal para jugar, salir o disfrutar en casa con estilo y comodidad.",
  },
  {
    id: 5,
    name: "Conjunto Minnie - Short",
    price: "$85.000",
    img: "/assets/images/product-9.jpeg",
    description:
      "Conjunto de short Minnie en algodón ligero. Cómodo, fresco y perfecto para días cálidos llenos de diversión.",
  },
];

const Home = () => {
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

  return (
    <div className="relative flex flex-col items-center justify-center text-center bg-[#EAF8FB] min-h-screen pt-[55px] sm:pt-[65px]">
      {/* 🟢 Etiquetas flotantes laterales derechas */}
      <div className="fixed right-3 bottom-24 flex flex-col gap-3 z-50">
        {/* WhatsApp */}
        <a
          href="https://wa.me/573043467419?text=¡Hola!%20Quiero%20más%20información%20sobre%20sus%20productos."
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#25D366] text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform"
        >
          <FaWhatsapp size={24} />
        </a>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/vivawear_col?igsh=MW8xdXVtNWJ0OXE2ZA%3D%3D&utm_source=qr"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform"
        >
          <FaInstagram size={24} />
        </a>

        {/* Facebook */}
        <a
          href="https://www.facebook.com/share/1BnVjxEAn1/?mibextid=wwXIfr"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#1877F2] text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform"
        >
          <FaFacebookF size={24} />
        </a>
      </div>

      <section className="relative flex flex-col items-center justify-center px-4 py-6 sm:py-8 mt-6 sm:mt-6">
        <div className="flex items-center justify-center space-x-3 sm:space-x-6 relative z-10">
          {/* 👶 Bebé izquierdo */}
          <img
            src="https://cdn-icons-png.flaticon.com/512/414/414957.png"
            alt="Bebé dibujo"
            className="w-10 sm:w-14 animate-bounce-slow"
          />

          {/* Texto principal */}
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#FE9494]">
            ¡Bienvenido a VivaWear!
          </h1>

          {/* 👶 Bebé derecho */}
          <img
            src="https://cdn-icons-png.flaticon.com/512/414/414967.png"
            alt="Bebé dibujo"
            className="w-10 sm:w-14 animate-bounce-slow-delay"
          />
        </div>

        <p className="text-base sm:text-lg text-gray-700 max-w-md mx-auto mt-2">
          Ropa tierna y cómoda para los más pequeños.
        </p>
      </section>

      {/* Carrusel */}
      <section className="w-full max-w-5xl mx-auto mb-8 sm:mb-12 px-2 sm:px-4">
        <Slider {...settings}>
          {carouselImages.map((img, index) => (
            <div key={index} className="flex justify-center">
              <img
                src={img}
                alt={`Promoción ${index + 1}`}
                className="w-full h-[250px] sm:h-[400px] object-cover rounded-lg shadow-md"
              />
            </div>
          ))}
        </Slider>
      </section>

      {/* Productos */}
      <section className="w-full max-w-6xl mx-auto px-4 pb-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#FE9494] mb-6">
          Nuestros Productos
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="border rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-lg transition-all"
            >
              <img
                src={product.img}
                alt={product.name}
                className="w-full h-36 sm:h-48 object-cover"
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
