"use client";
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

/**
 * Limpia y sanitiza una cadena de HTML para prevenir ataques XSS (Cross-Site Scripting).
 *
 * Esta función convierte una cadena de HTML en texto seguro escapando
 * cualquier etiqueta o código HTML potencialmente peligroso.
 *
 * @param {string} html - La cadena de HTML a sanitizar.
 * @returns {string} - La cadena sanitizada con las etiquetas HTML escapadas.
 *
 * @example
 * const unsafeHTML = "<script>alert('Malicioso')</script>";
 * const safeHTML = sanitizeHTML(unsafeHTML);
 * console.log(safeHTML); // &lt;script&gt;alert('Malicioso')&lt;/script&gt;
 */

export function sanitizeHTML(html?: string): string {
  // Si está en el servidor, usa expresiones regulares
  if (typeof window === "undefined") {
    if (!html) return "";
    return html
      .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "") // Eliminar scripts
      .replace(/on\w+="[^"]*"/gi, "") // Eliminar manejadores de eventos
      .replace(/javascript:/gi, "") // Eliminar javascript links
      .replace(/<\/?[^>]+(>|$)/g, ""); // Opcional: remover todas las etiquetas HTML
  }

  // Si está en el cliente, usa método de DOM
  if (!html) return "";

  const div = document.createElement("div");

  // Usar textContent para escapar HTML potencialmente malicioso
  div.textContent = html;

  // Eliminar scripts y eventos potencialmente peligrosos
  const sanitizedHTML = div.innerHTML
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "")
    .replace(/on\w+="[^"]*"/gi, "")
    .replace(/javascript:/gi, "");

  return sanitizedHTML;
}
