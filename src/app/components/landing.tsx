"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronRightIcon } from "lucide-react";
import { FaSpotify, FaInstagram } from 'react-icons/fa';
import Auboton from "./audiobutton";
import Button from "@mui/material/Button";
import EventCard from "./eventcard";
import ElegantRSVPForm from "./formulario";
import CoverOverlay from "./sobre"; // Asegúrate de que la ruta sea correcta

export default function WeddingLandingPage() {
  const [timeLeft, setTimeLeft] = useState({
    days: 106,
    hours: 0,
    minutes: 11,
    seconds: 11,
  });
  
  const [isOverlayOpen, setIsOverlayOpen] = useState(true); // Agregado para controlar la visibilidad del overlay
  const [isAubotonVisible, setIsAubotonVisible] = useState(false); // Agregado para controlar la visibilidad del Auboton


  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (
          prevTime.days === 0 &&
          prevTime.hours === 0 &&
          prevTime.minutes === 0 &&
          prevTime.seconds === 0
        ) {
          clearInterval(timer);
          return prevTime;
        }

        const newTime = { ...prevTime };
        if (newTime.seconds > 0) {
          newTime.seconds--;
        } else {
          newTime.seconds = 59;
          if (newTime.minutes > 0) {
            newTime.minutes--;
          } else {
            newTime.minutes = 59;
            if (newTime.hours > 0) {
              newTime.hours--;
            } else {
              newTime.hours = 23;
              if (newTime.days > 0) {
                newTime.days--;
              }
            }
          }
        }
        return newTime;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleOverlayOpen = () => {
    setIsOverlayOpen(false);
    setIsAubotonVisible(true); // Mostrar el Auboton después de cerrar el overlay
  };


  return (
    <div className="min-h-screen bg-[#f8f5f2] text-[#4a5568] font-serif">
      {isOverlayOpen && <CoverOverlay onOpen={handleOverlayOpen} />}
      <div className={`transition-opacity ${isOverlayOpen ? 'opacity-0' : 'opacity-100'}`}>
  
        {/* Navigation */}
        <nav className="flex justify-end mr-4 p-4 space-x-4 text-sm bg-white shadow-md">
          <a href="#rsvp" className="hover:underline">Confirmar Asistencia</a>
          <a href="#timeline" className="hover:underline">Cronología de la Boda</a>
          <a href="#dress-code" className="hover:underline">Tipo de Vestimenta</a>
          <a href="#details" className="hover:underline">Detalles</a>
        </nav>

        {/* Hero Section */}
        <section className="container mx-auto px-4 py-12 text-center mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src="/foto5.png"
                alt="Couple"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src="/foto1.png"
                alt="Couple"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src="/foto2.png"
                alt="Couple"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
          <h1 className="text-4xl mb-4">
            Estás invitado a celebrar el gran día de
          </h1>
          <h2 className="text-6xl font-bold text-[#718096] mb-6">
            Carlo & Sofia
          </h2>
          <a
            href="#rsvp"
            className="inline-flex items-center px-6 py-3 bg-[#718096] text-white rounded-full hover:bg-[#4a5568] transition-colors"
          >
            Confirmar Asistencia <ChevronRightIcon className="ml-2 h-5 w-5" />
          </a>
          <p className="mt-4 text-xl">Y así comienza la aventura.</p>
        </section>

        {/* Details Section */}
        <section
          id="details"
          className="relative bg-[url('/ondaverde.jpg')] bg-cover bg-center text-white py-12 mb-16"
        >
          <div className="absolute inset-0 bg-black bg-opacity-25 z-10"></div>
          <div className="relative z-20 flex flex-wrap justify-center gap-8 p-6">
            <EventCard
              title="Ceremonia"
              icon={<div className="text-4xl mb-2">⛪</div>}
              content={[
                "Parroquia Nuestra Señora del Rosario",
                "Bonpland 1937, Buenos Aires",
                "29 de Diciembre, 19:30 hs.",
              ]}
              buttonText="CÓMO LLEGAR"
            />
            <EventCard
              title="Festejo"
              icon={<div className="text-4xl mb-2">🥂</div>}
              content={[
                "El Castillo Eventos",
                "Av. Figueroa Alcorta 5575, Bs.As.",
                "29 de Diciembre, 20:00 hs.",
              ]}
              buttonText="CÓMO LLEGAR"
            />
            <EventCard
              title="Tipo De Vestimenta"
              icon={<div className="text-4xl mb-2">👗</div>}
              content={[
                "Formal - Elegante",
                "El Blanco queda reservado para La Novia",
              ]}
              buttonText="INSPIRATE"
            />
          </div>
        </section>

        {/* Timeline Section */}
        <section id="timeline" className="py-16 bg-[#f9f5f1] mb-16">
          <div className="container mx-auto text-center">
            <h1 className="text-xl mb-2">AGENDA LA FECHA</h1>
            <h2 className="text-3xl mb-8">29 de Diciembre</h2>
            <div className="flex space-x-8 justify-center mb-8">
              {Object.entries(timeLeft).map(([key, value]) => (
                <div key={key} className="flex flex-col items-center">
                  <span className="text-5xl font-light text-[#d3aa8e]">
                    {value.toString().padStart(2, "0")}
                  </span>
                  <span className="text-xs mt-2">{key.toUpperCase()}</span>
                </div>
              ))}
            </div>
            <Button className="bg-[#d3aa8e] text-white hover:bg-[#c19c80]">
              AGENDAR FECHA
            </Button>
          </div>
        </section>

        {/* Dress Code Section */}
        <section id="dress-code" className="py-12 bg-[#f8f5f2]">
          <div className="max-w-4xl mx-auto p-8 bg-[#f9f5f1] text-[#8c7e75] font-serif">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 bg-[#1ED760] rounded-full flex items-center justify-center">
                  <FaSpotify size={30} color="white" />
                </div>
                <h2 className="text-2xl mb-4">Nuestra Playlist</h2>
                <p className="mb-6 text-sm">
                  Agrega nuestra playlist y recomendá las canciones que no pueden
                  faltar en nuestra boda
                </p>
                <Button className="bg-[#e9e4df] hover:bg-[#d3cdc7] border-none text-[#8c7e75]">
                  IR A SPOTIFY
                </Button>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 bg-[#E4405F] rounded-full flex items-center justify-center">
                  <FaInstagram size={30} color="white" />
                </div>
                <h2 className="text-2xl mb-4">Síguenos en Instagram</h2>
                <p className="mb-6 text-sm">
                  Comparte tus fotos y videos usando el hashtag
                </p>
                <Button className="bg-[#e9e4df] hover:bg-[#d3cdc7] border-none text-[#8c7e75]">
                  IR A INSTAGRAM
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* RSVP Form Section */}
        <section id="rsvp" className="py-20">
          <div className="container mx-auto">
            <ElegantRSVPForm />
          </div>
        </section>
          {/* Footer */}
  <footer className="bg-[#f8f5f2] py-8 text-center">
    <p className="text-sm text-[#4a5568]">
      &copy; 2024 Asterbizz. Todos los derechos reservados.
    </p>
  </footer>
      </div>
      {isAubotonVisible && <Auboton />}
    </div>
  );
}
