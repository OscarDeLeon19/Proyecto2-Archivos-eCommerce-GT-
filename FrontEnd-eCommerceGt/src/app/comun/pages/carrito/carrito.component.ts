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
    //this.comunService.obtenerUsuario();
    this.usuario = comunService.getUsuario();
  }

  ngOnInit(): void {
    const datosCarrito = localStorage.getItem("carrito");
    if (datosCarrito) {
      this.productos = JSON.parse(datosCarrito);
      this.obtenerTotal();
    }
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

        Swal.fire({
          title: '¿Seguro que quieres realizar esta compra?',
          text: "El total es de " + this.total,
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Realizar compra'
        }).then((result) => {
          if (result.isConfirmed) {
            const venta: Venta[] = [];
            const comprador = this.usuario!.username;
            const tarjetaCredito = numTarjeta;
            const fecha = moment().format("YYYY-MM-DD");
            const ventaPedido: any[] = [];
            const idsEliminar: any[] = [];
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

              idsEliminar.push(
                { _id: pr._id }
              )
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
            this.guardarVenta(venta, pedido, idsEliminar);
          }
        })
      } else {
        Swal.fire({
          icon: 'warning',
          title: 'Error',
          text: 'No hay articulos en el carrito de compras'
        })
      }
    }
  }

  guardarVenta(venta: Venta[], pedido: Pedido, eliminacion: any[]) {

    this.comunService.ingresarVenta(venta)
      .subscribe({
        next: (result) => {
          console.log(result);
        },
        error: (err) => console.log(err)
      });
    this.comunService.ingresarPedido(pedido)
      .subscribe({
        next: (result) => {
          console.log(result);
        },
        error: (err) => console.log(err)
      });

    for (let i = 0; i < eliminacion.length; i++) {
      const _id = eliminacion[i]._id;
      this.comunService.borrarProducto(_id)
        .subscribe({
          next: (e) => { console.log(e); },
          error: (e) => { console.log(e); }
        });

    }

    Swal.fire({
      icon: 'success',
      title: '¡Gracias por comprar!',
      text: 'Los articulos te seran entregados el: ' + pedido.fechaEntrega
    });

    localStorage.removeItem("carrito");
    this.productos = [];
    this.obtenerTotal();
    this.miFormulario.reset();
    this.miFormulario.setValue({ numTarjeta: "" });
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
