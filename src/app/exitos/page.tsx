import React from "react";
import Image from "next/image";
import Link from "next/link";

interface SuccessCase {
    title: string;
    description: string;
    imageUrl: string;
    image2url?: string
    link?: string;
    cliente?: string
}


const successCases: SuccessCase[] = [
    {
        title: "Planta Compresora Tratayén",
        description: "Sistema de Control, Seguridad y Visualización SCADA para la Planta Compresora Tratayén, en la provincia de Neuquén. La planta, propiedad de Enarsa, construida por    SACDE y operada por TGS, cuenta con una capacidad de producción de 5 millones de metros cúbicos por día (5MM m³/día) que se incorporarán al Gasoducto Presidente Néstor Kirchner (GPNK). El sistema SCADA integra tecnología de control, seguridad y visualización de Yokogawa, desarrollado en colaboración con los integradores Yokogawa y Hexa Automation.",
        imageUrl: "/FotosHexa/hexa-foto-13.jpeg",
        
    },
    {
        title: "Desarrollo SCADA NC - El Trapial",
        description: "Desarrollo de Sistema de Visualización y Operación SCADA para todo el Yacimiento NC El Trapial. Este proyecto, propiedad de Chevron y operado por Chevron, está basado en tecnología de Rockwell Automation. Se implementa una solución distribuida de última tecnología, con 10 instalaciones en servicio en la primera etapa y una proyección de 50 instalaciones en los próximos 4 años, desarrollado con el integrador Hexa Automation.",

        imageUrl: "/FotosHexa/hexa-foto-1.jpeg",
        
    },
    {
        title: "Planta Compresora Salliqueló",
        description: "Sistema de Control, Seguridad y Visualización SCADA para la Planta Compresora Salliqueló, en la provincia de Neuquén. Este proyecto, perteneciente a YPF y TGS, fue construido por Fricsa SA, con instrumentación y control a cargo de Hexa Automatio. Utiliza tecnología de control, seguridad y visualización SCADA de Yokogawa.",
        imageUrl: "/PC_Salliquelo.webp",
        
    },
    {
        title: "Ampliación EMED Tratayén Fase II",
        description: "Obra de ampliación del sistema de Instrumentación y Control Yokogawa para el nuevo filtro y cuadro de regulación en la Estación de Medición Tratayén, propiedad de YPF y operada por TGS. La instrumentación y control están a cargo de Hexa Automation.",
        imageUrl:"/FotosHexa/hexa-foto-3.jpeg"
        
    },
    {
        title:"Sistema Contra Incendios, Bajo del Choique",
        description:"Obra de Instrumentación en Planta Bajo del Choique, propiedad de Exxon Mobile. Este proyecto incluye el tendido de cables de instrumentación y potencia, sistemas de puesta a tierra (PAT), montaje de instrumentos, construcción y montaje de cajas de conexionado. Además, abarca las etapas de comisionado y Pruebas de Equipos y Materiales (PEM), con la instrumentación y control a cargo de Hexa Automatio.",
        imageUrl:"/FotosHexa/hexa-foto-4.jpeg"
    }
    // Agrega más casos de éxito según sea necesario
];


const SuccessCasesSection: React.FC = () => {
    return (
        <section className="py-12 bg-gray-100 h-full ">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">
                    Casos de Éxito
                </h2>

                <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {successCases.map((caseItem, index) => (
                        <div key={index} className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">

                            <Image
                                src={caseItem.imageUrl}
                                alt={caseItem.title}
                                width={500}
                                height={500}
                                className="rounded-t-lg h-48 w-full object-cover"
                            />
                            {/* {caseItem.image2url &&
                                <Image
                                    src={caseItem.image2url}
                                    alt={caseItem.description}
                                    width={400}
                                    height={20}
                                    className="p-3 rounded-t-lg w-full "
                                />
                            } */}
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">{caseItem.title}</h3>
                                <p className="text-gray-600 mb-4">{caseItem.description}</p>

                                {/* {caseItem.link && (
                                    <Link href={caseItem.link} className="text-blue-500 font-semibold hover:text-blue-700 transition-colors">
                                        Ver más →
                                    </Link>
                                )} */}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SuccessCasesSection;
