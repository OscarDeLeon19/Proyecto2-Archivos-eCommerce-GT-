import { Component, OnInit } from '@angular/core';
import { ComunService } from '../../services/comun.service';
import { Producto } from 'src/app/interfaces/interfaces';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-mis-productos',
  templateUrl: './mis-productos.component.html',
  styleUrls: ['./mis-productos.component.css']
})
export class MisProductosComponent implements OnInit {

  productos: Producto[] = [];

  constructor(private comunService: ComunService, private router: Router) {

  }

  ngOnInit(): void {
    const usuario = this.comunService.getUsuario();
    this.comunService.verMisProductos(usuario!.username)
      .subscribe({
        next: (pr: Producto[]) => {
          this.productos = pr;
        },
        error: (err) => console.log(err)
      });
  }

  modificar(i: number) {
    this.router.navigate(["/comun/modificarProducto"], { queryParams: { "id": this.productos[i]._id } });
  }

  eliminar(i: number) {
    const producto = this.productos[i];
    Swal.fire({
      title: `¿Seguro que quieres borrar el producto: ${producto.nombre}`,
      text: "Los datos no se pueden recuperar",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Borrar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.comunService.borrarProducto(producto._id)
          .subscribe({
            next: (e: any) => {
              if (e.deletedCount == 1) {
                Swal.fire({
                  position: 'top-end',
                  icon: 'success',
                  title: 'Producto eliminado',
                  showConfirmButton: false,
                  timer: 1500
                })
                setTimeout(() => { window.location.reload() }, 1500);
              }
            },
            error: (e) => { console.log(e); }
          });
      }
    })
  }

}
