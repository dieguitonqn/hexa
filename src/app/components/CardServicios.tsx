import React from "react";

interface CardProps {
    title: string;
    items: string[];
    backgroundImage: string; // Nueva propiedad para la imagen de fondo
}

export const ServiceCard: React.FC<CardProps> = ({ title, items, backgroundImage }) => {
    return (
        <div className="relative max-w-xs p-6 bg-white bg-opacity-80 border border-gray-200 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-200 overflow-hidden">
            {/* Imagen de fondo difusa */}
            <div
                className="absolute inset-0 bg-cover bg-center filter  opacity-5  p-10"
                style={{ backgroundImage: `url(${backgroundImage})` }}
            />

            {/* Contenido */}
            <div className="relative z-10">
                <h2 className="text-xl font-semibold text-gray-800 text-center mb-4">{title}</h2>
                
                <ul className="mb-4 space-y-2 text-gray-600">
                    {items.map((item, index) => (
                        <li key={index} className="flex items-start">
                            <span className="mr-2 text-blue-500">•</span>
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};
