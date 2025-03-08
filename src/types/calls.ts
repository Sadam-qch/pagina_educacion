export interface Call {
  idconvocatorias: number;
  con_foto_portada: string;
  con_titulo: string;
  con_descripcion: string;
  con_estado: string;
  con_fecha_inicio: string;
  con_fecha_fin: string;
  tipo_conv_comun: {
    idtipo_conv_comun: number;
    tipo_conv_comun_titulo: string;
    tipo_conv_comun_estado: string;
  };
}
