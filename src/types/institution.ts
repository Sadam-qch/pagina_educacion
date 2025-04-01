export interface Authority {
  id_autoridad: number;
  foto_autoridad: string;
  nombre_autoridad: string;
  cargo_autoridad: string;
  facebook_autoridad: string;
  celular_autoridad: string;
  twiter_autoridad: string;
}

export interface Cover {
  portada_id: number;
  portada_imagen: string;
  portada_titulo: string;
  portada_subtitulo: string;
}

export interface Location {
  id_ubicacion: number;
  ubicacion_imagen: string;
  ubicacion_titulo: string;
  ubicacion_descripcion: string;
  ubicacion_latitud: string;
  ubicacion_longitud: string;
  ubicacion_estado: string;
}

export interface Color {
  id_color: number;
  color_primario: string;
  color_secundario: string;
  color_terciario: string;
}
export interface Institution {
  institucion_id: number;
  id_carrera: number;
  institucion_nombre: string;
  institucion_iniciales: string;
  institucion_logo: string;
  institucion_historia: string;
  institucion_sobre_ins: string;
  institucion_objetivos: string;
  institucion_mision: string;
  institucion_vision: string;
  institucion_link_video_vision: string;

  // Contact information
  institucion_celular1: number;
  institucion_celular2: number;
  institucion_telefono1: number;
  institucion_telefono2: number;
  institucion_correo1: string;
  institucion_correo2: string;

  // Social media
  institucion_facebook: string;
  institucion_youtube: string;
  institucion_twitter: string;

  // Location
  institucion_direccion: string;
  institucion_api_google_map: string;
  institucion_organigrama: string;

  // Related entities
  autoridad: Authority[];
  portada: Cover[];
  ubicacion: Location[];
  colorinstitucion: Color[];
}
