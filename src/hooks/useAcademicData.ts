// hooks/useAcademicData.ts
import { AcademicGazette } from "@/types/academicGazette";
import { institutionApi } from "@/util/api";
import { useState, useEffect } from "react";

export const useAcademicData = () => {
  const [academicData, setAcademicData] = useState<{
    horario: AcademicGazette | null;
    calendario: AcademicGazette | null;
    planEstudio: AcademicGazette | null;
  }>({
    horario: null,
    calendario: null,
    planEstudio: null,
  });
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchGacetaAcademica = async () => {
      try {
        setLoading(true);
        const result = await institutionApi.getAcademicGazette();
        setAcademicData({
          horario:
            result.find((data) => data.gaceta_tipo === "HORARIO") ?? null,
          calendario:
            result.find(
              (data) => data.gaceta_tipo === "CALENDARIO ACADEMICO"
            ) ?? null,
          planEstudio:
            result.find((data) => data.gaceta_tipo === "PLAN DE ESTUDIO") ??
            null,
        });
      } catch (error) {
        setError("Error al cargar la información académica");
        console.error("Error fetching academic gazette:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchGacetaAcademica();
  }, []);

  return { academicData, error, loading };
};
