"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { ChevronRightIcon, InstagramIcon, } from 'lucide-react'
import Button from '@mui/material/Button';

export default function WeddingLandingPage() {
    const [timeLeft, setTimeLeft] = useState({
      days: 106,
      hours: 0,
      minutes: 11,
      seconds: 11,
    });
  
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
  
          let newTime = { ...prevTime };
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
  return (
<div className="min-h-screen bg-[#f8f5f2] text-[#4a5568] font-serif">
  {/* Navigation */}
  <nav className="flex justify-center p-4 space-x-4 text-sm bg-white shadow-md">
    <a href="#rsvp" className="hover:underline">RSVP</a>
    <a href="#timeline" className="hover:underline">Wedding timeline</a>
    <a href="#dress-code" className="hover:underline">Dress code</a>
    <a href="#details" className="hover:underline">Details</a>
  </nav>

  {/* Hero Section */}
  <section className="container mx-auto px-4 py-12 text-center">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
      <div className="relative h-64 rounded-lg overflow-hidden">
        <Image src="/placeholder.svg" alt="Couple" layout="fill" objectFit="cover" />
      </div>
      <div className="relative h-64 rounded-lg overflow-hidden">
        <Image src="/placeholder.svg" alt="Couple" layout="fill" objectFit="cover" />
      </div>
      <div className="relative h-64 rounded-lg overflow-hidden">
        <Image src="/placeholder.svg" alt="Couple" layout="fill" objectFit="cover" />
      </div>
    </div>
    <h1 className="text-4xl mb-4">You are invited to celebrate the big day of</h1>
    <h2 className="text-6xl font-bold text-[#718096] mb-6">Carlo & Sofia</h2>
    <a href="#rsvp" className="inline-flex items-center px-6 py-3 bg-[#718096] text-white rounded-full hover:bg-[#4a5568] transition-colors">
      RSVP <ChevronRightIcon className="ml-2 h-5 w-5" />
    </a>
    <p className="mt-4 text-xl">And so the adventure begins</p>
  </section>

  {/* Details Section */}
  <section id="details" className="bg-[#718096] text-white py-12">
    <div className="container mx-auto px-4 text-center">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white text-[#718096] p-6 rounded-lg shadow-lg">
          <div className="text-4xl mb-2">⛪</div>
          <h3 className="text-2xl mb-2">Ceremonia</h3>
          <p>Parroquia Nuestra Señora del Rosario</p>
          <p>Bonpland 1937, Buenos Aires</p>
          <p>29 de Diciembre, 19:30 hs.</p>
          <button className="mt-4 px-4 py-2 bg-[#718096] text-white rounded hover:bg-[#4a5568] transition-colors">
            CÓMO LLEGAR
          </button>
        </div>
        <div className="bg-white text-[#718096] p-6 rounded-lg shadow-lg">
          <div className="text-4xl mb-2">🥂</div>
          <h3 className="text-2xl mb-2">Festejo</h3>
          <p>El Castillo Eventos</p>
          <p>Av. Figueroa Alcorta 5575, Bs.As.</p>
          <p>29 de Diciembre, 20:00 hs.</p>
          <button className="mt-4 px-4 py-2 bg-[#718096] text-white rounded hover:bg-[#4a5568] transition-colors">
            CÓMO LLEGAR
          </button>
        </div>
        <div className="bg-white text-[#718096] p-6 rounded-lg shadow-lg">
          <div className="text-4xl mb-2">👗</div>
          <h3 className="text-2xl mb-2">Dress Code</h3>
          <p>Formal - Elegante</p>
          <p>El Blanco queda reservado para La Novia</p>
          <button className="mt-4 px-4 py-2 bg-[#718096] text-white rounded hover:bg-[#4a5568] transition-colors">
            INSPIRATE
          </button>
        </div>
      </div>
    </div>
  </section>

  {/* Timeline Section */}
  <section id="timeline" className="py-12 bg-[#f9f5f1]">
    <div className="container mx-auto text-center">
      <h1 className="text-xl mb-2">AGENDA LA FECHA</h1>
      <h2 className="text-3xl mb-8">29 de Diciembre</h2>
      <div className="flex space-x-8 justify-center mb-8">
        {Object.entries(timeLeft).map(([key, value]) => (
          <div key={key} className="flex flex-col items-center">
            <span className="text-5xl font-light text-[#d3aa8e]">
              {value.toString().padStart(2, '0')}
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
            <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="currentColor">
              <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
            </svg>
          </div>
          <h2 className="text-2xl mb-4">Nuestra Playlist</h2>
          <p className="mb-6 text-sm">
            Agrega nuestra playlist y recomendá las canciones que no pueden faltar en nuestra boda
          </p>
          <Button variant="outline" className="bg-[#e9e4df] hover:bg-[#d3cdc7] border-none text-[#8c7e75]">
            IR A SPOTIFY
          </Button>
        </div>
        <div className="text-center">
          <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-tr from-yellow-500 via-red-500 to-purple-500 rounded-full flex items-center justify-center">
            <InstagramIcon className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-2xl mb-4">#NosCasamos</h2>
          <p className="mb-6 text-sm">
            Sumate a la boda compartiendo fotos y videos con nuestro hashtag.
          </p>
          <Button variant="outline" className="bg-[#e9e4df] hover:bg-[#d3cdc7] border-none text-[#8c7e75]">
            IR A INSTAGRAM
          </Button>
        </div>
      </div>
    </div>
  </section>
  <section>
  <div className="max-w-6xl mx-auto px-4 py-12">
    <h2 className="text-3xl font-light text-center mb-8 text-gray-700">Álbum de fotos</h2>
    <h3 className="text-4xl font-serif text-center mb-12 text-gray-800">Momentos únicos</h3>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <div className="col-span-1 md:col-span-2 lg:col-span-2 row-span-2">
        <Image src="/fondo.jpg?height=600&width=800" alt="Couple in lavender field" width={800} height={600} className="w-full h-full object-cover rounded-lg shadow-lg transition-transform transform hover:scale-105" />
      </div>
      <div className="col-span-1 row-span-1">
        <Image src="/Gameboy.jpg?height=300&width=400" alt="Black and white couple portrait" width={400} height={300} className="w-full h-full object-cover rounded-lg shadow-lg transition-transform transform hover:scale-105" />
      </div>
      <div className="col-span-1 row-span-1">
        <Image src="/gaming.jpg?height=300&width=400" alt="Couple in field" width={400} height={300} className="w-full h-full object-cover rounded-lg shadow-lg transition-transform transform hover:scale-105" />
      </div>
      <div className="col-span-1 row-span-1">
        <Image src="/messi.jpg?height=300&width=400" alt="Couple with lavender bouquet" width={400} height={300} className="w-full h-full object-cover rounded-lg shadow-lg transition-transform transform hover:scale-105" />
      </div>
      <div className="col-span-1 md:col-span-2 lg:col-span-2 row-span-1">
        <Image src="/habitacion.jpg?height=300&width=800" alt="Couple at sunset" width={800} height={300} className="w-full h-full object-cover rounded-lg shadow-lg transition-transform transform hover:scale-105" />
      </div>
      <div className="col-span-1 row-span-1">
        <Image src="/fondologin.jpg?height=300&width=400" alt="Couple dancing" width={400} height={300} className="w-full h-full object-cover rounded-lg shadow-lg transition-transform transform hover:scale-105" />
      </div>
      <div className="col-span-1 row-span-1">
        <Image src="/dog.png?height=300&width=400" alt="Couple in nature" width={400} height={300} className="w-full h-full object-cover rounded-lg shadow-lg transition-transform transform hover:scale-105" />
      </div>
      <div className="col-span-1 row-span-1">
        <Image src="/perro.png?height=300&width=400" alt="Wedding rings close-up" width={400} height={300} className="w-full h-full object-cover rounded-lg shadow-lg transition-transform transform hover:scale-105 grayscale" />
      </div>
    </div>
  </div>
</section>

  <section id="rsvp" className="py-12 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl mb-4">Are you coming?</h2>
          <p className="mb-6">Carlo & Sofia</p>
          <p className="mb-4">Kindly reply by the 1st of October</p>
          <form className="max-w-md mx-auto">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 mb-4 border rounded"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 mb-4 border rounded"
            />
            <select className="w-full px-4 py-2 mb-4 border rounded">
              <option>I will attend</option>
              <option>I can't attend</option>
            </select>
            <button
              type="submit"
              className="w-full px-6 py-3 bg-[#718096] text-white rounded hover:bg-[#4a5568] transition-colors"
            >
              RSVP
            </button>
          </form>
        </div>
      </section>

  {/* Footer */}
  <footer className="bg-[#f8f5f2] py-8 text-center">
    <p className="text-sm text-[#4a5568]">
      &copy; 2024 Asterbizz. Todos los derechos reservados.
    </p>
  </footer>
</div>

  )
}