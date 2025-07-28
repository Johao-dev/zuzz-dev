import Button from "../components/Button";

function Contact() {
  return (
    <div className="dark:bg-dark-purple-950 dark:text-white flex">
      <div>
        <div>
          <h1 className="text-4xl text-center mb-8">
            ¿Tienes una idea en mente?
          </h1>
          <p>
            Estoy listo para ayudarte a convertirla en un sistema funcional,
            simple y hecho a tu medida.
          </p>
          <p>
            Puedes escribirme directamente en la red que prefieras o dejarme un
            mensaje por correo.
          </p>
        </div>
        <div>REDES SOCIALES</div>
        <div>GIF ANIMADO</div>
      </div>
      <div>
        <div>
          <form action="">
            <div>
              <label htmlFor="name">Nombre</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div>
              <label htmlFor="email">Correo</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div>
              <label htmlFor="message">Mensaje</label>
              <textarea id="message" name="message" required></textarea>
            </div>
            <Button value="Enviar mensaje" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
