
export class Presupuesto {
  constructor({
    tipoServicio = '',
    nombre = '',
    telefono = '',
    email = '',
    fecha = '',
    direccionOrigen = '',
    direccionDestino = '',
    consulta = '',
    politicaPrivacidad = false
  } = {}) {
    this.tipoServicio = tipoServicio;
    this.nombre = nombre;
    this.telefono = telefono;
    this.email = email;
    this.fecha = fecha;
    this.direccionOrigen = direccionOrigen;
    this.direccionDestino = direccionDestino;
    this.consulta = consulta;
    this.politicaPrivacidad = politicaPrivacidad;
  }
}




