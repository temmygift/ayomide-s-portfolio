import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaFacebook, FaTiktok, FaWhatsapp } from 'react-icons/fa';
import phoneImage from './images/phone.png'; // Replace with your image path

const contactInfo = [
  {
    name: 'Phone',
    link: 'tel:+234 806 146 8689',
    icon: <FaPhone />,
    displayInfo: '+234 806 146 8689',
  },
  {
    name: 'Email',
    link: 'mailto:ayocream2005@gmail.com',
    icon: <FaEnvelope />,
  },
  {
    name: 'Facebook',
    link: 'https://www.facebook.com/profile.php?id=100092625081531',
    icon: <FaFacebook />,
  },
  {
    name: 'TikTok',
    link: 'https://www.tiktok.com/@ayocream12',
    icon: <FaTiktok />,
  },
  {
    name: 'WhatsApp',
    link: 'https://wa.me/08061468689',
    icon: <FaWhatsapp />,
  },
];

const Contact = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handlePhoneClick = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <section id="contact" className="flex flex-col items-center bg-gray-100 p-5 h-screen">
      <h2 className="text-4xl font-bold text-gray-800 mb-6">Contact Me</h2>
      <div className="flex flex-wrap justify-center w-full">
        {contactInfo.map((contact, index) => (
          <div
            key={index}
            className="relative flex flex-col items-center w-1/5 m-4 p-4 rounded-lg bg-white shadow-lg transition-transform duration-300 transform hover:scale-105"
          >
            {contact.name === 'Phone' ? (
              <div onClick={handlePhoneClick} className="cursor-pointer flex flex-col items-center text-gray-800 hover:text-blue-500">
                <div className="text-6xl mb-2">{contact.icon}</div>
                <span className="mt-2 text-sm">{contact.name}</span>
              </div>
            ) : (
              <a
                href={contact.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center text-gray-800 hover:text-blue-500"
              >
                <div className="text-6xl mb-2">{contact.icon}</div>
                <span className="mt-2 text-sm">{contact.name}</span>
              </a>
            )}
            {contact.displayInfo && (
              <span className="absolute bottom-0 left-0 right-0 text-center text-lg text-gray-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                {contact.displayInfo}
              </span>
            )}
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-5 rounded-lg relative">
            <button onClick={closeModal} className="absolute top-2 right-2 text-gray-600 hover:text-gray-800">
              &times;
            </button>
            <img src={phoneImage} alt="Phone" className="w-80 h-auto" /> {/* Adjust size as needed */}
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;
