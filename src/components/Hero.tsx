export const Hero = () => {
  return (
    <section className="relative bg-gradient-to-b from-black via-gray-900 to-gray-800 text-white">
      {/* Imagen de fondo con overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Bar background"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Contenido */}
      <div className="relative max-w-6xl mx-auto px-6 py-32 flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-red-500 drop-shadow-lg">
          Bienvenido a La Esquina Bar
        </h1>
        <p className="mt-6 text-lg md:text-xl text-gray-200 max-w-2xl">
          Mejor bar y heladeria de la ciudad. Disfruta de nuestros cócteles
          exclusivos y del ambiente único.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <a
            href="#reservas"
            className="px-6 py-3 bg-red-600 hover:bg-red-700 rounded-2xl font-semibold transition"
          >
            Reserva tu mesa
          </a>
          <a
            href="#menu"
            className="px-6 py-3 border border-red-500 text-red-400 hover:bg-red-600 hover:text-white rounded-2xl font-semibold transition"
          >
            Ver menú
          </a>
        </div>
      </div>
    </section>
  )
}
