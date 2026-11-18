import FadeText from "./FadeText";
import { FaInstagram } from "react-icons/fa";

export default function Contact() {
  const direccion = "@vyfpilates Pilates Clásico en Palermo Hollywood";
  const instagramUrl = "https://www.instagram.com/vyfpilates";

  return (
    <section id="contacto" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-title text-center mb-6 text-neutral-600">
          Contacto
        </h2>

        <div className="grid gap-12 md:grid-cols-2">
          {/* Información */}
          <div>
            <ul className="space-y-3 text-neutral-600">
              <FadeText delay={100}>
                <li>📍 Medrano 1650, Palermo Soho</li>
              </FadeText>
              <FadeText delay={200}>
                <li>🕒 Horarios: Lun a Vie de 8:00 a 20:00</li>
              </FadeText>
              <FadeText delay={300}>
                <li>📞 Teléfono: +54 9 11 5880-1522</li>
              </FadeText>
              <FadeText delay={400}>
                <li>✉️ Email: vyfpilates@gmail.com</li>
              </FadeText>
              <FadeText delay={500}>
                <li className="flex items-center gap-2">
                  <FaInstagram
                    aria-hidden="true"
                    className="text-[#E4405F] h-5 w-5"
                  /> Seguinos en
                  <a
                    href={instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline decoration-neutral-300 hover:decoration-[#E4405F] hover:text-[#E4405F] transition-colors"
                    aria-label="Abrir perfil de Instagram en una pestaña nueva"
                  >
                    @vyfpilates
                  </a>
                </li>
              </FadeText>
            </ul>

            {/* Llamado a la acción */}
            <div className="bg-neutral-100 rounded-2xl p-8 flex flex-col justify-center mt-8">
              <FadeText delay={600}>
                <h3 className="font-title font-semibold text-lg mb-4 text-neutral-600">
                  ¿Querés reservar o consultar?
                </h3>
                <p className="text-neutral-600 mb-6">
                  Escribinos por WhatsApp y te respondemos a la brevedad para informarte sobre disponibilidad horaria y abonos.
                </p>
                <a
                  href="https://wa.me/5491158801522?text=Hola,%20quiero%20consultar%20sobre%20VyF%20Pilates."
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block text-center bg-[#874587] font-semibold hover:bg-[#874587] text-white px-6 py-3 rounded-full transition-colors"
                >
                  Escribir por WhatsApp
                </a>
              </FadeText>
            </div>
          </div>


          <div className="w-full">
            <div className="relative w-full h-[420px] rounded-2xl overflow-hidden shadow-lg">
              <iframe

                title="Ubicación VYF Pilates"
                src={`https://www.google.com/maps?q=${encodeURIComponent(
                  direccion
                )}&output=embed`}
                className="absolute inset-0 w-full h-full"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <p className="text-xs text-neutral-400 mt-2">
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}