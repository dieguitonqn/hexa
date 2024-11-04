'use client'
import { FaBars, FaTimes } from "react-icons/fa"; // Librería react-icons para el ícono del menú
import { useState } from "react";
import Link from "next/link";



export const Hambuuguesa = () => {

const [isOpen, setIsOpen] = useState(false);

const toggleMenu = () => {
    setIsOpen(!isOpen);
};
    return (
        <div className="md:hidden flex flex-col items-center">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
                {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
            


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
            )
            }
        </div>
    )
}