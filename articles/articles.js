// Importation des articles
// articles/articles.js
import AI from "./content/AI.js";
import ROBOTIC from "./content/Robotique.js";
import CYBER from "./content/Cyber.js";
import DEV from "./content/Development.js";

// Map mois FR -> index JS (0-11)
const MONTHS_FR = {
  janvier: 0,
  février: 1,
  fevrier: 1, // on sait jamais 
  mars: 2,
  avril: 3,
  mai: 4,
  juin: 5,
  juillet: 6,
  août: 7,
  aout: 7,    // on sait jamais
  septembre: 8,
  octobre: 9,
  novembre: 10,
  décembre: 11,
  decembre: 11, // il vaut mieux prévenir que guérir
};

/**
 * Parse une date FR du type "28 octobre 2025" -> timestamp (ms).
 * Retourne -Infinity si la date est invalide (pour trier en dernier).
 */
export function parseFrenchDateToTime(dateStr) {
  if (!dateStr || typeof dateStr !== "string") return -Infinity;

  // "28 octobre 2025"
  const m = dateStr.trim().toLowerCase().match(/^(\d{1,2})\s+([a-zéèêëàâîïôöûüç]+)\s+(\d{4})$/i);
  if (!m) return -Infinity;

  const day = Number(m[1]);
  const monthName = m[2];
  const year = Number(m[3]);

  const monthIndex = MONTHS_FR[monthName];
  if (monthIndex === undefined) return -Infinity;

  // Date en "local time"
  const d = new Date(year, monthIndex, day);
  const time = d.getTime();

  return Number.isFinite(time) ? time : -Infinity;
}

/**
 * Trie automatiquement les articles d'une catégorie (du plus récent au plus ancien)
 * en se basant sur "date".
 */
export function sortArticlesByMostRecent(articles = []) {
  return [...articles].sort((a, b) => {
    const tb = parseFrenchDateToTime(b?.date);
    const ta = parseFrenchDateToTime(a?.date);
    return tb - ta; // décroissant
  });
}

/**
 * Récupère toutes les catégories, et retourne un objet:
 * { AI: [...triés], ROBOTIC: [...triés], CYBER: [...triés], DEV: [...triés] }
 */
export function getArticlesByCategorySorted() {
  const categories = { AI, ROBOTIC, CYBER, DEV };

  return Object.fromEntries(
    Object.entries(categories).map(([cat, list]) => [cat, sortArticlesByMostRecent(list)])
  );
}

export default getArticlesByCategorySorted();
