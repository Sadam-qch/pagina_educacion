import { Gazette } from "@/types/gazette";
import { institutionApi } from "@/util/api";
import { useState, useEffect } from "react";

export const useGazette = () => {
  const [gazette, setGazette] = useState<Gazette[]>();
  const [error, setError] = useState<string>();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchInstitution = async () => {
      try {
        setLoading(true);
        const result = await institutionApi.getGazette();
        setGazette(result);
      } catch (error) {
        setError("Error al cargar las gacetas");
        console.error("Error fetching:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchInstitution();
  }, []);

  return { gazette, error, loading };
};
