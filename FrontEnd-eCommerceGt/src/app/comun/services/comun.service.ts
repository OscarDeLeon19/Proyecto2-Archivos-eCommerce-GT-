import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Producto, Usuario } from 'src/app/interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ComunService {

  baseUrl: string = "http://localhost:3000/productos";

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

  verProductos(){
    return this.http.get<Producto[]>(`${this.baseUrl}/all`);
  }

  verProductosFiltrados(nombre: string){
    return this.http.get<Producto[]>(`${this.baseUrl}/filter?nombre=${nombre}`);
  }

  
}
