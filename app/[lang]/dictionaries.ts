// app/[lang]/dictionaries.ts
import "server-only"; // Next.js: for server-side only import

import { Locale } from "./locales"; // Importer le type Locale

// Importer dynamiquement les fichiers JSON des traductions
const dictionaries = {
  en: () => import("./dictionaries/en.json").then((module) => module.default),
  fr: () => import("./dictionaries/fr.json").then((module) => module.default),
};

// La fonction pour obtenir le dictionnaire en fonction de la langue
export const getDictionary = async (locale: Locale) => {
  const loadDictionary = dictionaries[locale];

  // Si la langue n'est pas supportée, on peut retourner une langue par défaut (ici 'en')
  if (!loadDictionary) {
    return dictionaries["en"]();
  }

  return loadDictionary();
};
