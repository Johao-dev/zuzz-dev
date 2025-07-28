import Button from "../components/Button";

function Hero() {
  return (
    <section className="dark:bg-dark-purple-950 dark:text-white flex items-center space-x-16">
      <div>
        <div className="text-7xl">Johao Bravo</div>
        <div className="text-xl font-mono">Desarrollador de Software</div>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi modi incidunt quod qui
          magnam quia possimus eius nisi ea suscipit, soluta quam tenetur atque, maxime quos
          accusamus dolorem. Fugit, vero.
        </p>
        <Button value="Contactame" />
      </div>
      <div>
        IMAGEN
      </div>
    </section>
  );
}

export default Hero;