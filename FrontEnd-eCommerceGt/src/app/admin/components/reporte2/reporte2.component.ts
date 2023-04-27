import { Component } from '@angular/core';
import * as moment from 'moment';
import { ReporteGanancias, ReporteProductos } from 'src/app/interfaces/interfaces';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-reporte2',
  templateUrl: './reporte2.component.html',
  styleUrls: ['./reporte2.component.css']
})
export class Reporte2Component {
  
  fechaActual: string = "";
  fechaInicial: string = "";
  fechaSiguiente: string = "";

  ventas: ReporteGanancias[] = [];

  constructor(private adminService: AdminService) {
  }

  ngOnInit(): void {
    this.fechaActual = moment().format("YYYY-MM-DD");
    this.fechaSiguiente = moment().format("YYYY-MM-DD");
    this.fechaInicial = moment().subtract("10", "days").format("YYYY-MM-DD");
  }

  generarReporte() {
    this.adminService.verReporte2(this.fechaInicial, this.fechaSiguiente)
      .subscribe({
        next: (res: ReporteGanancias[]) => {
          if (res) {
            this.ventas = res
          }
        }
      });
  }
}
