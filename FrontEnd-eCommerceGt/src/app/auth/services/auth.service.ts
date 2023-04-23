import { Injectable } from '@angular/core';
import { Usuario } from '../../interfaces/interfaces';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl: string = "http://localhost:3000/user";

  constructor(private http: HttpClient) { }

  crearUsuario(body: any){
    return this.http.post(this.baseUrl,body);
  }

  obtenerUsuario(username: string, password: string){
    return this.http.get<Usuario>(`${this.baseUrl}?username=${username}&password=${password}`);
  }

  agregarTarjeta(body: any){
    return this.http.put(`${this.baseUrl}/addCard`,body);
  }

  borrarTarjeta(body: any){
    return this.http.put(`${this.baseUrl}/deleteCard`,body);
  }

  actualizarUsuario(body: any){
    return this.http.put(`${this.baseUrl}/update`,body);
  }
}
