import { Component, OnInit, ViewChild } from '@angular/core';
import { Producto, Usuario } from 'src/app/interfaces/interfaces';
import Swal from 'sweetalert2';
import { MenuItem } from 'primeng/api';
import { ComunService } from '../../services/comun.service';
import { NgForm } from '@angular/forms';
import * as moment from 'moment';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  @ViewChild("miFormulario") miFormulario!: NgForm;

  items: MenuItem[] = [];
  productos: Producto[] = [];
  total: number = 0;
  textoTotal: string = "Total: 0";
  usuario?: Usuario;



  constructor(private comunService: ComunService) {
    let myMoment= moment().format('L')
    console.log(myMoment);
    this.comunService.obtenerUsuario();
    this.usuario = comunService.getUsuario();
  }

  ngOnInit(): void {
    const datosCarrito = localStorage.getItem("carrito");
    if (datosCarrito) {
      this.productos = JSON.parse(datosCarrito);
      this.obtenerTotal();
    };
    this.items = [
      {
        label: 'Borrar Carrito',
        icon: 'pi pi-fw pi-trash',
        command: (event: any) => {
          Swal.fire({
            title: `¿Quieres borrar el carrito?`,
            showDenyButton: true,
            confirmButtonText: 'Si',
            denyButtonText: `No`,
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
              this.productos = [];
              localStorage.removeItem("carrito");
              this.obtenerTotal();
            }
          });
        }
      },
      {
        label: 'Pagar Carrito',
        icon: 'pi pi-fw pi-dollar',
        command: (event: any) => {
          const {numTarjeta} = this.miFormulario.value;
          if(!numTarjeta){
            Swal.fire({
              icon: 'warning',
              title: 'Error',
              text: 'Debes ingresar una tarjeta de credito para el pago'
            })
          } else {
             const venta:any[] = [];
             const comprador = this.usuario?.username;
             const tarjetaCredito = numTarjeta;
          }
        }
      }
    ];
  }

  borrarDelCarrito(index: number) {
    const producto = this.productos[index];
    Swal.fire({
      title: `Deseas agregar borrar del carrito el producto: ${producto.nombre}`,
      showDenyButton: true,
      confirmButtonText: 'Si',
      denyButtonText: `No`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.productos.splice(index, 1);
        localStorage.setItem("carrito", JSON.stringify(this.productos));
        this.obtenerTotal();
      }
    });
  }

  obtenerTotal() {
    this.total = 0;
    this.productos.forEach((pr) => {
      this.total += pr.precio;
    });
    this.textoTotal = `Total: ${this.total}`;
  }

}
