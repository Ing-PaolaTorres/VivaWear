import React, { useState, useEffect } from "react";
import FloatingSocialIcons from "../components/FloatingSocialIcons";
import { FaWhatsapp } from "react-icons/fa";

const ContactUs = () => {
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        const text = `Hola! Mi nombre es ${name}. Mensaje: ${message}`;
        const whatsappUrl = `https://wa.me/573043467419?text=${encodeURIComponent(
            text
        )}`;
        window.open(whatsappUrl, "_blank");
    };

    return (
        <div className="relative flex flex-col items-center justify-center bg-[#D5CFDF] min-h-screen pt-[90px] sm:pt-[90px]">
            <FloatingSocialIcons />

            <section className="relative flex flex-col md:flex-row w-full max-w-6xl px-4 py-8 gap-8">
                {/* Columna izquierda: Imagen */}
                <div className="md:w-1/2 bg-white rounded-lg shadow-md flex items-center justify-center overflow-hidden">
                    <img
                        src="/assets/images/Banner-2.jpeg"
                        alt="Contacto"
                        className="w-full h-full object-cover rounded-lg"
                    />
                </div>

                {/* Columna derecha: Contenido */}
                <div className="md:w-1/2 flex flex-col gap-6">
                    {/* Título y texto */}
                    <div className="mb-2">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-black mb-4 leading-tight text-center">
                            Contáctanos
                        </h1>
                        <p className="text-lg sm:text-xl text-gray-800 font-semibold mb-3 text-left">
                            ¡En VivaWear estamos siempre disponibles para ayudarte!
                        </p>
                        <p className="text-gray-700 text-base sm:text-lg md:text-lg leading-relaxed text-left">
                            Ya sea que tengas <span className="font-semibold text-black">preguntas sobre nuestros productos</span>, <span className="font-semibold text-black">pedidos</span>, <span className="font-semibold text-black">personalización</span> o <span className="font-semibold text-black">envíos</span>, estamos aquí para atenderte de manera rápida y eficiente.
                        </p>
                        <p className="text-gray-700 text-base sm:text-lg md:text-lg leading-relaxed text-left mt-2">
                            Nuestro equipo se esfuerza por brindarte la mejor experiencia de compra, asegurando que cada detalle cumpla con tus expectativas. ¡<span className="font-semibold text-black">Contáctanos</span> y hacemos realidad tus sueños en la compra de ropa, acompañándote en cada paso del proceso con atención y dedicación!
                        </p>
                    </div>

                    {/* Formulario y enlaces en un solo contenedor */}
                    <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md flex flex-col gap-6">
                        {/* Formulario */}
                        <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
                            <input
                                type="text"
                                placeholder="Nombre completo"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-[#89cff0]"
                                required
                            />
                            <textarea
                                placeholder="Tu mensaje"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                className="w-full p-3 border rounded h-24 sm:h-32 focus:outline-none focus:ring-2 focus:ring-[#89cff0]"
                                required
                            />
                            <button
                                type="submit"
                                className="flex items-center justify-center gap-2 w-full bg-[#25D366] text-white py-3 rounded font-semibold hover:bg-green-600 transition text-sm sm:text-base"
                            >
                                <FaWhatsapp size={20} /> Enviar Mensaje
                            </button>
                        </form>

                        {/* Enlaces de contacto */}
                        <div className="flex flex-col space-y-2 text-left">
                            <p>
                                <strong>WhatsApp:</strong>{" "}
                                <a
                                    href="https://wa.me/573043467419"
                                    className="text-[#25D366] font-semibold"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    +57 304 346 7419
                                </a>
                            </p>
                            <p>
                                <strong>Instagram:</strong>{" "}
                                <a
                                    href="https://www.instagram.com/vivawear_col"
                                    className="text-pink-400 font-semibold"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    @vivawear_col
                                </a>
                            </p>
                            <p>
                                <strong>Facebook:</strong>{" "}
                                <a
                                    href="https://www.facebook.com/share/1BnVjxEAn1/?mibextid=wwXIfr"
                                    className="text-blue-600 font-semibold"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    VivaWear
                                </a>
                            </p>
                            <p>
                                <strong>Correo:</strong>{" "}
                                <a
                                    href="mailto:Vivawear03@gmail.com"
                                    className="text-red-500 font-semibold"
                                >
                                    Vivawear03@gmail.com
                                </a>
                            </p>
                            <p>
                                <strong>Ubicación:</strong> Cúcuta, Norte de Santander, Colombia
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactUs;
