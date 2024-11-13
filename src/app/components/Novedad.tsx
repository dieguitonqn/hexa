import React from "react";
import Image from "next/image";

interface novedad{
    foto:string,
    titulo:string
    texto:string,
    fecha:string
}

export default function Novedad({fecha,titulo,texto,foto}:novedad) {
    return (
        <>
            <div className="  flex flex-row mt-10 pb-10 border-b-1">
                <Image
                    src={foto}
                    alt={titulo}
                    width={200}
                    height={300}
                />
                <div className="flex-col gap-1">
                    <h2 className="text-md">{fecha}</h2>
                    <h1 className="text-2xl font-semibold">{titulo}</h1>
                    {texto}
                </div>

            </div>

        </>

    )
}