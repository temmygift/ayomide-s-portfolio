import React from 'react';
import dave from "./images/dave.png";
import midex from './images/midex.png';
import port from './images/port.png';
import autos from './images/autos.png';
import ai from './images/ai.png';
import food from './images/food.png';
import login from './images/login.png';
import box from './images/box.png';
import libary from './images/libary.png';


const services = [
  {
    title: "Dave's Co-Working",
    description: "A modern co-working space design emphasizing collaboration and creativity.",
    link: "https://www.figma.com/design/79OEMaisonvRJi0cDTkWn6/Dave's-co-woking?node-id=0-1&t=dtntqTEzQ4e8wKZv-1",
    image: dave,
  },
  {
    title: "Midex Variety Stores (BANNER)",
    description: "An exploration of layout and usability in a sleek, contemporary design.",
    link: "https://www.figma.com/design/nQuFTSoLXXEs6mOlAao3X0/Untitled?m=auto&t=DIBTTHF6VTwdzr3N-6",
    image: midex,
  },
  {
    title: "My Imagined Portfolio",
    description: "My first created portfolio.",
    link: "https://www.figma.com/design/5CTNlmZXKkVUJP8dw3drM8/Untitled?m=auto&t=DIBTTHF6VTwdzr3N-6",
    image: port,
  },
  {
    title: "White Autos",
    description: "A banner to display cars or goods you sell.",
    link: "https://www.figma.com/design/xjzKof8yWaFcPGIx7dPh44/Untitled?m=auto&t=DIBTTHF6VTwdzr3N-6",
    image: autos,
  },
  {
    title: "Ai Design",
    description: "An AI design just for an upcoming AI to start with.",
    link: "https://www.figma.com/design/axeh6LV1WX1Ha12BhVrdcr/ai-design?m=auto&t=DIBTTHF6VTwdzr3N-6",
    image: ai,
  },
  {
    title: "Food Filter",
    description: "Lists food items available for sale.",
    link: "https://www.figma.com/design/YvmkmIUZcqP4bVBg6JVLhc/food-flier?m=auto&t=DIBTTHF6VTwdzr3N-6",
    image: food,
  },
  {
    title: "Login Profile",
    description: "A design for user login.",
    link: "https://www.figma.com/design/R3b7iVdqb5BYfrpyB2fmUZ/LOGIN-PROFILE?m=auto&t=DIBTTHF6VTwdzr3N-6",
    image: login,
  },
  {
    title: "BOXCHAMPY",
    description: "Gym design.",
    link: "https://www.figma.com/design/l7heNvQn75yCuzUYa5SWpm/fitness-work-poject?m=auto&t=DIBTTHF6VTwdzr3N-6",
    image: box,
  },
  {
    title: "Library Design",
    description: "A user-centric library design that enhances the learning experience.",
    link: "https://www.figma.com/design/kvJMHELHSOvbTADZgAWb8B/LIBRARY-DESIGN?m=auto&t=DIBTTHF6VTwdzr3N-6",
    image: libary,
  },
];

const Services = () => {
  return (
    <section id="services" className="min-h-screen flex flex-col items-center bg-gray-100 p-5">
      <h2 className="text-4xl font-bold text-gray-800 mb-6">My Services</h2>
      <div className="max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105">
            <img src={service.image} alt={service.title} className="h-40 w-full object-cover rounded-t-lg" />
            <h3 className="text-2xl font-semibold text-gray-800 mt-2">{service.title}</h3>
            <p className="text-lg text-gray-600 mb-2">{service.description}</p>
            <a 
              href={service.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
