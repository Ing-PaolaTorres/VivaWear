import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// Ejemplo de productos
const products = [
  {
    id: 1,
    name: "T-Shirt Minnie",
    price: "$48.000",
    description: "Camiseta Minnie de algodón suave y transpirable. Perfecta para el día a día con total comodidad y diversión.",
    sizes: ["XS", "S", "M", "L"],
    images: [
      "/assets/images/product-1.jpeg",
      "/assets/images/product-2.jpeg",
    ],
  },
  {
    id: 2,
    name: "T-Shirt Mickey",
    price: "$48.000",
    description: "Camiseta Mickey en algodón ligero, alegre y cómoda. Ideal para paseos, juegos y actividades cotidianas.",
    sizes: ["XS", "S", "M", "L"],
    images: [
      "/assets/images/product-4.jpeg",
      "/assets/images/product-3.jpeg",
    ],
  },
  {
    id: 3,
    name: "T-Shirt Friends",
    price: "$12.990",
    description: "Camiseta Friends en suave tono rosa pastel. Tela de alta calidad que mantiene a tu pequeño fresco y cómodo todo el día.",
    sizes: ["XS", "S", "M", "L"],
    images: [
      "/assets/images/product-7.jpeg",
    ],
  },
  {
    id: 4,
    name: "Conjunto Minnie - Sudadera",
    price: "$93.000",
    description: "Conjunto de sudadera Minnie con pantalón de cintura elástica. Ideal para jugar, salir o disfrutar en casa con estilo y comodidad.",
    sizes: ["XS", "S", "M", "L"],
    images: [
      "/assets/images/product-8.jpeg",
    ],
  },
  {
    id: 5,
    name: "Conjunto Minnie - Short",
    price: "$85.000",
    description: "Conjunto de short Minnie en algodón ligero. Cómodo, fresco y perfecto para días cálidos llenos de diversión.",
    sizes: ["XS", "S", "M", "L"],
    images: [
      "/assets/images/product-9.jpeg",
    ],
  }
];

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));
  const [mainImage, setMainImage] = useState(product ? product.images[0] : "");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);

  if (!product)
    return (
      <p className="text-center mt-10 text-gray-700">Producto no encontrado</p>
    );

  return (
    <div className="bg-[#EAF8FB] min-h-screen px-4 sm:px-8 pt-[90px] sm:pt-[120px]">
      <div className="flex flex-col lg:flex-row lg:space-x-8">
        <div className="lg:w-1/2 flex flex-col lg:flex-row">
          {product.images.length > 1 && (
            <div className="flex lg:flex-col space-x-2 lg:space-x-0 lg:space-y-2 mb-4 lg:mb-0">
              {product.images.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`${product.name} miniatura ${idx + 1}`}
                  className={`w-16 h-16 lg:w-20 lg:h-20 object-cover rounded cursor-pointer border-2 ${mainImage === img ? "border-[#F773BC]" : "border-transparent"
                    }`}
                  onClick={() => setMainImage(img)}
                />
              ))}
            </div>
          )}

          <div className="flex-1">
            <img
              src={mainImage}
              alt={product.name}
              className="w-full h-64 sm:h-96 lg:h-full object-cover rounded-lg shadow-md"
            />
          </div>
        </div>

        <div className="lg:w-1/2 mt-6 lg:mt-0 flex flex-col justify-start">
          <h1 className="text-2xl sm:text-3xl font-bold text-[#F773BC] mb-2 sm:mb-4">
            {product.name}
          </h1>
          <p className="text-xl sm:text-2xl text-pink-500 font-semibold mb-6">
            {product.price}
          </p>

          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-2">Descripción</h2>
            <p className="text-gray-700 text-sm sm:text-base">{product.description}</p>
          </div>

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

          {/* <button className="w-full py-3 sm:py-4 bg-[#FE9494] text-white rounded hover:bg-pink-600 transition font-semibold text-base sm:text-lg">
            Agregar al carrito
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
