import React from "react";

interface SuccessCase {
    title: string;
    description: string;
    imageUrl: string;
    link: string;
}

const successCases: SuccessCase[] = [
    {
        title: "Optimización de Procesos para Cliente A",
        description: "Mejoramos la eficiencia de producción en un 30% con automatización avanzada.",
        imageUrl: "/hexa-foto-12.jpeg",
        link: "/success-case-a",
    },
    {
        title: "Implementación de SCADA para Cliente B",
        description: "Integración completa de SCADA para monitoreo en tiempo real.",
        imageUrl: "/path-to-image2.jpg",
        link: "/success-case-b",
    },
    {
        title: "Actualización de Sistemas para Cliente C",
        description: "Modernización de sistemas de control para mejorar la seguridad operativa.",
        imageUrl: "/path-to-image3.jpg",
        link: "/success-case-c",
    },
    // Agrega más casos de éxito según sea necesario
];

const SuccessCasesSection: React.FC = () => {
    return (
        <section className="py-12 bg-gray-100">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">
                    Casos de Éxito
                </h2>
                <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {successCases.map((caseItem, index) => (
                        <div key={index} className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
                            <img src={caseItem.imageUrl} alt={caseItem.title} className="rounded-t-lg h-48 w-full object-cover" />
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">{caseItem.title}</h3>
                                <p className="text-gray-600 mb-4">{caseItem.description}</p>
                                <a href={caseItem.link} className="text-blue-500 font-semibold hover:text-blue-700 transition-colors">
                                    Ver más + →
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SuccessCasesSection;
