export interface Facilitator {
  id_facilitador: number;
  foto_facilitador: string;
  nombre_facilitador: string;
  cargo_facilitador: string;
  facebook_facilitador: string;
  celular_facilitador: string;
  descripcion_facilitador: string;
  fecha_update: string;
}

export interface Course {
  iddetalle_cursos_academicos: number;
  det_img_portada: string;
  det_titulo: string;
  det_descripcion: string;
  det_costo: number;
  det_costo_ext: number;
  det_costo_profe: number;
  det_cupo_max: number;
  det_carga_horaria: number;
  det_lugar_curso: string;
  det_modalidad: string;
  det_fecha_ini: string;
  det_fecha_fin: string;
  det_codigo: string;
  det_hora_ini: string;
  det_grupo_whatssap: string;
  det_version: string;
  det_estado: string;
  idtipo_curso_otros: number;
  tipo_curso_otro: {
    tipo_conv_curso_nombre: string;
    tipo_conv_curso_estado: string;
  };
  facilitadores: Facilitator[];
}
