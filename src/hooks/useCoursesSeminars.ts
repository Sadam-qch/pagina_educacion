import { Course } from "@/types/courses";
import { institutionApi } from "@/util/api";
import { useState, useEffect } from "react";

export const useCoursesSeminars = () => {
  const [courses, setCourses] = useState<Course[]>();
  const [seminars, setSeminars] = useState<Course[]>();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        setLoading(true);
        const result = await institutionApi.getCourses();
        setCourses(
          result.filter(
            (data) =>
              data.tipo_curso_otro &&
              data.tipo_curso_otro.tipo_conv_curso_nombre === "CURSOS",
          ),
        );

        setSeminars(
          result.filter(
            (data) =>
              data.tipo_curso_otro &&
              data.tipo_curso_otro.tipo_conv_curso_nombre === "SEMINARIOS",
          ),
        );
      } catch (error) {
        setError("Error al cargar los cursos y seminarios");
        console.error("Error fetching:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  return { courses, seminars, error, loading };
};
