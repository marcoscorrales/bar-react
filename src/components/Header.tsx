const Header = () => {
    return(
    <header className="bg-yellow-700 text-white shadow-md">
        <div className="max-w-6xl mx-auto flex items-center justify-between py-4 px-6">
            <h1 className="text-2xl font-bold tracking-wide">Bar & Restaurant</h1>
            <nav>
                <ul className="flex space-x-6">
                    <li>
                        <a href="#menu" className="hover:text-yellow-300 transition">Menu</a>
                    </li>
                    <li>
                        <a href="#about" className="hover:text-yellow-300 transition">About</a>
                    </li>
                    <li>
                        <a href="#contact" className="hover:text-yellow-300 transition">Contact</a>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
    );
};

export default Header;