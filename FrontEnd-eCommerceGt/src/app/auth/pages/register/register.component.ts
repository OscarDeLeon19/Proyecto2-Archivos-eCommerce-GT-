import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  // Formulario para ingresar los datos requeridos
  miFormulario: FormGroup = this.fb.group({
    nombre: ["", [Validators.required]],
    telefono: ["", [Validators.required, Validators.maxLength(10)]],
    correo: ["", [Validators.required, Validators.maxLength(100), Validators.email]],
    direccion: ["", [Validators.required]],
    fechaNacimiento: ["", [Validators.required]],
    username: ["", [Validators.required]],
    password: ["", [Validators.required, Validators.minLength(6)]],
    confirm: ["", [Validators.required, Validators.minLength(6),]]
  })

  /**
   * Constructor de la clase
   * @param fb Creador de formularios
   * @param maizService Servicio de la aplicacion
   * @param router Propiedad que maneja rutas
   */
  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
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
      let { nombre, telefono, correo, direccion, fechaNacimiento, username, confirm } = this.miFormulario.value;
      const body = {
        nombre, telefono, correo, direccion, fechaNacimiento, username, confirm, tipoUsuario: "Comun"
      }
      console.log(body);
      this.miFormulario.reset();
    }
  }
}
