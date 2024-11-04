import Image from "next/image";

import Link from "next/link";
import AcordeonServicios from "./components/acordeon";

import FormContact from "./components/formContact";
import { autocomplete } from "@nextui-org/theme";
import { CarouselClientes } from "./components/carouselClientes";
import { ServiceCard } from "./components/CardServicios";


export default function Home() {
  return (
    <>
      <section className="relative bg-gray-900 text-white h-screen flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url('/hexaImages.jpg')` }} // Aquí agregas tu imagen de fondo
      >
        {/* Overlay para oscurecer la imagen */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* Contenido */}

        <div className="relative z-10 text-center">
          <div className="flex flex-row items-center justify-center">
            <Image
              src="/hexa_blanco.png"
              alt="logo"
              width={300}
              height={300}
              className=""
            />

          </div>


          <h1 className="text-4xl md:text-6xl font-bold mb-4 mt-6">
            Liderando la Innovación en Soluciones Oil&Gas
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Optimizamos la eficiencia operativa aplicando tecnologías de vanguardia <br />

          </p>
          <div className="flex flex-row items-center justify-center">

          </div>

          <div className="flex justify-center space-x-4 items-center">
            <a href="#Contacto" className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-md font-semibold">
              Contactanos
            </a>
            <a href="#Servicios" className="bg-transparent border border-white py-3 px-6 rounded-md font-semibold hover:bg-white hover:text-gray-900">
              Explora nuestros Servicios
            </a>
          </div>
        </div>
      </section>

      <section>
        <div className="flex w-3/4 m-auto mt-10">

        </div>
      </section>


      <div id="nosotros" />
      <section id="" className="flex flex-col justify-center mt-24 text-center">
        <h1 className="text-4xl  md:text-5xl font-bold m-auto">Sobre nosotros</h1>
        <p className="flex text-xl md:text-2xl font-semibold max-w-5xl justify-center m-auto mt-10">
          Somos una empresa innovadora, especializada en la automatización y control industrial, ubicada en la ciudad de Neuquén Capital. Nos diferenciamos por nuestra tecnología de vanguardia y el compromiso inquebrantable con la satisfacción del cliente.        </p>
        <div className="flex flex-wrap items-start justify-center text-3xl  font-thin m-10  gap-10">

          <div className="flex flex-col justify-center  max-w-md text-center">
            <Image
              src="/mision.webp"
              alt="Mision empresarial"
              width={250}
              height={250}
              className="m-auto"
            />
            <div>
              <h1 className="text-3xl font-bold my-5">Misión</h1>
            </div>
            <p className="italic text-lg sm:text-xl md:text-2xl">
              Proporcionar soluciones integrales de ingeniería, automatización y control industrial, siendo el aliado tecnológico preferido de nuestros clientes.
            </p>
          </div>
          <div className="flex flex-col justify-center max-w-md text-center">
            <Image
              src="/vision.webp"
              alt="Visión empresarial"
              width="250"
              height="250"
              className="flex m-auto"
            />
            <div>
              <h1 className="text-3xl font-bold my-5">Visión</h1>
            </div>
            <p className="italic text-lg sm:text-xl md:text-2xl">
              Liderar el mercado como integradores de soluciones avanzadas en ingeniería, automatización y control industrial, expandiendo continuamente nuestras fronteras.
            </p>
          </div>

          <div className="flex flex-col justify-center max-w-md text-center">
            <Image
              src="/valores.webp"
              alt="Valores empresariales"
              width="250"
              height="250"
              className="flex m-auto"
            />
            <div>
              <h1 className="text-3xl font-bold my-5">
                Valores
              </h1>
            </div>
            <p className="italic text-lg sm:text-xl md:text-2xl">
              Cumplimos con cada compromiso, impulsando el crecimiento profesional y el bienestar de nuestro equipo y del cliente.
            </p>
          </div>

        </div>
      </section>
      <div id="Servicios" />
      <section id="" className="flex flex-col justify-center mx-auto mt-24 max-w-8xl bg-neutral-100 shadow-lg  shadow-neutral-200 px-5 py-10">
        <div className="flex justify-center text-center">
          <h1 className="flex flex-wrap text-4xl font-semibold mx-auto">
            Nuestros servicios
          </h1>

        </div>
        {/* <div className="flex justify-center mx-auto mt-10 font-semibold">
          <AcordeonServicios />
        </div> */}
        <div className="flex flex-wrap justify-center gap-10 mx-auto mt-5">
          <ServiceCard
            title="Automatización Industrial y Control de Procesos"
            items={[
              "Automatización y control de Procesos",
              "Medición y control de variables de procesos",
              "Sistemas de adquisición de datos y telemetría",
              "Configuración y Puesta en Servicio de Sistemas de Control, SCADA / HMI"
            ]}
            backgroundImage="/bk-card-auto.webp"
          />
          <ServiceCard
            title="Obras de Instrumentación y Electricidad"
            items={[
              "Desarrollo de proyectos de instrumentación",
              "Proyectos eléctricos de instalaciones y procesos industriales",
              "Instrumentación de plantas de tratamiento y O&G en general",
              "Instalaciones de campo"
            ]}
            backgroundImage="/bk-card-auto.webp"
          />
          <ServiceCard
            title="Ingeniería y Diseño"
            items={[
              "Ingeniería básica y de detalle: Instrumentación, Control y Electricidad",
              "Diseño y construcción de tableros de Control y Eléctricos (BT)",
              "Variadores de velocidad / Arrancadores Suaves"
            ]}
            backgroundImage="/bk-card-ing.webp"

          />
          <ServiceCard
            title="Mantenimiento y Actualización"
            items={[
              "Actualización tecnológica de todo tipo de maquinaria (Software y Hardware)",
              "Optimización de lógicas y depuración de errores",
              "Precomisionado y Comisionado"
            ]}
            backgroundImage="/bk-card-mant.webp"
          />
        </div>
        <div className="flex flex-wrap gap-32 m-auto mt-10 justify-center max-w-6xl">
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-4xl ">Proyectos y Soluciones Llave en mano</h1>
            <p className="text-lg m-2"> En Hexa, ofrecemos soluciones llave en mano para todos nuestros proyectos, garantizando un proceso integral que cubre desde la planificación hasta la entrega final, adaptándonos a las necesidades específicas de cada cliente.</p>
            <Image
              src={"/llave_mano.png"}
              alt="Llave en mano"
              width={300}
              height={300}
            />
          </div>
        </div>


      </section>

      <section id="Marcas" className="flex flex-wrap  p-10">

        
        <div className="flex flex-wrap justify-between gap-10 mt-20 items-center ">

          <div className="flex flex-col justify-text-center text-center mx-auto items-center mb-5 max-w-lg">
            <h1 className="text-2xl md:text-4xl font-semibold">Nuestras Marcas Aliadas</h1>
            <p className=" text-lg md:text-2xl m-2">Somos integradores autorizados y desarrollamos proyectos con todas las marcas líderes del mercado</p>
          </div>
          <div className="">
            <Image
              src="/marcas2.png"
              alt="Marcas"
              width={950}
              height={584}
            />

          </div>

        </div >
      </section>

      <section id="clientes" className="flex flex-col mt-52 bg-neutral-100 shadow-lg  shadow-neutral-200 p-20">

        <div className="flex flex-col justify-center gap-32 mt-20 ">

          <div className="flex flex-col justify-center items-center">
            <h1 className="text-4xl">Nuestros clientes</h1>
          </div>

          <div className=" justify-center w-full  m-auto mt-10">
            <CarouselClientes />
          </div>


        </div >
      </section>


      <section id="Contacto" className="mt-32 flex flex-col mb-10">

        <div className="flex lg:flex-row flex-col gap-10">
          <div className="flex flex-col justify-center items-center mx-auto">
            <h1 className="text-5xl flex text-center justify-center mt-10">Datos de contacto</h1>
            <p className="text-2xl mt-32">hexa@hexa-automation.com.ar</p>
            <p className="text-2xl m-2 ">(+54) 0299 155748275</p>

          </div>
          <div className="m-auto border-opacity-600  w-full md:w-1/2 xl:w-1/4">
            <FormContact />
          </div>
        </div>
      </section>


    </>
  );
}
