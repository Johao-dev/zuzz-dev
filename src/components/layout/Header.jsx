import ThemeToggle from "../ThemeToggle";

function Header() {
  return (
    <header
      className="bg-white text-gray-800 p-4 shadow-md flex justify-between items-center
                       dark:bg-gray-900 dark:text-white dark:shadow-lg transition-colors duration-300"
    >
      <button className="text-xl font-bold">zuzz Dev</button>
      <nav>
        <ul className="flex space-x-6">
          <li>
            <a
              href="#inicio"
              className="hover:text-blue-600 dark:hover:text-blue-400"
            >
              Inicio
            </a>
          </li>
          <li>
            <a
              href="#sobre-mi"
              className="hover:text-blue-600 dark:hover:text-blue-400"
            >
              Sobre mí
            </a>
          </li>
          <li>
            <a
              href="#servicios"
              className="hover:text-blue-600 dark:hover:text-blue-400"
            >
              Servicios
            </a>
          </li>
          <li>
            <a
              href="#portafolio"
              className="hover:text-blue-600 dark:hover:text-blue-400"
            >
              Portafolio
            </a>
          </li>
          <li>
            <a
              href="#testimonios"
              className="hover:text-blue-600 dark:hover:text-blue-400"
            >
              Testimonios
            </a>
          </li>
          <li>
            <a
              href="#contacto"
              className="hover:text-blue-600 dark:hover:text-blue-400"
            >
              Contacto
            </a>
          </li>
        </ul>
      </nav>
      <ThemeToggle />
    </header>
  );
}

export default Header;