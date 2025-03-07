const BASE_URL = "https://serviciopagina.upea.bo/api";

/**
 * Función genérica para hacer peticiones a la API.
 * @param endpoint - El endpoint de la API (ej: "InstitucionUPEA/12").
 * @param options - Opciones adicionales para `fetch` (ej: método, headers, body).
 * @returns Respuesta en formato JSON.
 */
export async function fetchAPI(endpoint: string, options: RequestInit = {}) {
  try {
    const response = await fetch(`${BASE_URL}/${endpoint}`, {
      ...options,
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        ...options.headers,
      },
    });

    if (!response.ok) {
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error al hacer la petición:", error);
    throw error;
  }
}

// Obtener datos de la institución con el ID 12
export const getInstitucion = async () => {
  return fetchAPI("InstitucionUPEA/12");
};

// Obtener datos de la carrera con el ID 4
export const getCarrera = async () => {
  return fetchAPI("carrera/4");
};

// Obtener ambos datos en paralelo
export const getDatosCombinados = async () => {
  try {
    const [institucionData, carreraData] = await Promise.all([
      getInstitucion(),
      getCarrera(),
    ]);

    return {
      institucionData,
      carreraData,
    };
  } catch (error) {
    console.error("Error al obtener los datos combinados:", error);
    throw error;
  }
};
