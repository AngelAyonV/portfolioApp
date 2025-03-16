import React, { useState } from "react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // Función para actualizar los campos del formulario
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Función para enviar mensaje a WhatsApp
  const sendMessageToWhatsApp = (e) => {
    e.preventDefault();
    const phoneNumber = "+526672478101"; // Reemplaza con tu número en formato internacional (+52...)
    const whatsappMessage = `👋 Hola, mi nombre es ${formData.name}.\n📧 Email: ${formData.email}\n📝 Asunto: ${formData.subject}\n💬 Mensaje: ${formData.message}`;
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;
    window.open(whatsappLink, "_blank");
  };

  return (
    <div className="contact-page">
      {/* Contenedor de información de contacto */}
      <div className="contact-info">
        <div className="contact-box">
          <h3>📧 Email</h3>
          <p>angelayon.dev01@gmail.com</p>
        </div>
        <div className="contact-box center-box">
          <h3>✍ Nombre</h3>
          <p>Angel Yair Ayon Verdugo</p>
        </div>
        <div className="contact-box">
          <h3>📱 Teléfono</h3>
          <p>+52 667 247 8101</p>
        </div>
      </div>

      {/* Formulario de contacto vía WhatsApp */}
      <div className="contact-form">
        <h3>💬 Envíame un mensaje por WhatsApp</h3>
        <form onSubmit={sendMessageToWhatsApp}>
          <input
            type="text"
            name="name"
            placeholder="Tu Nombre"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Tu Correo Electrónico"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="subject"
            placeholder="Asunto"
            value={formData.subject}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Escribe tu mensaje aquí..."
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit">Enviar por WhatsApp</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
