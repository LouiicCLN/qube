import React from "react";
import Navbar from "./Navbar";


const Hero = () => {
  return (
    <section id="hero" className="sticky top-0 h-screen w-screen bg-center bg-cover bg-no-repeat text-white overflow-hidden" style={{ backgroundImage: "url('../src/images/ChatGPT Image 22 juin 2025, 13_36_15.png')",}}>
        {/* <Navbar className="absolute top-0 left-0 w-full z-50"/> */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/90"></div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 drop-shadow-lg animate-fadeUp">
                Donnez vie à votre image de marque
            </h1>

            <p className="text-lg md:text-xl text-gray-200 max-w-2xl mb-10 animate-fadeUp delay-200">
                Qube Studio booste votre communication visuelle : design graphique, gestion de réseaux sociaux, branding créatif.
            </p>

            <a href="#contact" className="bg-[#00C853] text-white py-3 px-8 rounded-full text-lg font-semibold transition-transform transform hover:scale-105 hover:shadow-xl animate-fadeUp delay-300">
                Demander un devis
            </a>
        </div> 
    </section>
  );
};

export default Hero;
