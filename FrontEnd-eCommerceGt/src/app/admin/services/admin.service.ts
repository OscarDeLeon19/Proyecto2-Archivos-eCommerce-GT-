import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  usuario?: Usuario;
  baseUrlUser: string = "http://localhost:3000/user";

  constructor(private router: Router, private http: HttpClient) {
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

  verUsuariosAdmin(username: string) {
    return this.http.get<Usuario[]>(`${this.baseUrlUser}/verUsuariosAdmin?username=${username}`);
  }

  buscarUsuarioUsername(username: string) {
    return this.http.get<Usuario>(`${this.baseUrlUser}/buscarUsuario?username=${username}`);
  }

}