import { Institution } from "@/types/institution";
import { institutionApi } from "@/util/api";
import { useState, useEffect } from "react";

export const useInstitutionData = () => {
  const [institionData, setInstitionData] = useState<Institution>();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchInstitution = async () => {
      try {
        setLoading(true);
        const result = await institutionApi.getInstitution();
        setInstitionData(result);
      } catch (error) {
        setError("Error al cargar los datos de la institución");
        console.error("Error fetching insitutions:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchInstitution();
  }, []);

  return { institionData, error, loading };
};
