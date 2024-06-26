
export interface respuestaAlquilerAPI {
  isSuccessful: boolean;
  responseCode: number;
  message: string;
  responseDate: string;
  data: infoAlquiler;
}

export interface infoAlquiler {
  alquiler: alquiler;
  alquileres: alquiler[];
  inconsistencias: Inconsistencia[];
}

export interface Inconsistencia {
  mensaje: string;
  propiedad: string;
}

export interface alquiler {
  id_Alquiler: number,
  fecha: string,
  tiempo: number,
  valorTotal: number,
  saldo: number,
  abonoInicial: number,
  devuelto: true,
  id_Cliente: number,
  id_Carro: number
}
