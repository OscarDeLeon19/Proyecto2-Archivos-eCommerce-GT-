import { Component } from '@angular/core';
import { Ruta } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-reportes-principal',
  templateUrl: './reportes-principal.component.html',
  styleUrls: ['./reportes-principal.component.css']
})
export class ReportesPrincipalComponent {

  rutas: Ruta[] = [
    {
      nombre: "Top 10 productos mas vendidos en un intervalo de tiempo",
      ruta: "/admin/reporte1"
    },
    {
      nombre: "Top 5 clientes que mas ganancias por compras han generado en un intervalo de tiempo",
      ruta: "/admin/reporte2"
    },
    {
      nombre: "Top 5 clientes que mas productos han vendido en un intervalo de tiempo",
      ruta: "/admin/reporte3"
    },
    {
      nombre: "Top 10 clientes que mas pedidos han realizado en un intervalo de tiempo",
      ruta: "/admin/reporte4"
    },
    {
      nombre: "Top 10 clientes que mas productos tienen a la venta",
      ruta: "/admin/reporte5"
    },
  ]

}
