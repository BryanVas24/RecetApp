import hamburguer from "@/assets/Hamburger-bro.png";
import { FaUpload, FaSearch, FaBookmark } from "react-icons/fa";
import "animate.css"; // Asegúrate de tener instalado animate.css

export default function AboutTheApp() {
  //Si quieren meter más haganlo acá pero si son muchas separenlas en otro archivo y vean como se ve porque actualmente solo esta pensado para 3
  //Lás animaciones son de animate.css
  const thingsToDoInApp = [
    {
      id: 1,
      title: "Publica tus recetas",
      description:
        "Sé parte de la biblioteca culinaria más grande de todas y en constante crecimiento.",
      icon: <FaUpload className="text-2xl" />,
      color: "bg-dullGreen",
      animation: "animate__fadeInLeft",
    },
    {
      id: 2,
      title: "Encuentra inspiración",
      description:
        "Recetas de chefs y usuarios como tú. Descubre nuevas ideas cada día.",
      icon: <FaSearch className="text-2xl" />,
      color: "bg-secondaryGreen",
      animation: "animate__fadeInUp",
    },
    {
      id: 3,
      title: "Guarda tus preferidas",
      description:
        "Organízalas en colecciones personalizadas. Fácil de acceder luego.",
      icon: <FaBookmark className="text-2xl" />,
      color: "bg-mainGreen",
      animation: "animate__fadeInRight",
    },
    
  ];

  return (
    <section className="bg-shyGreen m-10 rounded-2xl p-5 grid grid-cols-1 md:grid-cols-3 gap-8 animate__animated animate__fadeIn shadow-xl">
      <article className="col-span-2 md:col-span-2">
        <h2 className="text-3xl text-mainGreen font-bold p-2">
          Unete a la comunidad de recetApp! <br />
          <span className="text-2xl text-secondaryGreen">
            Descubre, crea y comparte sabores
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          {/*Lo del ternario en este caso es para el tiempo de la animación, siempre va saliendo en orden pero apartir del cuarto saldran todas de una*/}
          {thingsToDoInApp.map((toDoInApp) => (
            <div
              key={toDoInApp.id}
              className={`p-5 rounded-xl bg-creamColor shadow-md ${toDoInApp.animation} animate__animated animate__delay-${toDoInApp.id <4 ? toDoInApp.id : 4}s transition hover:scale-105`}
            >
              <div
                className={`w-12 h-12 rounded-full text-white ${toDoInApp.color} flex items-center justify-center mb-4`}
              >
                {toDoInApp.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2 text-mainGreen">
                {toDoInApp.title}
              </h3>
              <p className="text-gray-700">{toDoInApp.description}</p>
            </div>
          ))}
        </div>
      </article>

      {/*Apartado de la imagen*/}
      <div className="col-span-2 md:col-span-1 flex justify-center items-center animate__animated animate__fadeIn animate__delay-1s">
        <div className="rounded-full bg-white p-4 shadow-lg">
          <img
            className="w-full max-w-xs"
            src={hamburguer}
            alt="imagen de hamburguesa"
          />
        </div>
      </div>
    </section>
  );
}
