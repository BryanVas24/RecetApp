import errorImage from "@/assets/404Error.png";
import { Link } from "react-router-dom";
export default function ErrorPage() {
  return (
    <main className="grid place-items-center min-h-[100vh]">
      <img
        src={errorImage}
        className="w-xl animate__animated animate__fadeInDown"
        alt="imagen de error 404, la pagina no se encontró "
      />
      <Link
        to={"/"}
        className="animate__animated animate__bounceIn bg-mainGreen hover:bg-secondaryGreen text-white font-bold py-3 px-6 rounded-full transition-all hover:shadow-lg hover:scale-105"
      >
        Volver al inicio
      </Link>
    </main>
  );
}
