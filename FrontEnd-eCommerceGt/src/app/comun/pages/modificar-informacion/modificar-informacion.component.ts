import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import Swal from 'sweetalert2';
import { ComunService } from '../../services/comun.service';
import { Usuario } from '../../../interfaces/interfaces';

@Component({
  selector: 'app-modificar-informacion',
  templateUrl: './modificar-informacion.component.html',
  styleUrls: ['./modificar-informacion.component.css']
})
export class ModificarInformacionComponent {
  usuario?: Usuario;

  // Formulario para ingresar los datos requeridos
  miFormulario: FormGroup = this.fb.group({
    nombre: ["", [Validators.required]],
    telefono: ["", [Validators.required, Validators.maxLength(10)]],
    correo: ["", [Validators.required, Validators.maxLength(100), Validators.email]],
    direccion: ["", [Validators.required]],
    fechaNacimiento: ["1999-05-19", [Validators.required]]
  })

  /**
   * Constructor de la clase
   * @param fb Creador de formularios
   * @param maizService Servicio de la aplicacion
   * @param router Propiedad que maneja rutas
   */
  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService, private comunService: ComunService) { }



  ngOnInit(): void {
    this.usuario = this.comunService.getUsuario();
    let x = this.usuario!.fechaNacimiento;
    let fe = new Date(x).toISOString().slice(0, 10);
    this.miFormulario.setValue({
      nombre: this.usuario?.nombre,
      telefono: this.usuario?.telefono,
      correo: this.usuario?.correo,
      direccion: this.usuario?.direccion,
      fechaNacimiento: fe
    })
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

  /**
   * Metodo que comprueba si los campos de contraseña son iguales
   * @returns Si los campos son iguales
   */
  confirmarPassword() {
    return !(this.miFormulario.value.password === this.miFormulario.value.confirm)
  }

  /**
   * Obtiene las variables de los campos y llama al servicio para guardar un usuario
   * @returns 
   */
  guardar() {
    if (this.miFormulario.invalid) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: "No has llenado bien todos los campos",
      });
      this.miFormulario.markAllAsTouched();
      return;
    } else {
      let { nombre, telefono, correo, direccion, fechaNacimiento } = this.miFormulario.value;
      const body = {
        username: this.usuario?.username, nombre, telefono, correo, direccion, fechaNacimiento
      }
      this.authService.actualizarUsuario(body)
        .subscribe({
          next: (n: any) => {
            if (n.modifiedCount == 1) {
              this.usuario!.nombre = nombre;
              this.usuario!.telefono = telefono;
              this.usuario!.correo = correo;
              this.usuario!.direccion = direccion;
              this.usuario!.fechaNacimiento = fechaNacimiento;
              localStorage.setItem("usuario", JSON.stringify(this.usuario));
              Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Informacion Actualizada',
                showConfirmButton: false,
                timer: 1500
              });
            }
          },
          error: (e) => {
            Swal.fire({
              icon: 'error',
              title: 'Error',
              text: e,
            });
          }
        });
    }
  }
}
