import React from "react";

const Contact = () => {
  return (
    <section className="contacto" id="contacto">
      <h2 className="contacto-title">¿Trabajamos juntos?</h2>
      <form className="formulario" id="formulario">
        <label htmlFor="nombre">Nombre:</label>
        <input
          type="text"
          name="nombre"
          id="nombre"
          placeholder="Ingresa tu Nombre..."
          className="input"
        />

        <label htmlFor="apellido">Apellido:</label>
        <input
          type="text"
          name="apellido"
          id="apellido"
          placeholder="Ingresa tu Apellido..."
          className="input"
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Ingresa tu Email..."
          className="input"
          required
        />

        <label htmlFor="mensaje">Mensaje:</label>
        <textarea id="mensaje" required></textarea>

        <input
          type="submit"
          className="btn-primary submit"
          name="enviar"
          value="Enviar"
        />
      </form>
    </section>
  );
};

export default Contact;
