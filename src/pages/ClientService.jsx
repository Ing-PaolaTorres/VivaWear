import React, { useEffect } from "react";
import FloatingSocialIcons from "../components/FloatingSocialIcons";

const ClientService = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);

    return (
        <div className="relative bg-[#D5CFDF] flex flex-col items-center justify-center pt-30 sm:pt-28 sm:pt-[120px] min-h-screen px-4 sm:px-6 pb-8">
            <FloatingSocialIcons />

            <section className="flex flex-col md:flex-row w-full max-w-6xl gap-8">
                {/* Columna izquierda: Imagen */}
                <div className="md:w-1/2 rounded-lg shadow-md overflow-hidden flex items-center justify-center">
                    <img
                        src="/assets/images/client-service.jpg"
                        alt="Servicio al Cliente"
                        className="w-full h-full object-cover rounded-lg"
                    />
                </div>

                {/* Columna derecha: Contenido */}
                <div className="md:w-1/2 flex flex-col gap-6">
                    {/* Título */}
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-black mb-6 text-center">
                        Servicio al Cliente
                    </h1>

                    {/* Texto de presentación */}
                    <div className="text-gray-700 text-base sm:text-lg md:text-lg leading-relaxed text-left space-y-6">
                        <p className="leading-relaxed">
                            En <span className="font-semibold text-black">VivaWear</span> nos preocupamos por ofrecer la mejor experiencia a nuestros clientes. Nuestro equipo de atención al cliente está disponible para ayudarte con cualquier consulta o inconveniente que puedas tener.
                        </p>

                        <p className="leading-relaxed">
                            Puedes contactarnos para:
                        </p>

                        <ul className="list-disc list-inside space-y-2 text-left pl-4">
                            <li><span className="font-semibold text-black">Información sobre productos</span> y disponibilidad.</li>
                            <li><span className="font-semibold text-black">Soporte en la personalización</span> de tus prendas.</li>
                            <li><span className="font-semibold text-black">Seguimiento de tus pedidos</span> y envíos.</li>
                            <li><span className="font-semibold text-black">Devoluciones, cambios</span> y garantías.</li>
                            <li><span className="font-semibold text-black">Consultas generales</span> sobre nuestra empresa en Cúcuta, Norte de Santander.</li>
                        </ul>

                        <p className="leading-relaxed">
                            Puedes comunicarte con nosotros a través de los siguientes canales:
                        </p>

                        <ul className="list-disc list-inside space-y-2 text-left pl-4">
                            <li>
                                WhatsApp:{" "}
                                <a
                                    href="https://wa.me/573043467419"
                                    className="text-[#25D366] font-semibold hover:text-[#128C7E] transition-colors"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    +57 304 346 7419
                                </a>
                            </li>
                            <li>
                                Correo electrónico:{" "}
                                <a
                                    href="mailto:Vivawear03@gmail.com"
                                    className="text-[#FE9494] font-semibold hover:text-[#D34B4B] transition-colors"
                                >
                                    Vivawear03@gmail.com
                                </a>
                            </li>
                            <li>
                                Instagram:{" "}
                                <a
                                    href="https://www.instagram.com/vivawear_col"
                                    className="text-pink-400 font-semibold hover:text-pink-600 transition-colors"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    @vivawear_col
                                </a>
                            </li>
                            <li>
                                Facebook:{" "}
                                <a
                                    href="https://www.facebook.com/share/1BnVjxEAn1/?mibextid=wwXIfr"
                                    className="text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    VivaWear
                                </a>
                            </li>
                        </ul>

                        <p className="leading-relaxed">
                            Nuestro objetivo es hacer realidad tus sueños en la compra de ropa, asegurando que cada experiencia con <span className="font-semibold text-black">VivaWear</span> sea sencilla, rápida y satisfactoria. Además, ofrecemos <span className="font-semibold text-black">personalización de productos</span> y <span className="font-semibold text-black">envíos nacionales</span>.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ClientService;
