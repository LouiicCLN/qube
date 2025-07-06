import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const images = [
  { url: 'https://source.unsplash.com/featured/?graphic,design', alt: 'Design graphique' },
  { url: 'https://source.unsplash.com/featured/?branding,creative', alt: 'Branding créatif' },
  { url: 'https://source.unsplash.com/featured/?socialmedia,marketing', alt: 'Réseaux sociaux' },
  { url: 'https://source.unsplash.com/featured/?poster,graphic', alt: 'Affiches' },
  { url: 'https://source.unsplash.com/featured/?visual,identity', alt: 'Identité visuelle' },
];

const Galerie = () => {
  return (
    <section id="galerie" className="py-20 bg-white text-black">
      <h2 className="text-4xl font-bold text-center mb-10 text-[#00C853]">Galerie</h2>

      <div className="max-w-6xl mx-auto px-4">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000 }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <img
                src={img.url}
                alt={img.alt}
                className="w-full h-72 object-cover rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Galerie;
