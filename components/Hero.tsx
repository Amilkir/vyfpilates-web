import Image from "next/image"
import FadeText from "./FadeText"

export default function Hero() {
  return (
    <section className="pt-24 bg-neutral-50">
      <div className="relative mx-auto h-[85vh] w-[98vw] rounded-[32px] overflow-hidden">

        {/* Imagen de fondo */}
        <Image
          src="/images/estudio 1.webp"
          alt="Estudio de Pilates"
          fill
          priority
          className="object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Contenido */}
        <div className="relative z-10 flex h-full items-center justify-center text-center px-6">
          <div className="max-w-xl text-white">
            <FadeText delay={0}>
              <h1 className="md:text-5xl font-title mb-4">
                Descubrí tu mejor versión en{" "}
                <span className="text-[#874587]">V</span>
                <span className="text-[#6ca191]">y</span>
                <span className="text-[#874587]">F</span>{" "}
                Pilates
              </h1>
            </FadeText>

            <FadeText delay={300}>
              <p className="text-neutral-200 mb-6">
                Clases personalizadas que combinan fuerza, flexibilidad y conciencia corporal. Reconecta con tu cuerpo y tu bienestar.
              </p>
            </FadeText>
            <FadeText delay={600}>
              <a
                href="https://wa.me/5491158801522?text=Hola,%20quiero%20consultar%20sobre%20VyF%20Pilates."
                target="_blank"
                className="inline-block bg-[#874587] hover:bg-[#743a74] text-white font-semibold px-6 py-3 rounded-full transition-colors"
              >
                ¡Contáctanos!
              </a>
            </FadeText>
          </div>
        </div>

      </div>
    </section>
  )
}