import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/auth/interfaces/usuario.interface';

@Injectable({
  providedIn: 'root'
})
export class ComunService {

  usuario?: Usuario;

  constructor(private router: Router) { }

  obtenerUsuario() {
    let jsonUser = localStorage.getItem("usuario");
    if (jsonUser) {
      this.usuario = JSON.parse(jsonUser);
      console.log('service');
      console.log(this.usuario);
    } else {
      this.router.navigate(['']);
    }
  }

  getUsuario() {
    return this.usuario;
  }
}
