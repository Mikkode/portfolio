// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import { Locale } from "./app/[lang]/locales";

// Définir les locales supportées
const locales = ["en-US", "fr-FR"];
const defaultLocale = "en-US";

// Fonction pour obtenir la locale préférée
function getLocale(request: NextRequest): string {
  // Utiliser Negotiator pour analyser l'en-tête Accept-Language
  const negotiator = new Negotiator({
    headers: {
      "accept-language": request.headers.get("accept-language") || "",
    },
  });
  const languages = negotiator.languages();

  // Utiliser la fonction match pour déterminer la meilleure correspondance
  return match(languages, locales, defaultLocale);
}

// Fonction pour normaliser la locale (fr-FR -> fr)
function normalizeLocale(locale: string): Locale {
  return locale.split("-")[0] as Locale; // Convertir 'fr-FR' en 'fr'
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Si l'URL contient déjà une locale, on ne fait rien
  if (
    locales.some((locale) => pathname.startsWith(`/${locale.split("-")[0]}`))
  ) {
    return NextResponse.next(); // Continue la requête normalement
  }

  // Obtenir la langue préférée
  const locale = getLocale(request);

  // Normaliser la locale (fr-FR -> fr)
  const normalizedLocale = normalizeLocale(locale);

  // Rediriger vers la version de la page avec la locale correspondante
  return NextResponse.redirect(
    new URL(`/${normalizedLocale}${pathname}`, request.url)
  );
}

// Matcher pour quelles routes appliquer le middleware
export const config = {
  matcher: ["/"], // Appliquer uniquement sur certaines routes
};
