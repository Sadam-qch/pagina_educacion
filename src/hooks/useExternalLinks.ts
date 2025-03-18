import { ExternalLink } from "@/types/externalLinks";
import { institutionApi } from "@/util/api";
import { useState, useEffect } from "react";

export const useExternalLinks = () => {
  const [links, setLinks] = useState<ExternalLink[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setloading] = useState<boolean>(false);
  useEffect(() => {
    const fetchLinks = async () => {
      try {
        setloading(true);
        const result = await institutionApi.getExternalLinks();
        setLinks(result);
      } catch (error) {
        setError("Error al cargar los enlaces externos");
        console.error("Error fetching external links:", error);
      } finally {
        setloading(false);
      }
    };

    fetchLinks();
  }, []);

  return { links, error, loading };
};
