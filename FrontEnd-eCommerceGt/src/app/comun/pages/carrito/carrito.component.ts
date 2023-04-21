import { Component, OnInit, ViewChild } from '@angular/core';
import { Pedido, Producto, Usuario, Venta } from 'src/app/interfaces/interfaces';
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
        command: this.realizarVenta
      }
    ];
  }

  realizarVenta = () => {
    const { numTarjeta } = this.miFormulario.value;
    if (!numTarjeta) {
      Swal.fire({
        icon: 'warning',
        title: 'Error',
        text: 'Debes ingresar una tarjeta de credito para el pago'
      })
    } else {
      if (this.productos.length > 0) {
        const venta: Venta[] = [];
        const comprador = this.usuario!.username;
        const tarjetaCredito = numTarjeta;
        const fecha = moment().format("YYYY-MM-DD");
        const ventaPedido: any[] = [];
        this.productos.forEach((pr) => {
          venta.push({
            comprador,
            tarjetaCredito,
            fecha,
            producto: pr.nombre,
            precio: pr.precio,
            vendedor: pr.usuario,
            idProducto: pr._id
          });

          ventaPedido.push({
            nombre: pr.nombre,
            precio: pr.precio,
            usuarioVendedor: pr.usuario
          })
        });

        const fechaEntrega = moment().add(5, "days").format("YYYY-MM-DD");
        const pedido: Pedido = {
          comprador,
          fechaRealizacion: fecha,
          fechaEntrega,
          total: this.total,
          direccion: this.usuario!.direccion,
          productos: ventaPedido,
          estado: 'En curso'
        }
        this.guardarVenta(venta, pedido);
      } else {
        Swal.fire({
          icon: 'warning',
          title: 'Error',
          text: 'No hay articulos en el carrito de compras'
        })
      }
    }
  }

  guardarVenta(venta:Venta[], pedido: Pedido){
    console.log(venta);
    console.log(pedido);
  }

  borrarDelCarrito(index: number) {
    const producto = this.productos[index];
    Swal.fire({
      title: `Deseas agregar borrar del carrito el producto: ${producto.nombre}`,
      showDenyButton: true,
      confirmButtonText: 'Si',
      denyButtonText: `No`,
    }).then((result) => {
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
