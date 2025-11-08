import React, { useEffect } from "react";
import FloatingSocialIcons from "../components/FloatingSocialIcons";

const AboutUs = () => {

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);

    return (
        <div className="bg-[#D5CFDF] flex flex-col items-center justify-start pt-28 sm:pt-[120px] px-4 sm:px-6 relative pb-8">
            <FloatingSocialIcons />

            <section className="flex flex-col md:flex-row w-full max-w-6xl gap-8">
                {/* Columna izquierda: Imagen */}
                <div className="md:w-1/2 rounded-lg shadow-md overflow-hidden flex items-center justify-center">
                    <img
                        src="/assets/images/Banner-3.jpeg"
                        alt="Sobre VivaWear"
                        className="w-full h-full object-cover rounded-lg"
                    />
                </div>

                {/* Columna derecha: Contenido */}
                <div className="md:w-1/2 flex flex-col gap-6">
                    {/* Título */}
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-black mb-4 whitespace-nowrap">
                        ¡Bienvenido a VivaWear!
                    </h1>

                    { }
                    <div className="text-gray-700 text-base sm:text-lg md:text-lg leading-relaxed text-left space-y-4">
                        <p>
                            Somos una empresa de <span className="font-semibold text-black">Cúcuta, Norte de Santander</span>, dedicada a hacer realidad tus sueños en la compra de ropa. Desde prendas para <span className="font-semibold text-black">bebés y niños</span> hasta moda para <span className="font-semibold text-black">adultos</span>, diseñamos productos que combinan estilo, comodidad y diversión.
                        </p>

                        <p>
                            En VivaWear ofrecemos <span className="font-semibold text-black">personalización de productos</span> para que cada prenda sea única y refleje tu estilo. Puedes combinar, personalizar y crear el look perfecto para ti o tu familia.
                        </p>

                        <p>
                            Contamos con <span className="font-semibold text-black">envíos nacionales</span> para que tu experiencia de compra sea cómoda y segura, sin importar en qué parte del país te encuentres.
                        </p>

                        <p>
                            Únete a nuestra comunidad y descubre moda que se adapta a tu estilo de vida y que hace sentir especial a toda la familia. ¡Con VivaWear, cada compra es una <span className="font-semibold text-black">experiencia única</span>!
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutUs;
