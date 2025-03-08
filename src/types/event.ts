export interface Gallery {
  galeria_id: number;
  galeria_imagen: string;
}

export interface Event {
  evento_id: number;
  evento_titulo: string;
  evento_tipo: string;
  evento_imagen: string;
  evento_descripcion: string;
  evento_fecha: string;
  evento_hora: string;
  evento_lugar: string;
  evento_galeria: Gallery[];
}
