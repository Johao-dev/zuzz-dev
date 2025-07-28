function Footer() {
  return (
    <footer className="dark:bg-dark-purple-950 text-black dark:text-white p-4 text-center">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8 lg:px-12 mb-4">
        <div className="text-7xl font-semibold">zuzz Dev</div>
        <p className="text-gray-400">
          &copy; {new Date().getFullYear()} Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
