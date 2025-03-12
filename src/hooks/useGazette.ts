import { Gazette } from "@/types/gazette";
import { institutionApi } from "@/util/api";
import { useState, useEffect } from "react";

export const useGazette = () => {
  const [gazette, setGazette] = useState<Gazette[]>();
  const [modelo_biblio, setModBiblioteca] = useState<Gazette[]>();
  const [modelo_kardex, setModKardex] = useState<Gazette[]>();
  const [modelo_tus, setModTus] = useState<Gazette[]>();
  const [error, setError] = useState<string>();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchInstitution = async () => {
      try {
        setLoading(true);
        const result = await institutionApi.getGazette();
        setGazette(result);
        setModBiblioteca(
          result.filter(
            (data) =>
              data.gaceta_tipo &&
              data.gaceta_tipo === "MODELO DE CARTAS PARA BIBLIOTECA"
          )
        );
        setModKardex(
          result.filter(
            (data) =>
              data.gaceta_tipo &&
              data.gaceta_tipo === "MODELO DE CARTAS PARA KARDEX"
          )
        );
        setModTus(
          result.filter(
            (data) =>
              data.gaceta_tipo &&
              data.gaceta_tipo === "MODELOS DE CARTAS PARA EL TUS"
          )
        );
      } catch (error) {
        setError("Error al cargar las gacetas");
        console.error("Error fetching:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchInstitution();
  }, []);

  return { gazette, modelo_biblio, modelo_kardex, modelo_tus, error, loading };
};
