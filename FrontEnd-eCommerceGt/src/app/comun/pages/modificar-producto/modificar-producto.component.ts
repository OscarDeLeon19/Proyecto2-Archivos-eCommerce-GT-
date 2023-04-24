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
  MAXIMO_TAMANIO_BYTES = 1000000;

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

  onChange(event: any) {
    try {
      const file: File = event.target.files[0];
      const reader = new FileReader();
      if (file?.size > this.MAXIMO_TAMANIO_BYTES) {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'La imagen es muy pesada, busca alguna que pese menos de 1MB',
        });
      } else {
        reader.onload = (e: any) => {
          const base64Image = e.target.result;
          this.imagenProducto = base64Image;
        };
        reader.readAsDataURL(file);
      }
    } catch (error) {
      this.imagenProducto = this.producto.imagen;
    }
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
      const { nombre, descripcion, precio, categoria } = this.miFormulario.value;
      const body = {
        _id: this.producto._id,
        nombre,
        descripcion,
        precio,
        imagen: this.imagenProducto,
        categoria
      }
      this.comunService.actualizarProducto(body)
        .subscribe({
          next: (result: any) => {
            if (result.modifiedCount == 1) {
              Swal.fire({
                icon: 'success',
                title: 'Exito',
                text: 'Se actualizaron los datos del producto',
              });
            }
          },
          error: (e) => { console.log(e); }
        });


    }
  }
}
