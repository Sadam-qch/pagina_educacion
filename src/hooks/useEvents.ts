import { Event } from "@/types/event";
import { institutionApi } from "@/util/api";
import { useState, useEffect } from "react";

export const useEvents = () => {
  const [events, setEvents] = useState<Event[]>();
  const [error, setError] = useState<string>();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchInstitution = async () => {
      try {
        setLoading(true);
        const result = await institutionApi.getEvents();
        setEvents(result);
      } catch (error) {
        setError("Error al cargar los eventos");
        console.error("Error fetching events:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchInstitution();
  }, []);

  return { events, error, loading };
};
