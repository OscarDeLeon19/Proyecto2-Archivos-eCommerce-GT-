import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { AuthService } from 'src/app/auth/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent {

  fechaMaxima: string = "";
  fechaMinima: string = "";

  // Formulario para ingresar los datos requeridos
  miFormulario: FormGroup = this.fb.group({
    nombre: ["", [Validators.required]],
    telefono: ["", [Validators.required, Validators.maxLength(10)]],
    correo: ["", [Validators.required, Validators.maxLength(100), Validators.email]],
    direccion: ["", [Validators.required]],
    fechaNacimiento: ["", [Validators.required]],
    username: ["", [Validators.required]],
    tipoUsuario: ["", [Validators.required]]
  })

  /**
   * Constructor de la clase
   * @param fb Creador de formularios
   * @param maizService Servicio de la aplicacion
   * @param router Propiedad que maneja rutas
   */
  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService) { }



  ngOnInit(): void {
    this.fechaMinima = moment().subtract("65", "year").format("YYYY-MM-DD");
    this.fechaMaxima = moment().subtract("19", "year").format("YYYY-MM-DD");
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
      let { nombre, telefono, correo, direccion, fechaNacimiento, username, tipoUsuario } = this.miFormulario.value;
      const password = this.generarPassword();
      const body = {
        nombre, telefono, correo, direccion, fechaNacimiento, username, password, tipoUsuario
      }
      this.authService.crearUsuario(body)
        .subscribe({
          next: (n: any) => {
            Swal.fire({
              icon: 'success',
              title: 'Usuario creado',
              text: n.message + " La contraseña es: " + password,
            });
            this.miFormulario.reset();
            this.router.navigate(["admin/usuarios"]);
          },
          error: (e) => {
            Swal.fire({
              icon: 'error',
              title: 'Error',
              text: e.error.message,
            });
          }
        });
    }
  }

  generarPassword() {
    let password = '';
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' +
      'abcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 1; i <= 8; i++) {
      let caracter = Math.floor(Math.random() * caracteres.length + 1);
      password += caracteres.charAt(caracter)
    }

    return password;
  }
}
