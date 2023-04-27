import { Component } from '@angular/core';
import * as moment from 'moment';
import { ProductosEnVenta, ReportePedidos } from 'src/app/interfaces/interfaces';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-reporte5',
  templateUrl: './reporte5.component.html',
  styleUrls: ['./reporte5.component.css']
})
export class Reporte5Component {

  fechaActual: string = "";
  fechaInicial: string = "";
  fechaSiguiente: string = "";

  productos: ProductosEnVenta[] = [];

  constructor(private adminService: AdminService) {
  }

  ngOnInit(): void {
    this.fechaActual = moment().format("YYYY-MM-DD");
    this.fechaSiguiente = moment().format("YYYY-MM-DD");
    this.fechaInicial = moment().subtract("10", "days").format("YYYY-MM-DD");
    this.generarReporte();
  }

  generarReporte() {
    this.adminService.verReporte5()
      .subscribe({
        next: (res: ProductosEnVenta[]) => {
          if (res) {
            this.productos = res
          }
        }
      });
  }
}
