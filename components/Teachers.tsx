import Image from "next/image"

const profes = [
  {
    name: "María Florencia Pons",
    role: "Creadora & Directora",
    description:
      "Instructora de Pilates Clasico. \nIntérprete de Comedia Musical, Fundación Julio Bocca.",
    image: "/images/teachers/teacher-3.webp",
  },
  {
    name: "Amilkar Parada",
    role: "Instructor",
    description:
      "Tras dos años practicando el método, mi pasión por el mismo me permitió ser instructor de este maravilloso estudio. Concientizar sobre el movimiento me ha ayudado a conectar más con mi cuerpo y mi mente.",
    image: "/images/teachers/teacher-4.webp",
  }
]


export default function Teachers() {
  return (
    <section id="profes" className="py-24 bg-neutral-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-title text-center text-neutral-600 mb-6">
          Nuestro equipo
        </h2>

        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-12 sm:grid-cols-2">
          {profes.slice(0, 2).map((profe) => (
            <div
              key={profe.name}
              className="w-full flex inset-0 flex-col bg-white rounded-2xl overflow-hidden shadow-sm h-[760px] transition-transform duration-300 hover:-translate-y-2"
            >
              {/* Imagen */}
              <div className="relative h-[560px] shrink-0">
                <Image
                  src={profe.image}
                  alt={profe.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Info */}
              <div className="p-6 text-center flex flex-col flex-1 justify-start">
                <h3 className="font-title font-semibold text-neutral-600 text-lg">{profe.name}</h3>
                <p className="text-sm text-neutral-500 mb-3">{profe.role}</p>
                <p className="text-sm text-neutral-600 leading-relaxed whitespace-pre-line">
                  {profe.description}
                </p>
              </div>
            </div>

          ))}
        </div>
      </div>
    </section>
  )
}
