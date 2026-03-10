import Image from "next/image"
import FadeText from "./FadeText"
import BookingButton from "./BookingButton"

export default function TeacherIntro() {
  return (
    <section id="presentacion" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid items-center gap-12 md:grid-cols-2">

          {/* Imagen */}
          <div className="relative w-full h-[520px] rounded-3xl overflow-hidden">
            <Image
              src="/images/teachers/teacher-intro.webp"
              alt="Florencia Pons - Instructora de Pilates"
              fill
              className="object-cover"
            />
          </div>

          {/* Texto */}
          <div>
            <FadeText delay={0}>
              <h2 className="text-3xl md:text-4xl text-neutral-600 font-title mb-4">
                Hola, soy Flor.
              </h2>
            </FadeText>
            <FadeText delay={200}>
              <h2 className="text-3xl md:text-3xl text-neutral-600 font-title mb-4">
                Bailarina e instructora de Pilates Clásico.
              </h2>
            </FadeText>
            <FadeText delay={400}>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Nuestro estudio es un espacio donde el movimiento se vuelve consciente, profundo y transformador.
                Durante 60 minutos vas a conectar con tu cuerpo de una manera diferente. Clases personalizadas
                (máximo 4 personas). Seguimiento real y cuidado. Un método que trabaja cuerpo, mente y emoción.
                Todas las personas pueden hacer Pilates, y cuando se practica con constancia,
                los resultados son sorprendentes. Cada alumna/o transita su propio proceso dentro de una energía grupal
                amorosa y enfocada.
                Si sentís que es tu momento de empezar (o volver) a tu cuerpo…
              </p>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Te esperamos 💫💪🏽
              </p>
            </FadeText>
            <FadeText delay={600}>
              <BookingButton
                className="inline-block bg-[#874587] hover:bg-[#743a74] text-white px-6 py-3 font-semibold rounded-full transition-colors"
              >
                Reserva una clase conmigo
              </BookingButton>
            </FadeText>
          </div>

        </div>
      </div>
    </section>
  )
}