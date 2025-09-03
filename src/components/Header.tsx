export const Header = () => {
    return(
    <header className="bg-yellow-700 text-white shadow-md">
        <div className="max-w-6xl mx-auto flex items-center justify-between py-4 px-6">
            <h1 className="text-2xl font-bold tracking-wide">La Esquina Bar</h1>
            <nav>
                <ul className="flex space-x-6">
                    <li>
                        <a href="#menu" className="hover:text-yellow-300 transition">Menu</a>
                    </li>
                    <li>
                        <a href="#eventos" className="hover:text-yellow-300 transition">Eventos</a>
                    </li>
                    <li>
                        <a href="#reservas" className="hover:text-yellow-300 transition">Reservas</a>
                    </li>
                    <li>
                        <a href="#contacto" className="hover:text-yellow-300 transition">Contacto</a>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
    );
};
