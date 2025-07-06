import React from "react";
import useInView from "../useInView";

const About = () => {
  const [ref, isVisible] = useInView({ threshold: 0.3 });

  return (
    <section
      id="about"
      ref={ref}
      className={`relative h-screen w-full bg-center bg-cover bg-no-repeat transition-opacity duration-200 ease-out `}
    >
      {/* Overlay sombre */}
      <div className='absolute inset-0 bg-black/95 z-0' />


      {/* Contenu */}
      <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-20 text-white">
        {/* Titre */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-[#00C853]">
          À propos de Qube Studio
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Image de présentation */}
          <div className="w-full md:w-1/2">
            <img
              src="../src/images/pop.png"
              alt="Team Qube Studio"
              className="rounded-xl shadow-lg object-cover w-full h-[300px] md:h-[400px]"
            />
          </div>

          {/* Texte */}
          <div className="w-full md:w-1/2 text-lg leading-relaxed">
            <p>
              Basé à <strong>La Réunion</strong>, <strong>Qube Studio</strong> est dirigé par <strong>Julien Dalleau</strong>.
              <br /><br />
              Nous aidons commerçants, entrepreneurs et porteurs de projets à construire une
              <span className="font-semibold text-white"> identité visuelle forte</span> et un
              <span className="font-semibold text-white"> branding impactant</span> à travers des services créatifs et personnalisés.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
