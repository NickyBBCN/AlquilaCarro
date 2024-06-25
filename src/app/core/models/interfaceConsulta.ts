
export interface respuestaClienteAPI {
  isSuccessful: boolean;
  responseCode: number;
  message: string;
  responseDate: string;
  data: infoCliente;
}

export interface infoCliente {
  cliente: cliente;
  clientes: cliente[];
  inconsistencias: Inconsistencia[];
}

export interface Inconsistencia {
  mensaje: string;
  propiedad: string;
}

export interface cliente {
  cedula: string,
  nombre: string,
  fechaAlquiler: string,
  tiempoAlquilado: string,
  placa: string,
  marca: string
}
