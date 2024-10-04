'use client'
import { Accordion, AccordionItem } from "@nextui-org/accordion";
// import { CarouselServicios1 } from "./CarouselServicios";
import { CarouselServicios1, CarouselServicios2, CarouselServicios3 } from "./CarouselServicios";

export default function AcordeonServicios() {


  return (
    <Accordion className="flex flex-col" >
      <AccordionItem
        key="1"
        aria-label="Accordion 1"
        subtitle={<p className="dark:text-slate-400 text-xl" >Optimización tanto de software como de hardware para maximizar eficiencia y rendimiento</p>}
        title={<p className="dark:text-slate-50 text-2xl">Optimización</p>}
        className="flex font-semibold justify-items-center shadow-sm shadow-slate-50  p-5">

        <div className=" w-1/2 justify-items-center justify-center mx-auto items-start gap-5 ">
          <div className="">

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
      </AccordionItem>
      <AccordionItem
        key="2"
        aria-label="Accordion 2"
        subtitle={<p className="dark:text-slate-400 text-xl">Optimización tanto de software como de hardware para maximizar eficiencia y rendimiento </p>}
        title={<p className="dark:text-slate-50 text-2xl">Automatización y control de Procesos</p>}
        className="flex font-semibold justify-items-center shadow-md shadow-slate-50  p-5 mt-5"
      >
        <div className=" w-1/2 justify-items-center justify-center mx-auto items-start mt-20 gap-5">

          <div className="">

            <div className="text-lg">
              <p >
              Hexa te ofrece soluciones de automatización y control de procesos a medida, optimizando tus operaciones y maximizando la eficiencia. Desde la ingeniería de detalle hasta la implementación de sistemas avanzados, te ayudamos a alcanzar la excelencia operativa.
              </p>
              <p> Disminuye costos, mejora la calidad y aumenta la productividad gracias a nuestras soluciones personalizadas.
              </p>
            </div>
          </div>
          <div className="w-fit -z-10">
            <CarouselServicios2 />
          </div>
        </div>
      </AccordionItem>
      <AccordionItem 
      key="3" 
      aria-label="Accordion 3" 
      subtitle={<p className="dark:text-slate-400 text-xl" >Ingeniería de detalle en Instrumentación, Control y Electricidad para proyectos eficientes y seguros </p>}
      title={<p className="dark:text-slate-50 text-2xl">Ingeniería de detalle</p>}
      className="flex font-semibold justify-items-center shadow-md shadow-slate-50  p-5 mt-5">
        <div className=" w-1/2 justify-items-center justify-center mx-auto items-start mt-20 gap-5">

          <div className="w-fit flex-col justify-center">

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
      </AccordionItem>
    </Accordion>
  );
}