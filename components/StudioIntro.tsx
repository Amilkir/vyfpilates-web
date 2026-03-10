import Image from "next/image"
import { Sparkles, Leaf, User } from "lucide-react"
import FadeText from "./FadeText"
import { FadeImage } from "./FadeImage"

const items = [
  {
    title: "Clases personalizadas",
    description: "Sesiones adaptadas a tu nivel y necesidades, desde principiantes hasta avanzados.",
    icon: User,
  },
  {
    title: "Ambiente cálido",
    description: "Un espacio cálido y cercano donde cada participante se siente acompañado y parte de una comunidad en crecimiento.",
    icon: Leaf,
  },
  {
    title: "Movimiento consciente",
    description: "No es solo ejercicio, es un momento para vos.",
    icon: Sparkles,
  },
]

export default function StudioIntro() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* Encabezado */}
        <FadeText delay={300}>
          <h2 className="text-4xl font-title text-neutral-600 text-center">
            Un espacio para volver al presente
          </h2>
          <h2 className="text-4xl font-title text-neutral-600 text-center mb-12">
            y disfrutar del movimiento consciente
          </h2>
        </FadeText>
        <div className="grid gap-20 md:grid-cols-2 text-neutral-600 items-center">

          {/* Imágenes */}
          <FadeImage>
            <div className="relative flex justify-center h-[420px]">

              {/* Izquierda */}
              <Image
                src="/images/studio/studio-5.webp"
                alt="Estudio Pilates"
                width={240}
                height={340}
                className="absolute left-1/2 -translate-x-[135%] top-10 rounded-2xl object-cover rotate-[-4deg]"
              />

              {/* Centro */}
              <Image
                src="/images/studio/studio-6.webp"
                alt="Clases de Pilates"
                width={280}
                height={380}
                className="absolute left-1/2 -translate-x-1/2 top-0 rounded-2xl object-cover z-10"
              />

              {/* Derecha */}
              <Image
                src="/images/studio/studio-4.webp"
                alt="Movimiento consciente"
                width={240}
                height={340}
                className="absolute left-1/2 translate-x-[35%] top-12 rounded-2xl object-cover rotate-[4deg]"
              />
            </div>
          </FadeImage>

          {/* Ítems */}
          <div className="grid gap-8 sm:grid-cols-2">
            {items.map((item, index) => {
              const Icon = item.icon

              return (
                <FadeText
                  key={item.title}
                  delay={index * 180}
                >
                  <div className="flex gap-4">
                    <Icon className="w-11 h-7 text-[#874587] flex-shrink-0 mt-1" />

                    <div>
                      <h3 className="font-title font-semibold mb-1">
                        {item.title}
                      </h3>

                      <p className="text-sm text-neutral-600">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </FadeText>
              )
            })}
          </div>

        </div>
      </div>
    </section>
  )
}