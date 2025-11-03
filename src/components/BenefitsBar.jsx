import React from "react";
import { FaLock, FaTruck, FaMapMarkedAlt } from "react-icons/fa";

const BenefitsBar = () => {
  return (
    <div className="bg-[#F9C6C9] py-6 sm:py-8 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 text-center">
        {/* Pago seguro */}
        <div className="flex flex-col items-center space-y-2 sm:space-y-3">
          <FaLock className="text-3xl sm:text-4xl text-[#7ABF62]" />
          <h4 className="font-semibold text-gray-800 text-base sm:text-lg">
            Pago seguro
          </h4>
          <p className="text-xs sm:text-sm text-gray-700 max-w-[200px]">
            Tus compras protegidas 100%
          </p>
        </div>

        {/* Envío gratis */}
        <div className="flex flex-col items-center space-y-2 sm:space-y-3">
          <FaTruck className="text-3xl sm:text-4xl text-[#84CDE0]" />
          <h4 className="font-semibold text-gray-800 text-base sm:text-lg">
            Envíos gratis
          </h4>
          <p className="text-xs sm:text-sm text-gray-700 max-w-[200px]">
            Por compras superiores a $149.000
          </p>
        </div>

        {/* Entrega nacional */}
        <div className="flex flex-col items-center space-y-2 sm:space-y-3">
          <FaMapMarkedAlt className="text-3xl sm:text-4xl text-[#FFA255]" />
          <h4 className="font-semibold text-gray-800 text-base sm:text-lg">
            Entrega nacional
          </h4>
          <p className="text-xs sm:text-sm text-gray-700 max-w-[200px]">
            A todo el país sin recargo
          </p>
        </div>
      </div>
    </div>
  );
};

export default BenefitsBar;
