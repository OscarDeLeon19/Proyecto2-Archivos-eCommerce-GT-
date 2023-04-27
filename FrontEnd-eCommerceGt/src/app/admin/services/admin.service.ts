import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ProductosEnVenta, ReporteGanancias, ReportePedidos, ReporteProductos, ReporteVentas, Usuario } from 'src/app/interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  usuario?: Usuario;
  baseUrlUser: string = "http://localhost:3000/user";
  baseUrlVentas: string = "http://localhost:3000/venta";
  baseUrlPedido: string = "http://localhost:3000/pedido";
  baseUrlProductos: string = "http://localhost:3000/productos";

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

  borrarUsuario(username: string) {
    return this.http.delete(`${this.baseUrlUser}/borrarUsuario?username=${username}`);
  }

  verReporte1(fechaInicial: string, fechaFinal: string) {
    return this.http.get<ReporteProductos[]>(`${this.baseUrlVentas}/reporte1?fechaInicial=${fechaInicial}&fechaFinal=${fechaFinal}`);
  }

  verReporte2(fechaInicial: string, fechaFinal: string) {
    return this.http.get<ReporteGanancias[]>(`${this.baseUrlVentas}/reporte2?fechaInicial=${fechaInicial}&fechaFinal=${fechaFinal}`);
  }

  verReporte3(fechaInicial: string, fechaFinal: string) {
    return this.http.get<ReporteVentas[]>(`${this.baseUrlVentas}/reporte3?fechaInicial=${fechaInicial}&fechaFinal=${fechaFinal}`);
  }

  verReporte4(fechaInicial: string, fechaFinal: string) {
    return this.http.get<ReportePedidos[]>(`${this.baseUrlPedido}/reporte4?fechaInicial=${fechaInicial}&fechaFinal=${fechaFinal}`);
  }

  verReporte5() {
    return this.http.get<ProductosEnVenta[]>(`${this.baseUrlProductos}/reporte5`);
  }

}
