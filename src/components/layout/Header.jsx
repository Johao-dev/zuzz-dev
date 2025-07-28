import ThemeToggle from "../ThemeToggle";
import Button from "../Button";

function Header() {
  return (
    <header
      className="bg-white text-gray-800 p-4 shadow-md flex justify-between items-center
                       dark:bg-dark-purple-950 dark:text-white dark:shadow-lg transition-colors duration-300"
    >
      <button className="text-3xl font-bold cursor-pointer">zuzz Dev</button>
      <nav>
        <ul className="flex space-x-3">
          <li>
            <Button value="Inicio" />
          </li>
          <li>
            <Button value="Sobre mí" />
          </li>
          <li>
            <Button value="Servicios" />
          </li>
          <li>
            <Button value="Portafolio" />
          </li>
          <li>
            <Button value="Testimonios" />
          </li>
          <li>
            <Button value="Contacto" />
          </li>
        </ul>
      </nav>
      <ThemeToggle />
    </header>
  );
}

export default Header;
