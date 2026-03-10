"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

const images = [
  "/images/gallery/estudio-1.webp",
  "/images/gallery/estudio-2.webp",
  "/images/gallery/estudio-3.webp",
  "/images/gallery/estudio-4.webp",
  "/images/gallery/estudio-5.webp",
  "/images/gallery/estudio-6.webp",
]

export default function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  const closeModal = useCallback(() => setSelectedIndex(null), [])
  const prevImage = useCallback(() => {
    setSelectedIndex((prev) => (prev === null ? null : prev === 0 ? images.length - 1 : prev - 1))
  }, [])
  const nextImage = useCallback(() => {
    setSelectedIndex((prev) => (prev === null ? null : prev === images.length - 1 ? 0 : prev + 1))
  }, [])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return
      if (e.key === "Escape") closeModal()
      if (e.key === "ArrowLeft") prevImage()
      if (e.key === "ArrowRight") nextImage()
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [selectedIndex, closeModal, prevImage, nextImage])

  return (
    <section className="scroll-mt-24" id="galeria">
      <h2 className="text-4xl font-title text-center text-neutral-600 mb-6">
        Nuestro espacio
      </h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((src, index) => (
          <div
            key={src}
            className="relative aspect-[4/3] overflow-hidden rounded-2xl group cursor-pointer"
            onClick={() => setSelectedIndex(index)}
          >
            <Image
              src={src}
              alt={`Estudio de Pilates ${index + 1}`}
              fill
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            />
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedIndex !== null && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm">
          <button
            onClick={closeModal}
            className="absolute top-6 right-6 p-2 text-white/70 hover:text-white transition-colors z-[110]"
            aria-label="Cerrar modal"
          >
            <X className="w-8 h-8" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation()
              prevImage()
            }}
            className="absolute left-4 md:left-8 p-3 text-white/70 hover:text-white transition-colors z-[110]"
            aria-label="Imagen anterior"
          >
            <ChevronLeft className="w-10 h-10" />
          </button>

          <div
            className="relative w-full h-full p-4 md:p-12 flex items-center justify-center cursor-default"
            onClick={closeModal}
          >
            <div
              className="relative w-full h-full max-w-6xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={images[selectedIndex]}
                alt={`Imagen ${selectedIndex + 1} de la galería`}
                fill
                className="object-contain"
                sizes="(max-width: 1200px) 100vw, 1200px"
              />
            </div>
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation()
              nextImage()
            }}
            className="absolute right-4 md:right-8 p-3 text-white/70 hover:text-white transition-colors z-[110]"
            aria-label="Siguiente imagen"
          >
            <ChevronRight className="w-10 h-10" />
          </button>
        </div>
      )}
    </section>
  )
}
