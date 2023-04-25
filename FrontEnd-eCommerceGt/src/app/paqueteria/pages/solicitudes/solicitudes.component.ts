import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/interfaces/interfaces';
import { PaqueteriaService } from '../../services/paqueteria.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-solicitudes',
  templateUrl: './solicitudes.component.html',
  styleUrls: ['./solicitudes.component.css']
})
export class SolicitudesComponent implements OnInit {

  productos: Producto[] = [];

  constructor(private paqueteriaService: PaqueteriaService) { }

  ngOnInit(): void {
    this.paqueteriaService.verProductosPendientes()
      .subscribe({
        next: (result: Producto[]) => {
          this.productos = result
        }
      });
  }

  aceptarProducto(i: number) {
    const producto = this.productos[i];
    Swal.fire({
      title: `¿Seguro que quieres aceptar el producto: ${producto.nombre}?`,
      text: "No hay vuelta atras",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, aceptar'
    }).then((result) => {
      if (result.isConfirmed) {
        const body = {
          _id: producto._id,
          estado: "aprobado"
        }
        this.paqueteriaService.cambiarEstadoProducto(body)
          .subscribe({
            next: (e: any) => {
              console.log(e);
              if (e.modifiedCount == 1) {
                Swal.fire({
                  position: 'top-end',
                  icon: 'success',
                  title: 'El producto fue aceptado',
                  showConfirmButton: false,
                  timer: 1500
                })

                this.productos.splice(i, 1);
              }
            },
            error: (e) => { }
          });
      }
    })
  }

  rechazarProducto(i: number) {
    const producto = this.productos[i];
    Swal.fire({
      title: `¿Seguro que quieres rechazar el producto: ${producto.nombre}?`,
      text: "No hay vuelta atras",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, rechazar'
    }).then((result) => {
      if (result.isConfirmed) {
        const body = {
          _id: producto._id,
          estado: "desaprobado"
        }
        this.paqueteriaService.cambiarEstadoProducto(body)
          .subscribe({
            next: (e: any) => {
              console.log(e);
              if (e.modifiedCount == 1) {
                Swal.fire({
                  position: 'top-end',
                  icon: 'success',
                  title: 'El producto fue rechazado',
                  showConfirmButton: false,
                  timer: 1500
                })

                this.productos.splice(i, 1);
              }
            },
            error: (e) => { }
          });
      }
    })
  }
}
