import { Offer } from "@/types/academicOffer";
import { institutionApi } from "@/util/api";
import { useState, useEffect } from "react";

export const useOffers = () => {
  const [offers, setOffers] = useState<Offer[]>();
  const [error, setError] = useState<string>();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchInstitution = async () => {
      try {
        setLoading(true);
        const result = await institutionApi.getOffers();
        setOffers(result);
      } catch (error) {
        setError("Error al cargar las ofertas");
        console.error("Error fetching:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchInstitution();
  }, []);

  return { offers, error, loading };
};
