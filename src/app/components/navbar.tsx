'use client'
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa"; // Librería react-icons para el ícono del menú

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="sticky top-0 bg-gray-950 p-4 border-black z-20">
            <div className="px-4">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <div className="flex items-center">
                        <Link href="/">
                            <Image
                                src="/hexa_blanco.png"
                                alt="Hexa logo"
                                width={100}
                                height={100}
                            />
                        </Link>
                    </div>
                    {/* Menú de Navegación */}
                    <div className="hidden md:flex">
                        <ul className="flex">
                            <li><Link href="/#nosotros" className="text-white hover:font-semibold p-5 transition-all duration-300 ease-in-out rounded-sm">Nosotros</Link></li>
                            <li><Link href="/#Servicios" className="text-white hover:font-semibold p-5 transition-all duration-300 ease-in-out rounded-sm">Obras y Servicios</Link></li>
                            <li><Link href="/#Marcas" className="text-white hover:font-semibold p-5 transition-all duration-300 ease-in-out rounded-sm">Nuestras Marcas</Link></li>
                            <li><Link href="/galeria" className="text-white hover:font-semibold p-5 transition-all duration-300 ease-in-out rounded-sm">Galería</Link></li>
                            <li><Link href="/exitos" className="text-white hover:font-semibold p-5 transition-all duration-300 ease-in-out rounded-sm">Casos de éxito</Link></li>
                            <li><Link href="/#clientes" className="text-white hover:font-semibold p-5 transition-all duration-300 ease-in-out rounded-sm">Clientes</Link></li>
                            <li><Link href="/#Contacto" className="text-white hover:font-semibold p-5 transition-all duration-300 ease-in-out rounded-sm">Contacto</Link></li>
                        </ul>
                    </div>
                    {/* Botón de menú móvil */}
                    <div className="md:hidden flex items-center">
                        <button onClick={toggleMenu} className="text-white focus:outline-none">
                            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                        </button>
                    </div>
                </div>
                {/* Menú desplegable para móviles */}
                {isOpen && (
                    <div className="md:hidden mt-4">
                        <ul className="flex flex-col space-y-2">
                            <li><Link href="/#nosotros" className="text-white hover:font-semibold p-2 transition-all duration-300 ease-in-out rounded-sm">Nosotros</Link></li>
                            <li><Link href="/#Servicios" className="text-white hover:font-semibold p-2 transition-all duration-300 ease-in-out rounded-sm">Obras y Servicios</Link></li>
                            <li><Link href="/#Marcas" className="text-white hover:font-semibold p-2 transition-all duration-300 ease-in-out rounded-sm">Nuestras Marcas</Link></li>
                            <li><Link href="/galeria" className="text-white hover:font-semibold p-2 transition-all duration-300 ease-in-out rounded-sm">Galería</Link></li>
                            <li><Link href="/exitos" className="text-white hover:font-semibold p-2 transition-all duration-300 ease-in-out rounded-sm">Casos de éxito</Link></li>
                            <li><Link href="/#clientes" className="text-white hover:font-semibold p-2 transition-all duration-300 ease-in-out rounded-sm">Clientes</Link></li>
                            <li><Link href="/#Contacto" className="text-white hover:font-semibold p-2 transition-all duration-300 ease-in-out rounded-sm">Contacto</Link></li>
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    );
}
