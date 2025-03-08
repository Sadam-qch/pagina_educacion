import { AcademicGazette } from "@/types/academicGazette";
import { Offer } from "@/types/academicOffer";
import { Call } from "@/types/calls";
import { Course } from "@/types/courses";
import { Event } from "@/types/event";
import { ExternalLink } from "@/types/externalLinks";
import { Gazette } from "@/types/gazette";
import { Institution } from "@/types/institution";
import { Publication } from "@/types/publication";
import { Video } from "@/types/videos";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;
const INSTITUTION_ID = process.env.NEXT_PUBLIC_INSTITUCION_ID;
const CARRERA_ID = process.env.NEXT_PUBLIC_CARRERA_ID;

class ApiError extends Error {
  constructor(
    public status: number,
    message: string,
  ) {
    super(message);
    this.name = "ApiError";
  }
}

async function fetchApi<T>(endpoint: string): Promise<T> {
  try {
    const response = await fetch(`${API_BASE_URL}/api/${endpoint}`);

    if (!response.ok) {
      throw new ApiError(
        response.status,
        `API request failed: ${response.statusText}`,
      );
    }

    const data = await response.json();
    if (endpoint === `InstitucionUPEA/${INSTITUTION_ID}`)
      return data.Descripcion;
    return data;
  } catch (error) {
    if (error instanceof ApiError) {
      throw error;
    }
    throw new Error(
      `Failed to fetch data: ${
        error instanceof Error ? error.message : "Unknown error"
      }`,
    );
  }
}

export const institutionApi = {
  getInstitution: () =>
    fetchApi<Institution>(`InstitucionUPEA/${INSTITUTION_ID}`),

  getExternalLinks: () =>
    fetchApi<ExternalLink[]>(`linksIntExtAll/${INSTITUTION_ID}`),

  getAcademicGazette: () =>
    fetchApi<AcademicGazette[]>(`gacetaunivAll/${INSTITUTION_ID}`),

  getVideos: () => fetchApi<Video[]>(`VideosAll/${INSTITUTION_ID}`),

  getCourses: () => fetchApi<Course[]>(`cursosAll/${CARRERA_ID}`),

  getEvents: () => fetchApi<Event[]>(`eventoAll/${INSTITUTION_ID}`),

  // peticion para convocatorias
  getCalls: () => fetchApi<Call[]>(`convocatoriasAll/${CARRERA_ID}`),

  getOffers: () => fetchApi<Offer[]>(`OfertasAcademicasAll/${CARRERA_ID}`),

  getPublication: () =>
    fetchApi<Publication[]>(`publicacionesAll/${INSTITUTION_ID}`),

  getGazette: () => fetchApi<Gazette[]>(`gacetaunivAll/${INSTITUTION_ID}`),
};
