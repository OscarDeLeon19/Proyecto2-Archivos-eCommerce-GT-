import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  s: string = "";

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
  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService) { }



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
      let { nombre, telefono, correo, direccion, fechaNacimiento, username, password } = this.miFormulario.value;
      const body = {
        nombre, telefono, correo, direccion, fechaNacimiento, username, password, tipoUsuario: "Comun"
      }
      this.authService.crearUsuario(body)
        .subscribe({
          next: (n: any) => {
            Swal.fire({
              icon: 'success',
              title: 'Exito',
              text: n.message,
            });
            this.miFormulario.reset();
            this.router.navigate(["auth/login"]);
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

  volver(){
    this.router.navigate(["/auth/login"]);
  }
}
