import { Component, OnInit } from '@angular/core';
import { Producto, Usuario } from 'src/app/interfaces/interfaces';
import { ComunService } from '../../services/comun.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ver-productos',
  templateUrl: './ver-productos.component.html',
  styleUrls: ['./ver-productos.component.css']
})
export class VerProductosComponent implements OnInit {
  // alacritty
  productos: Producto[] = [];
  textoBusqueda: string = "";
  usuario?: Usuario = this.comunService.getUsuario();

  constructor(private comunService: ComunService) { }


  ngOnInit(): void {
    this.comunService.verProductos(this.usuario!.username)
      .subscribe({
        next: (res: Producto[]) => {
          this.productos = res;
        }
      });
  }

  buscar() {
    this.comunService.verProductosFiltrados(this.textoBusqueda, this.usuario!.username)
      .subscribe({
        next: (res: Producto[]) => {
          this.productos = res;
        }
      });
  }

  agregarCarrito(index: number) {
    const producto = this.productos[index];
    Swal.fire({
      title: `Deseas agregar al carrito el producto: ${producto.nombre}`,
      showDenyButton: true,
      confirmButtonText: 'Si',
      denyButtonText: `No`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.agregarAlCarrito(producto);
      }
    })
  }

  agregarAlCarrito(producto: Producto) {
    let carrito = localStorage.getItem("carrito");
    if (carrito) {
      let productosCarrito: Producto[] = JSON.parse(carrito);
      const comprobarCarrito = productosCarrito.find(pr => pr._id == producto._id);
      if (comprobarCarrito) {
        Swal.fire({
          icon: 'warning',
          title: 'Oops...',
          text: 'Ya tienes este producto en el carrito'
        })
      } else {
        productosCarrito.push(producto);
        localStorage.setItem("carrito", JSON.stringify(productosCarrito));
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Producto agregado',
          showConfirmButton: false,
          timer: 1500
        })
      }
    } else {
      let productosCarrito: Producto[] = [];
      productosCarrito.push(producto);
      localStorage.setItem("carrito", JSON.stringify(productosCarrito));
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Producto agregado',
        showConfirmButton: false,
        timer: 1500
      })
    }
  }


}

