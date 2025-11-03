import React, { useState } from "react";
import { useParams } from "react-router-dom";

// Ejemplo de productos
const products = [
  {
    id: 1,
    name: "Camiseta Rosa",
    price: "$12.990",
    description: "Camiseta de algodón suave color rosa, perfecta para el día a día de los más pequeños. Cómoda y transpirable.",
    sizes: ["XS", "S", "M", "L"],
    images: [
      "/Ecommerce-Vivawear/assets/images/product-1.jpeg",
      "/Ecommerce-Vivawear/assets/images/product-2.jpeg",
      "/Ecommerce-Vivawear/assets/images/product-3.jpeg",
    ],
  },
  {
    id: 2,
    name: "Pantalón Azul",
    price: "$18.500",
    description: "Pantalón azul de algodón con cintura elástica, ideal para jugar y moverse con total comodidad.",
    sizes: ["XS", "S", "M", "L"],
    images: [
      "/Ecommerce-Vivawear/assets/images/product-1.jpeg",
      "/Ecommerce-Vivawear/assets/images/product-2.jpeg",
      "/Ecommerce-Vivawear/assets/images/product-3.jpeg",
    ],
  },
  {
    id: 3,
    name: "Vestido Amarillo",
    price: "$22.000",
    description: "Vestido amarillo brillante, ligero y fresco, ideal para salidas y ocasiones especiales.",
    sizes: ["XS", "S", "M", "L"],
    images: [
      "/Ecommerce-Vivawear/assets/images/product-1.jpeg",
      "/Ecommerce-Vivawear/assets/images/product-2.jpeg",
      "/Ecommerce-Vivawear/assets/images/product-3.jpeg",
    ],
  },
  {
    id: 4,
    name: "Camiseta Rosa",
    price: "$12.990",
    description: "Camiseta rosa con estampado divertido, tela suave y resistente, perfecta para el juego diario.",
    sizes: ["XS", "S", "M", "L"],
    images: [
      "/Ecommerce-Vivawear/assets/images/product-1.jpeg",
      "/Ecommerce-Vivawear/assets/images/product-2.jpeg",
      "/Ecommerce-Vivawear/assets/images/product-3.jpeg",
    ],
  },
  {
    id: 5,
    name: "Pantalón Azul",
    price: "$18.500",
    description: "Pantalón azul cómodo con detalles reforzados, ideal para actividades al aire libre.",
    sizes: ["XS", "S", "M", "L"],
    images: [
      "/Ecommerce-Vivawear/assets/images/product-1.jpeg",
      "/Ecommerce-Vivawear/assets/images/product-2.jpeg",
      "/Ecommerce-Vivawear/assets/images/product-3.jpeg",
    ],
  },
  {
    id: 6,
    name: "Vestido Amarillo",
    price: "$22.000",
    description: "Vestido amarillo ligero con textura suave, perfecto para paseos y celebraciones.",
    sizes: ["XS", "S", "M", "L"],
    images: [
      "/Ecommerce-Vivawear/assets/images/product-1.jpeg",
      "/Ecommerce-Vivawear/assets/images/product-2.jpeg",
      "/Ecommerce-Vivawear/assets/images/product-3.jpeg",
    ],
  },
  {
    id: 7,
    name: "Camiseta Rosa",
    price: "$12.990",
    description: "Camiseta rosa clásica, cómoda y fácil de combinar, ideal para el día a día de los niños.",
    sizes: ["XS", "S", "M", "L"],
    images: [
      "/Ecommerce-Vivawear/assets/images/product-1.jpeg",
      "/Ecommerce-Vivawear/assets/images/product-2.jpeg",
      "/Ecommerce-Vivawear/assets/images/product-3.jpeg",
    ],
  },
  {
    id: 8,
    name: "Pantalón Azul",
    price: "$18.500",
    description: "Pantalón azul resistente con corte cómodo, perfecto para la escuela y actividades diarias.",
    sizes: ["XS", "S", "M", "L"],
    images: [
      "/Ecommerce-Vivawear/assets/images/product-1.jpeg",
      "/Ecommerce-Vivawear/assets/images/product-2.jpeg",
      "/Ecommerce-Vivawear/assets/images/product-3.jpeg",
    ],
  },
  {
    id: 9,
    name: "Vestido Amarillo",
    price: "$22.000",
    description: "Vestido amarillo con diseño elegante y cómodo, ideal para días soleados y eventos especiales.",
    sizes: ["XS", "S", "M", "L"],
    images: [
      "/Ecommerce-Vivawear/assets/images/product-1.jpeg",
      "/Ecommerce-Vivawear/assets/images/product-2.jpeg",
      "/Ecommerce-Vivawear/assets/images/product-3.jpeg",
    ],
  },
];

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));
  const [mainImage, setMainImage] = useState(product ? product.images[0] : "");

  if (!product)
    return (
      <p className="text-center mt-10 text-gray-700">Producto no encontrado</p>
    );

  return (
    <div className="bg-[#EAF8FB] min-h-screen px-4 py-6 sm:px-8 sm:py-10 pt-[70px] sm:pt-[80px]">
      <div className="flex flex-col lg:flex-row lg:space-x-8">
        {/* Columna izquierda: imagen */}
        <div className="lg:w-1/2 flex flex-col lg:flex-row">
          {/* Miniaturas verticales */}
          {product.images.length > 1 && (
            <div className="flex lg:flex-col space-x-2 lg:space-x-0 lg:space-y-2 mb-4 lg:mb-0">
              {product.images.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`${product.name} miniatura ${idx + 1}`}
                  className={`w-16 h-16 lg:w-20 lg:h-20 object-cover rounded cursor-pointer border-2 ${
                    mainImage === img
                      ? "border-[#F773BC]"
                      : "border-transparent"
                  }`}
                  onClick={() => setMainImage(img)}
                />
              ))}
            </div>
          )}

          {/* Imagen principal */}
          <div className="flex-1">
            <img
              src={mainImage}
              alt={product.name}
              className="w-full h-64 sm:h-96 lg:h-full object-cover rounded-lg shadow-md"
            />
          </div>
        </div>

        {/* Columna derecha: info */}
        <div className="lg:w-1/2 mt-6 lg:mt-0 flex flex-col justify-start">
          <h1 className="text-2xl sm:text-3xl font-bold text-[#F773BC] mb-2 sm:mb-4">
            {product.name}
          </h1>
          <p className="text-xl sm:text-2xl text-pink-500 font-semibold mb-6">
            {product.price}
          </p>

          {/* Descripción */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-2">Descripción</h2>
            <p className="text-gray-700 text-sm sm:text-base">
              {product.description}
            </p>
          </div>

          {/* Tallas disponibles */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-2">Tallas disponibles</h2>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map((size) => (
                <span
                  key={size}
                  className="px-3 py-1 border rounded bg-white text-gray-700 text-sm sm:text-base"
                >
                  {size}
                </span>
              ))}
            </div>
          </div>

          {/* Botón agregar al carrito */}
          <button className="w-full py-3 sm:py-4 bg-[#FE9494] text-white rounded hover:bg-pink-600 transition font-semibold text-base sm:text-lg">
            Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
