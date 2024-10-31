import Link from "next/link"
import Image from "next/image"
import Navlink from "./navlink"





export default function Navbar() {
    return (
        <nav className="sticky top-0 bg-gray-950 p-4  border-black  z-20">
            <div className="px-4">
                <div className="flex justify-between items-center">
                    <div className="flex items-center">
                        
                        <Link
                            href="/"
                            >
                            <Image
                            // className='mx-4'
                            src="/hexa_blanco.png"
                            alt='Hexa logo'
                            width={100}
                            height={100}
                        />
                        </Link>
                    </div>
                    <div className="hidden md:flex  ">
                        <ul className="flex  ">

                            <li>
                                <Link
                                    href="/#nosotros"
                                    className="text-white hover:font-semibold p-5 transition-all duration-300 ease-in-out hover:before:absolute rounded-sm"
                                    // sectionId="nosotros">
                                    >
                                    Nosotros
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/#Servicios"
                                    // sectionId="Servicios">
                                    className="text-white hover:font-semibold p-5 transition-all duration-300 ease-in-out hover:before:absolute rounded-sm"
                                    >
                                    Obras y Servicios
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/#Marcas"
                                    // sectionId="Marcas">
                                    className="text-white hover:font-semibold p-5 transition-all duration-300 ease-in-out hover:before:absolute rounded-sm"
                                    >
                                    Nuestras Marcas
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/galeria"
                                    className="text-white hover:font-semibold p-5 transition-all duration-300 ease-in-out hover:before:absolute rounded-sm"
                                    >
                                    Galería
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/exitos"
                                    className="text-white hover:font-semibold p-5 transition-all duration-300 ease-in-out hover:before:absolute rounded-sm"
                                    >
                                    Casos de éxito
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/#Contacto"
                                    // sectionId="Contacto">
                                    className="text-white hover:font-semibold p-5 transition-all duration-300 ease-in-out hover:before:absolute rounded-sm"  
                                    >
                                    Contacto
                                </Link>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
        </nav>

    )
}