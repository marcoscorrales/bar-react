export const About = () => {
  return (
    <section
      id="about"
      className="bg-gray-900 text-gray-300 py-20 px-6 md:px-12 lg:px-24"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Imagen */}
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=800&q=80"
            alt="Ambiente del bar"
            className="rounded-2xl shadow-lg object-cover w-full h-80 md:h-full"
          />
          <div className="absolute inset-0 rounded-2xl bg-black/40" />
        </div>

        {/* Texto */}
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-red-500">
            Sobre Nosotros
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-gray-300">
            En{" "}
            <span className="text-red-400 font-semibold">La Esquina Bar</span>,
            creemos que cada noche debe ser una experiencia inolvidable. Con una
            mezcla única de música en vivo, cocteles artesanales y un ambiente
            vibrante, te ofrecemos el lugar perfecto para compartir con amigos y
            crear nuevos recuerdos.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-gray-400">
            Nuestro equipo se dedica a brindarte un servicio cálido y cercano,
            para que cada visita sea especial. Ya sea que vengas por un trago
            después del trabajo o a disfrutar de una fiesta con música en vivo,
            siempre encontrarás algo para ti.
          </p>

        </div>
      </div>
    </section>
  );
};
