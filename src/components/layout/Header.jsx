import ThemeToggle from "../ThemeToggle";
import Button from "../Button";

function Header() {
  return (
    <header
      className="p-4 dark:bg-dark-purple-950 dark:text-white
        transition-colors duration-300"
    >
      <div className="max-w-screen-xl mx-auto px-4 md:px-8 lg:px-12 flex justify-between items-center">
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
      </div>
    </header>
  );
}

export default Header;
