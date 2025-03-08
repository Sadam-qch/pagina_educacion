import { Video } from "@/types/videos";
import { institutionApi } from "@/util/api";
import { useState, useEffect } from "react";

export const useVideos = () => {
  const [videos, setVideos] = useState<Video[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchInstitution = async () => {
      try {
        const result = await institutionApi.getVideos();
        setVideos(result);
      } catch (error) {
        setError("Error al cargar los videos");
        console.error("Error fetching videos:", error);
      }
    };

    fetchInstitution();
  }, []);

  return { videos, error };
};
