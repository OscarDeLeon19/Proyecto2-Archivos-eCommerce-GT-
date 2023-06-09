import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Pedido, Producto, Usuario, Venta } from 'src/app/interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ComunService {

  baseUrlProductos: string = "http://localhost:3000/productos";
  baseUrlVenta: string = "http://localhost:3000/venta";
  baseUrlPedido: string = "http://localhost:3000/pedido";

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
      if (usuario.tipoUsuario == "Comun") {
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

  verProductos(username: string) {
    return this.http.get<Producto[]>(`${this.baseUrlProductos}/all?username=${username}`);
  }

  verProductosFiltrados(nombre: string, username: string) {
    return this.http.get<Producto[]>(`${this.baseUrlProductos}/filter?nombre=${nombre}&username=${username}`);
  }

  ingresarVenta(body: Venta[]) {
    return this.http.post(`${this.baseUrlVenta}/insert`, body);
  }


  ingresarPedido(body: Pedido) {
    return this.http.post(`${this.baseUrlPedido}/insert`, body);
  }

  verPedidos(username: string) {
    return this.http.get<Pedido[]>(`${this.baseUrlPedido}?username=${username}`);
  }

  agregarProducto(body: any) {
    return this.http.post(`${this.baseUrlProductos}/agregar`, body);
  }


  verMisProductos(username: string) {
    return this.http.get<Producto[]>(`${this.baseUrlProductos}/misProductos?username=${username}`);
  }

  verProductoPorId(id: string) {
    return this.http.get<Producto>(`${this.baseUrlProductos}/verProductoId?id=${id}`);
  }

  actualizarProducto(body: any) {
    return this.http.put(`${this.baseUrlProductos}/actualizarProducto`, body);
  }

  borrarProducto(_id: string) {
    return this.http.delete(`${this.baseUrlProductos}/borrarProducto?_id=${_id}`, { body: [{}] });
  }

  borrarVariosProductos(body: any) {
    return this.http.delete(`${this.baseUrlProductos}/borrarVariosProducto`, { body });
  }
}
