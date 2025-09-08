export const Map = () => {
  return (
    <section
      id="contacto"
      className="bg-gray-900 text-gray-300 py-20 px-6 md:px-12 lg:px-24"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Información de contacto */}
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-red-500">
            Contáctanos
          </h2>
          <p className="mt-6 text-lg text-gray-300">
            Ven a disfrutar de la mejor música, cocteles únicos y un ambiente
            vibrante en{" "}
            <span className="text-red-400 font-semibold">La Esquina Bar</span>.
          </p>

          <div className="mt-8 space-y-4 text-gray-400">
            <p>
              📍 <span className="text-white">Calle Principal 123, Ciudad</span>
            </p>
            <p>
              📞{" "}
              <a href="tel:+123456789" className="hover:text-red-400">
                +1 234 567 89
              </a>
            </p>
            <p>
              ✉️{" "}
              <a
                href="mailto:info@laesquinabar.com"
                className="hover:text-red-400"
              >
                info@laesquinabar.com
              </a>
            </p>
            <p>
              🕒{" "}
              <span className="text-white">Lun - Dom: 6:00 PM - 2:00 AM</span>
            </p>
          </div>

          <a
            href="#reservas"
            className="inline-block mt-8 px-6 py-3 bg-red-600 hover:bg-red-700 rounded-2xl font-semibold text-white transition"
          >
            Reserva tu mesa
          </a>
        </div>

        {/* Mapa */}
        <div className="rounded-2xl overflow-hidden shadow-lg border-2 border-red-600">
          <iframe
            title="Mapa de ubicación"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.889714324548!2d-74.08083!3d4.60971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9aa3f35c7abf%3A0xb25c4a5a60f7c3ab!2sBar!5e0!3m2!1ses!2sco!4v1694035123456!5m2!1ses!2sco"
            width="100%"
            height="100%"
            style={{ minHeight: "350px", border: "0" }}
            allowFullScreen={true}
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
};
