import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Pedido } from 'src/app/interfaces/interfaces';
import { PaqueteriaService } from '../../services/paqueteria.service';
import * as moment from 'moment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modificar-fecha',
  templateUrl: './modificar-fecha.component.html',
  styleUrls: ['./modificar-fecha.component.css']
})
export class ModificarFechaComponent implements OnInit {

  pedidoActual?: Pedido;
  fechaActual: string = "";
  idPedido: string = "";
  nuevaFecha: string | Date = "";

  constructor(private route: ActivatedRoute, private paqueteriaService: PaqueteriaService, private router:Router) {

  }

  ngOnInit(): void {
    this.fechaActual = moment().format("YYYY-MM-DD");

    this.route.queryParams.subscribe((params: any) => {
      this.idPedido = params.id;
    });

    this.paqueteriaService.obtenerPedido(this.idPedido)
      .subscribe({
        next: (result: Pedido) => { this.pedidoActual = result; this.nuevaFecha = this.pedidoActual.fechaEntrega },
        error: (e) => { console.log(e); }
      });
  }

  cambiarFecha() {
    Swal.fire({
      title: '¿Seguro que quieres modificar la fecha de entrega?',
      text: "No hay vuelta atras",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, cambiar'
    }).then((result) => {
      if (result.isConfirmed) {
        const body = {
          _id: this.pedidoActual?._id,
          fechaEntrega: this.nuevaFecha
        }
        this.paqueteriaService.cambiarFechaEntrega(body)
          .subscribe({
            next: (e: any) => {
              if (e.modifiedCount == 1) {
                Swal.fire({
                  position: 'top-end',
                  icon: 'success',
                  title: 'La fecha de entrega se ha modificado',
                  showConfirmButton: false,
                  timer: 1500
                })

                setTimeout(() => {this.router.navigate(["/paqueteria/pedidos"])}, 1500)
              }
            },
            error: (e) => { console.log(e); }
          });
      }
    })
  }

}
