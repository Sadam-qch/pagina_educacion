import { Dispatch, SetStateAction } from "react";

export const handleDownload = async (
  href: string,
  setLoading?: Dispatch<SetStateAction<boolean>>,
) => {
  try {
    if (setLoading) setLoading(true);
    const response = await fetch(href, { mode: "cors" });

    if (!response.ok) {
      throw new Error("Error al descargar el archivo");
    }

    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = href.split("/").pop() || "archivo"; // Nombre del archivo
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  } catch (error) {
    console.error("Error descargando el archivo:", error);
  } finally {
    if (setLoading) setLoading(false);
  }
};
