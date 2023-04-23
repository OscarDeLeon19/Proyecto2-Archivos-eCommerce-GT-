import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ComunService } from '../../services/comun.service';
import { Producto } from 'src/app/interfaces/interfaces';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modificar-producto',
  templateUrl: './modificar-producto.component.html',
  styleUrls: ['./modificar-producto.component.css']
})
export class ModificarProductoComponent implements OnInit {

  idProducto: string = "";
  producto!: Producto;
  imagenProducto: string = "";

  miFormulario: FormGroup = this.fb.group({
    nombre: ["", [Validators.required]],
    descripcion: ["", [Validators.required]],
    precio: ["", [Validators.required,]],
    categoria: ["", [Validators.required]]
  })

  constructor(private route: ActivatedRoute, private comunService: ComunService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params: any) => {
      this.idProducto = params.id;
    });

    this.comunService.verProductoPorId(this.idProducto)
      .subscribe({
        next: (e: Producto) => {
          this.producto = e
          this.miFormulario.setValue({
            nombre: this.producto.nombre,
            descripcion: this.producto.descripcion,
            precio: this.producto.precio,
            categoria: this.producto.categoria,
          })
          this.imagenProducto = this.producto.imagen
        },
        error: (e) => { console.log(e); }
      });

  }

  guardar() {
    if (this.miFormulario.invalid) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: "No has llenado todos los campos",
      });

      return;
    } else {
    }
  }
}
