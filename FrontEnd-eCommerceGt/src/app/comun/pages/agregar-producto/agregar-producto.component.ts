import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { ComunService } from '../../services/comun.service';
import { Usuario } from '../../../interfaces/interfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-producto',
  templateUrl: './agregar-producto.component.html',
  styleUrls: ['./agregar-producto.component.css']
})
export class AgregarProductoComponent {

  img: string = "";
  errorImagen: boolean = true;
  MAXIMO_TAMANIO_BYTES = 1000000;

  miFormulario: FormGroup = this.fb.group({
    nombre: ["", [Validators.required]],
    descripcion: ["", [Validators.required]],
    precio: ["", [Validators.required,]],
    categoria: ["", [Validators.required]]
  })

  constructor(private fb: FormBuilder, private comunService: ComunService, private router: Router) { }

  onChange(event: any) {
    const file: File = event.target.files[0];
    const reader = new FileReader();
    if (file?.size > this.MAXIMO_TAMANIO_BYTES) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'La imagen es muy pesada, busca alguna que pese menos de 1MB',
      });
      this.errorImagen = true;
      this.img = "";
    } else {
      this.errorImagen = false;
      reader.onload = (e: any) => {
        const base64Image = e.target.result;
        this.img = base64Image;
      };
      reader.readAsDataURL(file);
    }
  }

  /**
   * Comprueba si un campo tiene errores
   * @param campo El campo del formulario
   * @returns Si hay errores en el campo
   */
  campoValido(campo: string) {
    return this.miFormulario.controls[campo].errors
      && this.miFormulario.controls[campo].touched
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
      if (this.img == "") {
        Swal.fire({
          icon: 'warning',
          title: 'Error',
          text: "No has seleccionado una imagen valida",
        });
      } else {
        const usuario = this.comunService.getUsuario();
        const { nombre, descripcion, precio, categoria } = this.miFormulario.value;
        const body = {
          nombre,
          descripcion,
          precio,
          imagen: this.img,
          categoria,
          usuario: usuario?.username,
          estado: "pendiente"
        }

        this.comunService.agregarProducto(body)
          .subscribe({
            next: (e) => {
              Swal.fire({
                icon: 'success',
                title: 'Muy Bien!',
                text: "El producto se guardo correctamente, espera la confirmacion",
              });
              this.miFormulario.reset();
              this.img = "";
              this.router.navigate(["/comun/misProductos"]);
            },
            error: (err) => {
              Swal.fire({
                icon: 'error',
                title: 'Error',
                text: "La imagen no pudo guardarse",
              });
            }
          });
      }
    }
  }
}
