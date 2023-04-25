import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Pedido, Producto, Usuario } from 'src/app/interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class PaqueteriaService {

  baseUrlPedidos: string = "http://localhost:3000/pedido";
  usuario?: Usuario;

  constructor(private router: Router, private http: HttpClient) {
    console.log("Activacion");
    this.obtenerUsuario();
  }

  obtenerUsuario() {
    let jsonUser = localStorage.getItem("usuario");
    if (jsonUser) {
      this.usuario = JSON.parse(jsonUser);
    } else {
      this.router.navigate(['/auth/login']);
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

}
