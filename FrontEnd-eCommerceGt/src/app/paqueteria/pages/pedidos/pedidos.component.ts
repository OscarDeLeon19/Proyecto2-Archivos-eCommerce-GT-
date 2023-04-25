import { Component, OnInit } from '@angular/core';
import { PaqueteriaService } from '../../services/paqueteria.service';
import { Pedido } from 'src/app/interfaces/interfaces';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {

  pedidos: Pedido[] = [];

  constructor(private paqueteriaService: PaqueteriaService) {

  }

  ngOnInit(): void {
    this.paqueteriaService.verPedidosEnCurso("En curso")
      .subscribe({
        next: (result: Pedido[]) => {
          this.pedidos = result
        }
      });
  }

  entregar(i: number) {
    Swal.fire({
      title: '¿Estas seguro de entregar este producto?',
      text: "El producto no se podra volver a modificar",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Entregar'
    }).then((result) => {
      if (result.isConfirmed) {
        const pedido = this.pedidos[i];
        const body = {
          _id: pedido._id,
          estado: "Entregado"
        }
        console.log(body);
        this.paqueteriaService.modificarEstado(body)
          .subscribe({
            next: (result: any) => {
              if (result.modifiedCount == 1) {
                Swal.fire({
                  position: 'top-end',
                  icon: 'success',
                  title: 'Your work has been saved',
                  showConfirmButton: false,
                  timer: 1500
                });
                this.pedidos.splice(i, 1);
              }
            },
            error: (error) => { console.log(error); }
          });
      }
    })
  }
}
