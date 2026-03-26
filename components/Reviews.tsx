
import * as React from "react";
import { Star } from "lucide-react";

type Review = {
  rating: number;
  text?: { text?: string };
  originalText?: { text?: string };
  publishTime?: string; // ISO
  textLanguageCode?: string;
  authorAttribution?: { displayName?: string; uri?: string; photoUri?: string };
};

const fmtFecha = (iso?: string) => {
  if (!iso) return "";
  try {
    return new Date(iso).toLocaleDateString("es-AR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  } catch {
    return "";
  }
};

/** Estrellas con relleno parcial (soporta decimales) */
function Stars({
  value,
  size = 16,
  className = "",
}: {
  value: number;
  size?: number;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-1 ${className}`}
      aria-label={`${value.toFixed(1)} de 5`}
      title={`${value.toFixed(1)} de 5`}
    >
      {[1, 2, 3, 4, 5].map((i) => {
        const fill = Math.min(Math.max(value - (i - 1), 0), 1); // 0..1
        return (
          <span
            key={i}
            className="relative inline-block"
            style={{ width: size, height: size, lineHeight: 0 }}
          >
            {/* base tenue */}
            <Star size={size} className="text-neutral-400" />
            {/* capa rellena parcial */}
            <span
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${fill * 100}%` }}
            >
              <Star size={size} className="text-amber-400" style={{ fill: "rgb(250 204 21)" }} />
            </span>
          </span>
        );
      })}
    </span>
  );
}

async function getReviews() {
  const placeId = process.env.GOOGLE_PLACE_ID;
  const apiKey = process.env.GOOGLE_MAPS_API_KEY;

  if (!placeId || !apiKey) {
    return null;
  }

  const url =
    `https://places.googleapis.com/v1/places/${placeId}` +
    `?languageCode=es-AR` +
    `&fields=displayName,rating,reviewSummary,` +
    `reviews.rating,reviews.publishTime,reviews.text,reviews.originalText,` +
    `reviews.authorAttribution` +
    `&key=${apiKey}`;

  try {
    const res = await fetch(url, {
      headers: {
        'X-Goog-FieldMask': '*',
        'Accept-Language': 'es-AR',
      },
      next: { revalidate: 3600 }, // Revalidar cada hora (o según prefieras)
    });

    if (!res.ok) return null;
    return await res.json();
  } catch (err) {
    console.error("Error fetching reviews:", err);
    return null;
  }
}

export default async function Reviews() {
  const data = await getReviews();

  if (!data) return null; // O un mensaje de error sutil

  const reviews: Review[] = (data.reviews ?? []).slice(0, 5);
  const average = Number(data.rating ?? 0);
  const count = data.reviewSummary?.reviewCount ?? null;

  return (
    <section id="reseñas" className="bg-white text-neutral-900 scroll-mt-24">
      {/* Contenedor alineado al resto de la landing */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Encabezado: nombre + promedio + total */}
        <header className="mb-6">
          <h2 className="text-2xl font-title font-semibold tracking-tight">Reseñas en Google</h2>
          <div className="mt-2 flex flex-wrap items-center gap-2 text-neutral-700">
            <span className="font-medium">{data.displayName?.text ?? "Tu negocio"}</span>
            {average ? (
              <>
                <Stars value={average} size={18} />
                <span className="text-sm">
                  {average.toFixed(1)} · {count ?? "–"} reseñas
                </span>
              </>
            ) : null}
          </div>
        </header>

        {/* Grid de cards claras (borde suave + sombra sutil) */}
        <ul className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {reviews.map((r, i) => {
            const name = r.authorAttribution?.displayName ?? "Autor";
            const link = r.authorAttribution?.uri;
            const photo = r.authorAttribution?.photoUri;
            const initials = name?.[0]?.toUpperCase() ?? "A";
            const body = r.originalText?.text ?? r.text?.text; // priorizamos texto original (no traducido)

            return (
              <li
                key={i}
                className="
                  rounded-2xl border border-neutral-200 bg-white p-6
                  shadow-sm hover:shadow-md transition-shadow
                "
              >
                {/* Header: avatar + nombre + estrellas + fecha */}
                <div className="flex items-start gap-4">
                  {photo ? (
                    <img
                      src={photo}
                      alt={`Foto de ${name}`}
                      width={48}
                      height={48}
                      referrerPolicy="no-referrer"
                      className="h-12 w-12 rounded-full object-cover ring-1 ring-neutral-200"
                    />
                  ) : (
                    <div
                      className="
                        h-12 w-12 rounded-full grid place-items-center
                        bg-amber-400/20 text-amber-600 font-bold ring-1 ring-neutral-200
                      "
                      aria-hidden="true"
                      title={name}
                    >
                      {initials}
                    </div>
                  )}

                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      {link ? (
                        <a
                          href={link}
                          target="_blank"
                          rel="noreferrer"
                          className="font-semibold underline underline-offset-2 decoration-neutral-300 hover:decoration-amber-400"
                        >
                          {name}
                        </a>
                      ) : (
                        <span className="font-semibold">{name}</span>
                      )}
                      <Stars value={r.rating} size={14} />
                    </div>

                    {r.publishTime ? (
                      <div className="mt-1 text-xs text-neutral-500">{fmtFecha(r.publishTime)}</div>
                    ) : null}
                  </div>
                </div>

                {/* Texto de la reseña */}
                {body ? (
                  <p className="mt-3 leading-7 text-neutral-800" lang="es">
                    {body}
                  </p>
                ) : null}
              </li>
            );
          })}
        </ul>

        {/* Atribución requerida por políticas de Google Maps */}
        <p className="mt-6 text-xs text-neutral-500">
          Reviews y calificaciones provienen de Google Maps.
        </p>
      </div>
    </section>
  );
}