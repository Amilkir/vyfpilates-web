"use client"

import { useEffect, useRef } from "react"
import FadeText from "./FadeText"
import { FadeImage } from "./FadeImage"

export default function Method() {
  const videoRef = useRef<HTMLVideoElement | null>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play()
        } else {
          video.pause()
        }
      },
      { threshold: 0.5 }
    )

    observer.observe(video)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="method" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6 text-center">

        <FadeText delay={0}>
          <h2 className="text-4xl font-title mb-6 text-neutral-600">
            Nuestra mirada acerca del método Pilates:
          </h2>
        </FadeText>
        <FadeText delay={100}>
          <p className="text-neutral-600 max-w-3xl mx-auto mb-12">
            Pilates se basa en el control, la precisión y la respiración,
            buscando fortalecer el cuerpo de manera equilibrada y consciente.
            Nuestras clases están pensadas para mejorar la postura, aumentar la
            fuerza y favorecer el bienestar integral.
          </p>
        </FadeText>

        {/* Video */}
        <FadeImage>
          <div className="relative max-w-lg mx-auto rounded-2xl overflow-hidden">
            <video
              ref={videoRef}
              src="/images/method/vyf-presentacion.mp4"
              muted
              playsInline
              preload="metadata"
              className="w-full h-auto rounded-2xl"
            />
          </div>
        </FadeImage>

      </div>
    </section>
  )
}