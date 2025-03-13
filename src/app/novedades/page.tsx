import React from "react";
import Novedad from "../components/Novedad";
import Redes from "../components/redes";


export default function Novedades() {
    return (
        <div className="w-3/4 m-auto">
            {/* Secciónd e título */}
            <section className="relative bg-gray-900 text-white h-96 flex items-center justify-center bg-cover bg-center  mt-20"
                style={{ backgroundImage: `url('/FotosHexa/hexa-foto-6.jpeg')` }}>
                {/* Overlay para oscurecer la imagen */}
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="flex-col z-10 justify-center text-center">
                    <h1 className="text-6xl ">Novedades de Hexa Automation</h1>
                    <h2 className="text-4xl mt-5">¡Enterate de las últimas noticias!</h2>
                </div>

            </section>

            <Redes />

            <section>
                <Novedad
                    fecha="12/11/2024"
                    titulo="Titulo 1"
                    foto="/FotosHexa/hexa-foto-1.jpeg"
                    texto="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam corrupti veritatis maxime, voluptate voluptas amet exercitationem incidunt ipsam consequuntur alias aliquam, doloremque, aperiam sequi facilis optio sed rerum suscipit earum."
                />
                <Novedad
                    fecha="12/10/2024"
                    titulo="Titulo 2"
                    foto="/FotosHexa/hexa-foto-2.jpeg"
                    texto="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam corrupti veritatis maxime, voluptate voluptas amet exercitationem incidunt ipsam consequuntur alias aliquam, doloremque, aperiam sequi facilis optio sed rerum suscipit earum."
                /><Novedad
                    fecha="12/09/2024"
                    titulo="Titulo 3"
                    foto="/FotosHexa/hexa-foto-3.jpeg"
                    texto="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam corrupti veritatis maxime, voluptate voluptas amet exercitationem incidunt ipsam consequuntur alias aliquam, doloremque, aperiam sequi facilis optio sed rerum suscipit earum."
                /><Novedad
                    fecha="12/08/2024"
                    titulo="Titulo 4"
                    foto="/FotosHexa/hexa-foto-4.jpeg"
                    texto="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam corrupti veritatis maxime, voluptate voluptas amet exercitationem incidunt ipsam consequuntur alias aliquam, doloremque, aperiam sequi facilis optio sed rerum suscipit earum."
                /><Novedad
                    fecha="12/07/2024"
                    titulo="Titulo 5"
                    foto="/FotosHexa/hexa-foto-5.jpeg"
                    texto="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam corrupti veritatis maxime, voluptate voluptas amet exercitationem incidunt ipsam consequuntur alias aliquam, doloremque, aperiam sequi facilis optio sed rerum suscipit earum."
                />
            </section>
        </div>
    )
}