import React from "react";
import { FaWhatsapp, FaInstagram, FaFacebookF } from "react-icons/fa";

const FloatingSocialIcons = () => {
    const socialLinks = [
        {
            icon: <FaWhatsapp size={24} />,
            href: "https://wa.me/573043467419?text=¡Hola!%20Quiero%20más%20información%20sobre%20sus%20productos.",
            bgClass: "bg-[#25D366]",
        },
        {
            icon: <FaInstagram size={24} />,
            href: "https://www.instagram.com/vivawear_col?igsh=MW8xdXVtNWJ0OXE2ZA%3D%3D&utm_source=qr",
            bgClass: "bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF]",
        },
        {
            icon: <FaFacebookF size={24} />,
            href: "https://www.facebook.com/share/1BnVjxEAn1/?mibextid=wwXIfr",
            bgClass: "bg-[#1877F2]",
        },
    ];

    return (
        <div className="fixed right-3 bottom-4 flex flex-col gap-3 z-50">
            {socialLinks.map((link, index) => (
                <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${link.bgClass} text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform`}
                >
                    {link.icon}
                </a>
            ))}
        </div>
    );
};

export default FloatingSocialIcons;
