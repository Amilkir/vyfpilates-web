"use client"

import Link from "next/link"
import Image from "next/image"

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur">
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between text-black">

        {/* Logo / Nombre */}
        <div className="relative w-[140px] h-[60px]">
          <Image
            src="/images/logos.png"
            alt="Logo"
            fill
            className="object-contain"
            priority
          />
        </div>
        {/* Links */}
        <ul className="hidden md:flex items-center gap-6 text-neutral-600 text-sm">
          <li><Link href="#inicio">Inicio</Link></li>
          <li><Link href="#beneficios">Beneficios</Link></li>
          <li><Link href="#galeria">Galería</Link></li>
          <li><Link href="#profes">Profes</Link></li>
          <li><Link href="#contacto">Contacto</Link></li>
        </ul>

        {/* Reserva por WhatsApp */}
        <a
          href="https://wa.me/5491158801522?text=Hola,%20quiero%20consultar%20sobre%20VyF%20Pilates."
          target="_blank"
          rel="noreferrer"
          className="hidden md:inline-block bg-[#874587] hover:bg-[#ffffff] hover:text-[#874587] text-white font-semibold px-4 py-2 rounded-full text-sm transition-colors"
        >
          Reserva una Clase
        </a>
      </nav>
    </header>
  )
}