import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { products } from "../data/detail-products";

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
    <div className="bg-[#D5CFDF] min-h-screen px-4 sm:px-8 pt-[90px] sm:pt-[120px]">
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
              className="w-full h-64 sm:h-96 lg:h-96 object-contain rounded-lg shadow-md"
            />
          </div>
        </div>

        <div className="lg:w-1/2 mt-6 lg:mt-0 flex flex-col justify-start">
          <h1 className="text-2xl sm:text-3xl font-bold text-black mb-2 sm:mb-4">
            {product.name}
          </h1>
          <p className="text-xl sm:text-2xl text-black font-semibold mb-6">
            {product.price}
          </p>

          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-2">Descripción</h2>
            <p className="text-gray-700 text-sm sm:text-base text-justify">{product.description}</p>
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
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
