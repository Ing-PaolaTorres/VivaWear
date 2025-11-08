import React, { useEffect, useState } from "react";
import FloatingSocialIcons from "../components/FloatingSocialIcons";

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleToggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);

    const faqData = [
        {
            question: "¿Hacen envíos a todo el país?",
            answer: "Sí, realizamos envíos nacionales. Nos aseguramos de que tus productos lleguen a cualquier lugar de Colombia de manera segura y rápida."
        },
        {
            question: "¿Puedo personalizar la ropa?",
            answer: "¡Claro! Ofrecemos personalización de productos para bebés, niños y adultos. Puedes elegir colores, diseños y detalles únicos en tus prendas."
        },
        {
            question: "¿Cuál es el tiempo de entrega?",
            answer: "El tiempo de entrega depende de tu ubicación y del tipo de producto. Por lo general, los envíos tardan entre 3 y 7 días hábiles."
        },
        {
            question: "¿Qué métodos de pago aceptan?",
            answer: "Por ahora solo aceptamos pagos por transferencias bancarias, pero en un futuro aceptaremos pagos con tarjeta de crédito, débito, PSE o Addi. Todos los pagos son seguros."
        },
        {
            question: "¿Dónde están ubicados?",
            answer: "Somos una empresa ubicada en Cúcuta, Norte de Santander, y estamos comprometidos en ofrecer productos de calidad con atención personalizada."
        }
    ];

    return (
        <div className="relative bg-[#D5CFDF] flex flex-col items-center justify-center pt-30 sm:pt-8 md:pt-[120px] min-h-screen px-4 sm:px-6 pb-8">
            <FloatingSocialIcons />

            <section className="flex flex-col md:flex-row w-full max-w-6xl gap-8">
                {/* Columna izquierda: Imagen */}
                <div className="md:w-1/2 rounded-lg shadow-md overflow-hidden flex items-center justify-center">
                    <img
                        src="/assets/images/faq.png" // Asegúrate de poner la imagen correcta
                        alt="Preguntas Frecuentes"
                        className="w-full h-full object-cover rounded-lg"
                    />
                </div>

                {/* Columna derecha: Contenido */}
                <div className="md:w-1/2 flex flex-col gap-6">
                    {/* Título */}
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-black mb-4 text-center">
                        Preguntas Frecuentes
                    </h1>

                    {/* Párrafo descriptivo */}
                    <p className="text-gray-700 text-base sm:text-lg md:text-lg leading-relaxed text-justify mb-8">
                        En esta sección encontrarás respuestas a las preguntas más comunes sobre nuestros productos, servicios y políticas.
                        Si tienes alguna duda adicional, no dudes en ponerte en contacto con nosotros.
                        Estamos aquí para ayudarte y ofrecerte la mejor experiencia de compra posible.
                    </p>

                    {/* Preguntas y Respuestas */}
                    <div className="text-gray-700 text-base sm:text-lg md:text-lg leading-relaxed text-left space-y-6">
                        {faqData.map((item, index) => (
                            <div key={index}>
                                {/* Pregunta */}
                                <div
                                    onClick={() => handleToggle(index)}
                                    className="cursor-pointer font-semibold mb-1 text-lg sm:text-xl flex items-center justify-between hover:text-black transition-colors"
                                >
                                    <span>{item.question}</span>
                                    <span>{activeIndex === index ? "-" : "+"}</span>
                                </div>

                                {/* Respuesta */}
                                {activeIndex === index && (
                                    <p className="text-gray-600 mt-2 text-justify">
                                        {item.answer}
                                    </p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FAQ;
