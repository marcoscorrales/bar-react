export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Logo y descripción */}
        <div>
          <h2 className="text-2xl font-bold text-yellow-400">La Esquina Bar</h2>
          <p className="mt-4 text-sm">
            Tu lugar favorito para buena música, tragos únicos y noches inolvidables.
          </p>
        </div>

        {/* Enlaces rápidos */}
        <div>
          <h3 className="text-lg font-semibold text-white">Enlaces</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href="#menu" className="hover:text-yellow-400">Menú</a></li>
            <li><a href="#eventos" className="hover:text-yellow-400">Eventos</a></li>
            <li><a href="#reservas" className="hover:text-yellow-400">Reservas</a></li>
            <li><a href="#contacto" className="hover:text-yellow-400">Contacto</a></li>
          </ul>
        </div>

        {/* Horarios y redes */}
        <div>
          <h3 className="text-lg font-semibold text-white">Horario</h3>
          <p className="mt-4 text-sm">
            8:00 - 00:00 (Lun-Dom)
          </p>
        </div>
      </div>

      {/* Línea inferior */}
      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} La Esquina Bar. Todos los derechos reservados.
      </div>
    </footer>
  );
}
