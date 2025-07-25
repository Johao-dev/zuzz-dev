import ThemeToggle from "../ThemeToggle";

function Header() {
  return (
    <header>
        <button>zuzz Dev</button>
        <nav>
            <ul>
                <li>Inicio</li>
                <li>Sobre mí</li>
                <li>Servicios</li>
                <li>Portafolio</li>
                <li>Testimonios</li>
                <li>Contacto</li>
            </ul>
        </nav>
        <ThemeToggle />
    </header>
  );
}

export default Header;