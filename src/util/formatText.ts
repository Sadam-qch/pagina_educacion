import dayjs from "dayjs";

/**
 * Formatea una fecha en un formato legible en español.
 *
 * @param {string} date - La fecha en formato de cadena.
 * @returns {string} - La fecha formateada en el formato "D de MMMM de YYYY".
 *
 * @example
 * formatDate("2025-03-06"); // "6 de marzo de 2025"
 */
export const formatDate = (date: string): string => {
  return dayjs(date).locale("es").format("D [de] MMMM [de] YYYY");
};

/**
 * Elimina etiquetas HTML de un texto y devuelve solo el contenido de texto plano.
 *
 * @param {string} [html] - El texto con formato HTML.
 * @returns {string} - El texto sin etiquetas HTML.
 *
 * @example
 * stripHtml("<h1>Hola <b>Mundo</b></h1>"); // "Hola Mundo"
 * stripHtml(""); // ""
 * stripHtml(undefined); // ""
 */
export const stripHtml = (html?: string): string => {
  if (!html) return "";
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, "text/html");
  return doc.body.textContent || "";
};
