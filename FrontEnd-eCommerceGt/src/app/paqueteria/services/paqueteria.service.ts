import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Pedido, Producto, Usuario } from 'src/app/interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class PaqueteriaService {

  baseUrlPedidos: string = "http://localhost:3000/pedido";
  baseUrlProductos: string = "http://localhost:3000/productos";
  usuario?: Usuario;

  constructor(private router: Router, private http: HttpClient) {
    this.obtenerUsuario();
  }

  obtenerUsuario() {
    let jsonUser = localStorage.getItem("usuario");
    if (jsonUser) {
      this.usuario = JSON.parse(jsonUser);
    }
  }

  comprobarLogin() {
    const user = localStorage.getItem("usuario");
    if (user) {
      const usuario: Usuario = JSON.parse(user);
      if (usuario.tipoUsuario == "Paqueteria") {
        return true;
      } else {
        return false;
      }
    } else {
      return false
    }
  }

  getUsuario() {
    return this.usuario;
  }

  verPedidosEnCurso(estado: string){
    return this.http.get<Pedido[]>(`${this.baseUrlPedidos}/enCurso?estado=${estado}`);
  }

  modificarEstado(body: any){
    return this.http.put(`${this.baseUrlPedidos}/cambiarEstado`, body);
  }

  obtenerPedido(_id: string){
    return this.http.get<Pedido>(`${this.baseUrlPedidos}/obtenerPedido?_id=${_id}`);
  }

  cambiarFechaEntrega(body: any){
    return this.http.put(`${this.baseUrlPedidos}/cambiarFechaEntrega`, body);
  }

  verProductosPendientes(){
    return this.http.get<Producto[]>(`${this.baseUrlProductos}/pendientes`);
  }

  cambiarEstadoProducto(body: any){
    return this.http.put(`${this.baseUrlProductos}/cambiarEstado`, body);
  }

}
