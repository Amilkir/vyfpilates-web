import { ActivityIcon, BicepsFlexed, Bone, CornerRightUp, Dumbbell, Heart, HeartHandshake, LineSquiggle, LucideActivity, Move, SquareActivity } from "lucide-react"
import { Activity } from "react"
import FadeText from "./FadeText"

const beneficios = [
  {
    title: "Mejora la postura",
    description:
      "Fortalece el centro (core) y alinea el cuerpo,  previene dolores y corrigue la postura.",
    icon: CornerRightUp,
  },
  {
    title: "Fuerza y resistencia",
    description:
      "Proporciona un tono muscular equilibrado, que protege las articulaciones previniendo lesiones.",
    icon: BicepsFlexed,
  },
  {
    title: "Bienestar integral",
    description:
      "Practicar el método es la llave para salir del automatico y reconectar con nuestras necesidades.",
    icon: Heart,
  },
  {
    title: "Flexibilidad y movilidad",
    description:
      "El método provee el equilbrio justo entre flexibilidad y movilidad",
    icon: Move,
  },
  {
    title: "Prevención de lesiones",
    description:
      "Las series del método y sus procesos pedagógicos están diseñados para habitar una columna y cuerpo sano y presente",
    icon: Bone,
  },
  {
    title: "Conexión y comunidad",
    description:
      "Clases en grupos reducidos donde las/os alumnas/os reciben atención personalizada y un ambiente cálido.",
    icon: HeartHandshake,
  },
]

export default function Benefits() {
  return (
    <section
      id="beneficios"
      className="py-24 bg-neutral-50 "
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-title tracking-tight text-center mb-12 text-neutral-600">
          ¿Para qué practicamos Pilates Clásico?
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {beneficios.map((beneficio, index) => {
            const Icon = beneficio.icon

            return (
              <FadeText
                key={beneficio.title}
                delay={index * 180}
              >
                <div className="bg-white p-8 rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.04)] h-[200px] flex flex-col">
                  {/* Ícono */}
                  <div className="w-9 h-9 shrink-0 rounded-full bg-neutral-100 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 shrink-0 text-[#874587]" />
                  </div>

                  {/* Texto */}
                  <h3 className="font-title font-semibold text-xl text-neutral-600 mb-2">
                    {beneficio.title}
                  </h3>

                  <p className="text-sm text-neutral-600 leading-relaxed">
                    {beneficio.description}
                  </p>
                </div>
              </FadeText>
            )
          })}
        </div>
      </div>
    </section>
  )
}