import { Component } from '@angular/core';
import * as moment from 'moment';
import { ReportePedidos, ReporteVentas } from 'src/app/interfaces/interfaces';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-reporte4',
  templateUrl: './reporte4.component.html',
  styleUrls: ['./reporte4.component.css']
})
export class Reporte4Component {
  fechaActual: string = "";
  fechaInicial: string = "";
  fechaSiguiente: string = "";

  ventas: ReportePedidos[] = [];

  constructor(private adminService: AdminService) {
  }

  ngOnInit(): void {
    this.fechaActual = moment().format("YYYY-MM-DD");
    this.fechaSiguiente = moment().format("YYYY-MM-DD");
    this.fechaInicial = moment().subtract("10", "days").format("YYYY-MM-DD");
  }

  generarReporte() {
    this.adminService.verReporte4(this.fechaInicial, this.fechaSiguiente)
      .subscribe({
        next: (res: ReportePedidos[]) => {
          if (res) {
            this.ventas = res
          }
        }
      });
  }
}
