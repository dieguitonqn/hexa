import Image from "next/image";

import Link from "next/link";
import AcordeonServicios from "./components/acordeon";

import FormContact from "./components/formContact";
import { autocomplete } from "@nextui-org/theme";


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
            Optimizamos la eficiencia operativa con las tecnologías de <br />
            Rockwell y Yokogawa.
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
      {/* 
      <section id="Bienvenida" className="backdrop-blur-sm bg-cover  bg-center bg-no-repeat flex flex-col gap-10 text-center justify-center mt-4 p-64 text-cyan-200 " style={{ backgroundImage: "url('/hexaImages.jpg')" }}>
        <h1 className="flex text-9xl m-auto font-bold bg-cyan-900 bg-opacity-40 rounded-full"> HEXA </h1>

        <h1 className="flex text-5xl m-auto font-semibold  bg-cyan-900 bg-opacity-40 rounded-full "> Ingeniería & Automatización </h1>

        <p className="flex justify-center  text-pretty text-3xl mt-10 mx-auto font-semibold  bg-cyan-900 bg-opacity-40 rounded-full">
          ¡Tu socio estratégico en soluciones de automatización industrial de alto rendimiento!
        </p>
      </section> */}
      {/* <br />
      <br />
      <br /> */}
      {/* <br />
      <br /> */}
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
      <section id="" className="flex flex-col justify-center mx-auto mt-24">
        <div className="flex justify-center text-center">
          <h1 className="flex flex-wrap text-5xl font-bold mx-auto">
            Nuestros servicios
          </h1>

        </div>
        <div className="flex justify-center mx-auto mt-10 font-semibold">
          <AcordeonServicios />
        </div>
        <div className="flex flex-wrap gap-32 m-auto mt-20 justify-center ">
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-4xl ">Proyectos y Soluciones</h1>
            <p className="text-2xl m-2">Soluciones llave en mano</p>
          </div>

          {/* <div>
            <Check text="Actualización tecnológica de todo tipo de maquinaria (Software y Hardware)." />
            <Check text="Automatización y control de Procesos." />
            <Check text="Ingeniería integral: Diseño detallado en Instrumentación, Control y Electricidad para proyectos eficientes y seguros." />
            <Check text="Precomisionado y Comisionado." />
            <Check text="Medición y control de variables de procesos." />
            <Check text="Sistemas de adquisición de datos y telemetría." />
            <Check text="Configuración y Puesta en Servicio de Sistemas de Control, Scada / HMI." />
            <Check text="Optimización de lógicas y depuración de errores." />
            <Check text="Diseño y construcción de tableros de Control y Eléctricos (BT)." />
            <Check text="Variadores de velocidad / Arrancadores Suaves." />



          </div> */}
          <div className="m-auto">
            <Image
              src="/Servicios1.png"
              alt="Servicios a empresas"
              width={250}
              height={500}
            />
          </div>
        </div>


      </section>

      <section id="Marcas" className="flex flex-col mt-52">
        {/* <div>
          <h1 className="flex text-5xl justify-center font-bold mx-auto">Marcas con las que trabajamos</h1>
        </div> */}
        <div className="flex flex-wrap justify-center gap-32 mt-20 ">

          <div className="flex flex-col justify-center items-center">
            <h1 className="text-4xl">Nuestras Marcas Aliadas</h1>
            <p className="text-2xl m-2">Desarrollo e integración con marcas líderes</p>
          </div>

          <Image
            src="/Marcas3-1.png"
            alt="Marcas"
            width={700}
            height={600}
          />

        </div >
      </section>

      <section id="Contacto" className="mt-52 flex flex-col mb-10">

        <div className="flex lg:flex-row flex-col gap-10">
          <div className="flex flex-col justify-center items-center mx-auto">
            <h1 className="text-5xl flex text-center justify-center mt-10">Datos de contacto</h1>
            <p className="text-2xl mt-32">hexa@hexa-automation.com.ar</p>
            <p className="text-2xl m-2 ">(+54) 0299 155748275</p>

          </div>
          <div className="m-auto border-opacity-600 border border-slate-500 w-full md:w-1/2 xl:w-1/4">
            <FormContact />
          </div>
        </div>
      </section>


    </>
  );
}
