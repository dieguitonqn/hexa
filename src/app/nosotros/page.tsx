import { CarouselServicios1, CarouselServicios2, CarouselServicios3 } from "../components/compound/CarouselServicios"



export default function nosotros() {
    return (

        <div className="h-full">
            <div className="flex justify-center mx-auto text-6xl m-20">
                <h1>Servicios que ofrecemos</h1>
            </div>
            <div className="flex flex-wrap w-1/2 justify-items-center justify-center mx-auto items-start gap-5">
                <div className="w-fit flex-col justify-center">
                    <p className="text-2xl">Optimización tanto de software como de hardware para maximizar eficiencia y rendimiento</p>
                    <br />
                    <div className="text-lg">
                        <p >
                            En HEXA, transformamos tu infraestructura industrial mediante soluciones tecnológicas avanzadas. A través de la actualización de sistemas de software y hardware,
                            mejoramos la eficiencia operativa, reduciendo tiempos de inactividad y optimizando recursos.
                        </p>
                        <p> Nuestro enfoque personalizado te garantiza una infraestructura robusta,
                            confiable y preparada para los desafíos tecnológicos del futuro. Con nosotros, no solo modernizas, sino que también maximizas el rendimiento de tus activos clave.
                        </p>
                    </div>
                </div>
                <div className="w-fit -z-10">
                    <CarouselServicios1 />
                </div>

            </div>
            <div className="flex flex-wrap w-1/2 justify-items-center justify-center mx-auto items-start mt-20 gap-5">
                <div className="w-fit -z-10">
                    <CarouselServicios2 />
                </div>
                <div className="w-fit flex-col justify-center">
                    <p className="text-2xl">Optimización tanto de software como de hardware para maximizar eficiencia y rendimiento</p>
                    <br />
                    <div className="text-lg">
                        <p >
                            En HEXA, ofrecemos sistemas de automatización y control diseñados para optimizar cada etapa de tus procesos industriales. Con nuestras soluciones, reducimos errores, aumentamos la velocidad de producción y mejoramos la eficiencia operativa, todo bajo un entorno controlado y monitoreado en tiempo real. Nuestra tecnología permite integrar y coordinar cada componente de tu infraestructura, logrando un funcionamiento más preciso y seguro.
                        </p>
                        <p> Confía en nosotros para llevar tu planta a un nivel superior de automatización, reduciendo costos y aumentando tu competitividad en el mercado.
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap w-1/2 justify-items-center justify-center mx-auto items-start mt-20 gap-5">
                
                <div className="w-fit flex-col justify-center">
                    <p className="text-2xl">Ingeniería de detalle en Instrumentación, Control y Electricidad para proyectos eficientes y seguros.</p>
                    <br />
                    <div className="text-lg">
                        <p >
                        En HEXA, brindamos soluciones completas de ingeniería que abarcan desde la planificación básica hasta el diseño detallado de sistemas de instrumentación, control y electricidad. Nuestro equipo de expertos se encarga de desarrollar proyectos que aseguran la eficiencia operativa y la máxima seguridad en cada etapa, cumpliendo con los más altos estándares de calidad.
                        </p>
                        <p> 
                        Nos especializamos en crear soluciones a medida, adaptadas a las necesidades específicas de cada industria, garantizando que cada componente esté perfectamente integrado para un rendimiento óptimo.
                        </p>
                    </div>
                </div>
                <div className="w-fit -z-10">
                    <CarouselServicios3 />
                </div>
            </div>

        </div>

    )
}