import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/interfaces/usuario.interface';
import { ComunService } from '../../services/comun.service';

@Component({
  selector: 'app-ver-productos',
  templateUrl: './ver-productos.component.html',
  styleUrls: ['./ver-productos.component.css']
})
export class VerProductosComponent implements OnInit {

  productos: Producto[] = [];

  constructor(private comunService: ComunService) { }


  ngOnInit(): void {
    this.comunService.verProductos()
      .subscribe({
        next: (res: Producto[]) => {
          this.productos = res;
        }
      })
  }

}
