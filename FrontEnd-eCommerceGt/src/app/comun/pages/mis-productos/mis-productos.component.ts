import { Component, OnInit } from '@angular/core';
import { ComunService } from '../../services/comun.service';
import { Producto } from 'src/app/interfaces/interfaces';
import { Router } from '@angular/router';

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
    console.log(this.productos[i]);
    this.router.navigate(["/comun/modificarProducto"],{ queryParams: { "id": this.productos[i]._id } });
  }

}
