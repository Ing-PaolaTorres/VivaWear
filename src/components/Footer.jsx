import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

const sections = [
  {
    title: "Quiénes somos",
    links: [
      { label: "Conócenos", to: "/conocenos" },
      { label: "Contáctanos", to: "/contacto" },
    ],
  },
  {
    title: "Atención al cliente",
    links: [
      { label: "Servicio al cliente", to: "/servicio-cliente" },
      { label: "Preguntas frecuentes", to: "/preguntas-frecuentes" },
    ],
  },
  {
    title: "Legales",
    links: [{ label: "Términos y condiciones", to: "/terminos" }],
  },
];

const socialLinks = [
  {
    icon: <FaFacebookF size={18} />,
    href: "https://www.facebook.com/share/1BnVjxEAn1/?mibextid=wwXIfr",
    hoverClass: "hover:text-[#A3CEF1]",
    label: "Facebook",
  },
  {
    icon: <FaInstagram size={18} />,
    href: "https://www.instagram.com/vivawear_col",
    hoverClass: "hover:text-[#F9C6C9]",
    label: "Instagram",
  },
  {
    icon: <FaWhatsapp size={18} />,
    href: "https://wa.me/573043467419",
    hoverClass: "hover:text-[#25D366]",
    label: "WhatsApp",
  },
];

const Footer = () => {
  return (
    <footer className="bg-[#89cff0] text-black py-8 sm:py-10 px-5 sm:px-8 mt-0">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center sm:text-left">
        {sections.map(({ title, links }) => (
          <div key={title}>
            <h3 className="text-black font-semibold mb-3 sm:mb-4 text-base sm:text-lg">
              {title}
            </h3>
            <ul className="space-y-1 sm:space-y-2 text-sm">
              {links.map(({ label, to }) => (
                <li key={label}>
                  <Link
                    to={to}
                    className="text-black/90 hover:text-black transition"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Redes Sociales */}
        <div>
          <h3 className="text-black font-semibold mb-3 sm:mb-4 text-base sm:text-lg">
            Síguenos
          </h3>
          <div className="flex justify-center sm:justify-start space-x-4 mt-2">
            {socialLinks.map(({ icon, href, hoverClass, label }) => (
              <a
                key={label}
                href={href}
                className={`${hoverClass} transition`}
                aria-label={label}
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/30 mt-8 mb-4 mx-auto w-4/5 sm:w-full"></div>

      <p className="text-center text-xs sm:text-sm text-black/90">
        &copy; {new Date().getFullYear()}{" "}
        <span className="font-semibold">VivaWear</span>. Todos los derechos reservados.
      </p>
    </footer>
  );
};

export default Footer;
