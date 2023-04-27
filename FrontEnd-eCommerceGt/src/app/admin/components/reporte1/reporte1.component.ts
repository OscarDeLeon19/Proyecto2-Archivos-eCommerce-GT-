import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { ReporteProductos } from 'src/app/interfaces/interfaces';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-reporte1',
  templateUrl: './reporte1.component.html',
  styleUrls: ['./reporte1.component.css']
})
export class Reporte1Component implements OnInit {

  fechaActual: string = "";
  fechaInicial: string = "";
  fechaSiguiente: string = "";

  ventas: ReporteProductos[] = [];

  constructor(private adminService: AdminService) {
  }

  ngOnInit(): void {
    this.fechaActual = moment().format("YYYY-MM-DD");
    this.fechaSiguiente = moment().format("YYYY-MM-DD");
    this.fechaInicial = moment().subtract("10", "days").format("YYYY-MM-DD");
  }

  generarReporte() {
    this.adminService.verReporte1(this.fechaInicial, this.fechaSiguiente)
      .subscribe({
        next: (res: ReporteProductos[]) => {
          if (res) {
            this.ventas = res
          }
        }
      });
  }
}
