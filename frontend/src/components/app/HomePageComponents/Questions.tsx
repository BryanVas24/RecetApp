import { Collapse, type CollapseProps } from "antd";
import manWhitCellphone from "@/assets/Order food-bro.png";
import book from "@/assets/Recipe book-bro.png";

export default function Questions() {
  //Acá metan las preguntas que quieran
  const items: CollapseProps["items"] = [
    {
      key: "1",
      label: "¿Cómo funciona la app?",
      children: (
        <p>
          Es una plataforma donde puedes subir, explorar y compartir recetas de
          cocina. Puedes buscar por ingredientes, tiempo de preparación o tipo
          de cocina, y guardar tus favoritas.
        </p>
      ),
    },
    {
      key: "2",
      label: "¿Es gratis usar RecetApp?",
      children: (
        <p>
          ¡Sí! La app es 100% gratuita para explorar y compartir recetas con la
          comunidad.
        </p>
      ),
    },
    {
      key: "3",
      label: "¿Quién puede ver mis recetas?",
      children: (
        <p>
          Por defecto son públicas, pero puedes hacerlas privadas en la
          configuración.
        </p>
      ),
    },
    {
      key: "4",
      label: "No puedo iniciar sesión, ¿cómo lo soluciono?",
      children: <p>Prueba restablecer tu contraseña en el apartado de login</p>,
    },
    {
      key: "5",
      label: "¿Puedo editar o borrar una receta después de subirla?",
      children: (
        <p>
          Sí, puedes editar o eliminar tus recetas desde tu perfil en cualquier
          momento.
        </p>
      ),
    },
    {
      key: "6",
      label: "¿Existe un limite de recetas para publicar? ",
      children: <p>No, puedes publicar la cantidad de recetas que desees.</p>,
    },
  ];

  return (
    <>
      {/*Esto es lo de las preguntas */}
      <section className="p-5 grid grid-cols-2">
        <div className="col-span-2 md:col-span-1 flex flex-col items-center gap-5">
          <h2
            className="text-3xl font-bold text-mainGreen"
            data-aos="fade-down"
          >
            Preguntas frecuentes
          </h2>
          <img
            src={manWhitCellphone}
            alt="Hombre viendo el celular"
            className="w-md"
            data-aos="fade-right"
            data-aos-delay="200"
          />
        </div>
        <div
          className="col-span-2 md:col-span-1 p-2 md:p-5"
          data-aos="fade-left"
          data-aos-delay="200"
        >
          <Collapse
            size="large"
            className="shadow-xl"
            items={items}
            defaultActiveKey={["1"]}
            expandIconPosition="end"
            bordered={false}
            accordion
          />
        </div>
      </section>
      {/*Esto es lo del libro */}
      <section className="flex flex-col justify-center items-center p-5 gap-5">
        <h2 className="text-3xl font-bold text-mainGreen" data-aos="fade-up">
          Registrate ahora mismo!
        </h2>
        <img
          className="w-md"
          src={book}
          alt="imagen de libro"
          data-aos="fade-up"
          data-aos-delay="200"
        />
        <button
          className="mt-4 bg-mainGreen hover:bg-secondaryGreen text-white font-bold py-3 px-6 rounded-full shadow-md transition-all hover:shadow-lg"
          data-aos="zoom-in"
          data-aos-delay="400"
        >
          ¡Explora recetas ahora!
        </button>
      </section>
    </>
  );
}
