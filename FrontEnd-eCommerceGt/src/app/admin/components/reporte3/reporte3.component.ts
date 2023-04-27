import { Component } from '@angular/core';
import * as moment from 'moment';
import { ReporteGanancias, ReporteProductos, ReporteVentas } from 'src/app/interfaces/interfaces';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-reporte3',
  templateUrl: './reporte3.component.html',
  styleUrls: ['./reporte3.component.css']
})
export class Reporte3Component {

  fechaActual: string = "";
  fechaInicial: string = "";
  fechaSiguiente: string = "";

  ventas: ReporteVentas[] = [];

  constructor(private adminService: AdminService) {
  }

  ngOnInit(): void {
    this.fechaActual = moment().format("YYYY-MM-DD");
    this.fechaSiguiente = moment().format("YYYY-MM-DD");
    this.fechaInicial = moment().subtract("10", "days").format("YYYY-MM-DD");
  }

  generarReporte() {
    this.adminService.verReporte3(this.fechaInicial, this.fechaSiguiente)
      .subscribe({
        next: (res: ReporteVentas[]) => {
          if (res) {
            this.ventas = res
          }
        }
      });
  }
}
