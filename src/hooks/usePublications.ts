import { Publication } from "@/types/publication";
import { institutionApi } from "@/util/api";
import { useState, useEffect } from "react";

export const usePublication = () => {
  const [publication, setPublication] = useState<Publication[]>();
  const [error, setError] = useState<string>();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchInstitution = async () => {
      try {
        setLoading(true);
        const result = await institutionApi.getPublication();
        setPublication(result);
      } catch (error) {
        setError("Error al cargar las publicaciones");
        console.error("Error fetching:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchInstitution();
  }, []);

  return { publication, error, loading };
};
