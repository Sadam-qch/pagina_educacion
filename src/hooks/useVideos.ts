import { Video } from "@/types/videos";
import { institutionApi } from "@/util/api";
import { useState, useEffect } from "react";

export const useVideos = () => {
  const [videos, setVideos] = useState<Video[] | null>(null);
  const [noticia, setNoticia] = useState<Video[]>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchInstitution = async () => {
      try {
        setLoading(true);
        const result = await institutionApi.getVideos();
        setVideos(result);
        setNoticia(
          result.filter(
            (data) =>
              data.video_tipo &&
              data.video_tipo === "NOTICIA"
          )
        );
      } catch (error) {
        setError("Error al cargar los videos");
        console.error("Error fetching videos:", error);
      }
    };

    fetchInstitution();
  }, []);

  return { videos, noticia, loading, error };
};
