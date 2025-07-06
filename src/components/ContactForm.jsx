// src/components/ContactForm.jsx
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_lzeh9wl",      // Remplace par ton Service ID
        "template_bzddana",     // Remplace par ton Template ID
        form.current,
        "hXxTOL5dP64QpF8L_"       // Remplace par ta Public Key
      )
      .then(
        () => {
          alert("Message envoyé avec succès !");
          form.current.reset();
        },
        (error) => {
          alert("Une erreur est survenue.");
          console.error(error.text);
        }
      );
  };

  return (
    <section id="contact" className="bg-white py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8 text-[#00C853]">
          Contact
        </h2>
        <form ref={form} onSubmit={sendEmail} className="grid gap-6">
          <input
            type="text"
            name="user_name"
            placeholder="Nom"
            className="p-3 rounded border border-gray-400 w-full"
            required
          />
          <input
            type="email"
            name="user_email"
            placeholder="Email"
            className="p-3 rounded border border-gray-400 w-full"
            required
          />
          <textarea
            name="message"
            placeholder="Votre message"
            rows="5"
            className="p-3 rounded border border-gray-400 w-full"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800"
          >
            Envoyer
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
