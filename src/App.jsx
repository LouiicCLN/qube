import React from "react";
import Navbar from "../src/components/Navbar";
import Hero from "../src/components/Hero";
import Galerie from "../src/components/Galerie";
import ContactForm from "../src/components/ContactForm";
import useInView from "./useInView";

export default function QubeStudioSite() {
  const [ref, isVisible] = useInView({ threshold: 0.3 });

  return (
    <div className="scroll-smooth bg-gray-100 text-gray-900">
      <div>
      <Navbar />

      {/* Hero Section */}
      <Hero />
      </div>
      {/* À propos */}
      <section
      id="about"
      ref={ref}
      className={`relative z-10 -mt-10 pt-40 bg-white rounded-2xl shadow-2xl px-6 md:px-16 py-12 transition-all duration-700 rounded-t-[4rem]`}
      >
   
        <h2 className="text-4xl font-bold mb-10 text-center text-[#00C853]">
          À propos de Qube Studio
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="w-full md:w-1/2">
            <img
              src="../src/images/pop.png"
              alt="Team Qube Studio"
              className="rounded-xl shadow-md object-cover w-full h-full"
            />
          </div>
          <div className="w-full md:w-1/2 flex items-center">
            <p className="text-gray-700 leading-relaxed text-lg">
              Basé à <strong>La Réunion</strong>, <strong>Qube Studio</strong> est dirigé par <strong>Julien Dalleau</strong>. <br /><br />
              Nous aidons commerçants et entrepreneurs à construire une <span className="font-semibold text-black">identité visuelle forte</span> et un <span className="font-semibold text-black">branding impactant</span>.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section
        id="services"
        className="relative z-10 mt-4 bg-white py-20 px-6 md:px-16 transition-opacity duration-700 ease-out"
      >
        <h2 className="text-4xl font-bold text-center text-[#00C853] mb-16">
          Nos Services
        </h2>

        <div className="grid gap-10 md:grid-cols-3">
          {/* Service 1 */}
          <div className="bg-gray-100 hover:bg-gray-50 p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 group">
            <div className="text-5xl mb-4 text-[#00C853] group-hover:scale-110 transition-transform">📱</div>
            <h3 className="text-2xl font-semibold mb-2">Réseaux sociaux</h3>
            <p className="text-gray-600">
              Création, planification & publication de contenu adapté à votre cible. Valorisez votre marque sur les réseaux !
            </p>
          </div>

          {/* Service 2 */}
          <div className="bg-gray-100 hover:bg-gray-50 p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 group">
            <div className="text-5xl mb-4 text-[#00C853] group-hover:scale-110 transition-transform">🎨</div>
            <h3 className="text-2xl font-semibold mb-2">Design graphique</h3>
            <p className="text-gray-600">
              Flyers, logos, affiches, cartes de visite… Créons ensemble une identité visuelle cohérente et percutante.
            </p>
          </div>

          {/* Service 3 */}
          <div className="bg-gray-100 hover:bg-gray-50 p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 group">
            <div className="text-5xl mb-4 text-[#00C853] group-hover:scale-110 transition-transform">💡</div>
            <h3 className="text-2xl font-semibold mb-2">Stratégie & conseil</h3>
            <p className="text-gray-600">
              Accompagnement personnalisé pour votre communication et développement de votre visibilité locale & digitale.
            </p>
          </div>
        </div>
      </section>

      {/* Galerie */}
      <Galerie />
      <ContactForm />


      {/* Footer */}
      <footer className="text-center py-6 bg-black text-white mt-10">
        &copy; 2025 Qube Studio. Tous droits réservés.
      </footer>
    </div>
  );
}
