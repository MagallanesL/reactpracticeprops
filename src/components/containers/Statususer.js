import { estadoUser } from "../../models/estado.users";

export class User {
  nombre = "";
  apellido = "";
  email = "";
  estado = estadoUser.conectado;

  constructor(nombre, apellido, email, estado) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.estado = estado;
  }
}
