import heroImage from "@/assets/Chef-bro.png";
export default function HeroSection() {
  return (
    <header className="p-5 flex flex-col md:justify-center items-center text-center min-h-[100vh] ">
      <div className="max-w-4xl space-y-6">
        <div className="animate__animated animate__fadeInDown animate__fast">
          <div className="inline-block bg-shyGreen text-mainGreen rounded-full px-8 py-4 shadow-lg">
            <h1 className="text-3xl md:text-4xl  font-bold mb-2">¿No sabes qué cocinar?</h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-secondaryGreen">
              ¡No te preocupes!
            </h2>
          </div>
        </div>

        <p className="text-xl md:text-2xl text-gray-700 animate__animated animate__fadeIn animate__delay-1s">
          En <span className="font-bold text-mainGreen">RecetApp</span> podrás encontrar recetas de todo tipo, 
          con <span className="text-secondaryGreen">ingredientes detallados</span> y{' '}
          <span className="text-dullGreen">pasos paso a paso</span>. ¡Apoya a la comunidad 
          compartiendo tus propias creaciones!
        </p>

        {/* Imagen con efecto flotante */}
        <div className="animate__animated animate__fadeInUp animate__delay-2s hover:animate__pulse">
          <img 
            className="w-full max-w-md mx-auto drop-shadow-lg transition-transform hover:scale-105" 
            src={heroImage} 
            alt="Chef animado sosteniendo una bandeja de comida"
          />
        </div>
      </div>

      <button className="animate__animated animate__bounceIn animate__delay-3s mt-4 bg-mainGreen hover:bg-secondaryGreen text-white font-bold py-3 px-6 rounded-full shadow-md transition-all hover:shadow-lg">
        ¡Explora recetas ahora!
      </button>
    </header>
  );
}
