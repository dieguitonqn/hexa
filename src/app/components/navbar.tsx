
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa"; // Librería react-icons para el ícono del menú
import { Hambuuguesa } from "./hamburguesa";

export default function Navbar() {
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
                            <li><Link href="/novedades" className="text-white hover:font-semibold p-5 transition-all duration-300 ease-in-out rounded-sm">Novedades</Link></li>
                            <li><Link href="/#clientes" className="text-white hover:font-semibold p-5 transition-all duration-300 ease-in-out rounded-sm">Clientes</Link></li>
                            <li><Link href="/#Contacto" className="text-white hover:font-semibold p-5 transition-all duration-300 ease-in-out rounded-sm">Contacto</Link></li>
                        </ul>
                    </div>
                    <Hambuuguesa />
                </div>

            </div>
        </nav>
    );
}
