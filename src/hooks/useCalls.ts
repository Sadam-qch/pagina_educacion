import { Call } from "@/types/calls";
import { institutionApi } from "@/util/api";
import { useState, useEffect } from "react";

export const useCalls = () => {
  const [calls, setCalls] = useState<Call[]>();
  const [error, setError] = useState<string>();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchInstitution = async () => {
      try {
        setLoading(true);
        const result = await institutionApi.getCalls();
        setCalls(result);
      } catch (error) {
        setError("Error al cargar las convocatorias");
        console.error("Error fetching:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchInstitution();
  }, []);

  return { calls, error, loading };
};
