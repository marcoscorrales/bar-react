import { useState } from "react";
import { MdMenu, MdClose  } from "react-icons/md";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gray-900 text-white shadow-md fixed top-0 w-full z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <h1 className="text-2xl font-extrabold tracking-wide text-red-500">
          La Esquina Bar
        </h1>

        {/* Desktop nav */}
        <nav className="hidden md:flex">
          <ul className="flex space-x-8">
            <li>
              <a href="#menu" className="hover:text-red-400 transition">
                Menú
              </a>
            </li>
            <li>
              <a href="#eventos" className="hover:text-red-400 transition">
                Eventos
              </a>
            </li>
            <li>
              <a href="#reservas" className="hover:text-red-400 transition">
                Reservas
              </a>
            </li>
            <li>
              <a href="#contacto" className="hover:text-red-400 transition">
                Contacto
              </a>
            </li>
          </ul>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-red-400 hover:text-red-500 transition"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <MdClose size={28} /> : <MdMenu size={28} />}
        </button>
      </div>

      {/* Mobile nav */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 border-t border-gray-700">
          <ul className="flex flex-col space-y-4 py-4 px-6">
            <li>
              <a
                href="#menu"
                className="block hover:text-red-400 transition"
                onClick={() => setIsOpen(false)}
              >
                Menú
              </a>
            </li>
            <li>
              <a
                href="#eventos"
                className="block hover:text-red-400 transition"
                onClick={() => setIsOpen(false)}
              >
                Eventos
              </a>
            </li>
            <li>
              <a
                href="#reservas"
                className="block hover:text-red-400 transition"
                onClick={() => setIsOpen(false)}
              >
                Reservas
              </a>
            </li>
            <li>
              <a
                href="#contacto"
                className="block hover:text-red-400 transition"
                onClick={() => setIsOpen(false)}
              >
                Contacto
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}