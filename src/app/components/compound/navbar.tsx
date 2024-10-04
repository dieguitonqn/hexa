import Link from "next/link"
import Image from "next/image"
import Navlink from "./navlink"





export default function Navbar() {
    return (
        <nav className="sticky top-0 bg-gray-950 p-4 shadow-cyan-500 shadow-lg border-4 border-black border-b-cyan-500 z-10">
            <div className="px-4">
                <div className="flex justify-between items-center">
                    <div className="flex items-center">
                        <Image
                            className='mx-4'
                            src="/hexa.png"
                            alt='Hexa logo'
                            width={50}
                            height={50}
                        />
                        <Link
                            href="/"
                            >
                            Hexa Automation
                        </Link>
                    </div>
                    <div className="hidden md:flex  ">
                        <ul className="flex ">

                            <li>
                                <Navlink
                                    href="/#nosotros"
                                    sectionId="nosotros">
                                    Nosotros
                                </Navlink>
                            </li>
                            <li>
                                <Navlink
                                    href="/#Servicios"
                                    sectionId="Servicios">
                                    Obras y Servicios
                                </Navlink>
                            </li>
                            <li>
                                <Navlink
                                    href="/#Marcas"
                                    sectionId="Marcas">
                                    Nuestras Marcas
                                </Navlink>
                            </li>
                            <li>
                                <Navlink
                                    href="/#Contacto"
                                    sectionId="Contacto">
                                    Contacto
                                </Navlink>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
        </nav>

    )
}