import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const placeId = process.env.GOOGLE_PLACE_ID;
    const apiKey = process.env.GOOGLE_MAPS_API_KEY;

    if (!placeId || !apiKey) {
      return NextResponse.json(
        { error: 'Credenciales faltantes', detail: 'Faltan configurar GOOGLE_PLACE_ID o GOOGLE_MAPS_API_KEY en las variables de entorno.' },
        { status: 500 }
      );
    }

    const url =
      `https://places.googleapis.com/v1/places/${placeId}` +
      `?languageCode=es-AR` + // podés usar "es" si preferís
      `&fields=displayName,rating,reviewSummary,` +
      `reviews.rating,reviews.publishTime,reviews.text,reviews.originalText,` +
      `reviews.authorAttribution` +
      `&key=${apiKey}`; // ← ¡ESTO ES LO QUE FALTABA!

    const res = await fetch(url, {
      headers: {
        'X-Goog-FieldMask': '*',
        'Accept-Language': 'es-AR',
      },
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      const msg = await res.text();
      return NextResponse.json({ error: 'Google Places error', detail: msg }, { status: 500 });
    }

    const json = await res.json();
    return NextResponse.json(json);
  } catch (err: any) {
    return NextResponse.json({ error: 'Internal error', detail: err.message }, { status: 500 });
  }
}
