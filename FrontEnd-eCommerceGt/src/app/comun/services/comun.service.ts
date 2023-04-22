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

  constructor(private router: Router, private http: HttpClient) { }

  obtenerUsuario() {
    let jsonUser = localStorage.getItem("usuario");
    if (jsonUser) {
      this.usuario = JSON.parse(jsonUser);
    } else {
      this.router.navigate(['']);
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

}
