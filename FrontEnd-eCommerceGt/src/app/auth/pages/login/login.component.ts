import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../../services/auth.service';
import { Usuario } from '../../../interfaces/interfaces';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  // Formulario del grupo
  miFormulario: FormGroup = this.fb.group({
    username: ["", [Validators.required]],
    password: ["", [Validators.required]]
  })
  /**
   * Constructor de la clase
   * @param fb Creador de formularios
   * @param maizService Servicio de la aplicacion
   * @param router Propiedad que maneja las rutas
   */
  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    localStorage.removeItem("carrito");
  }

  /**
   * Comprueba si un campo tiene errores
   * @param campo El campo del formulario
   * @returns Si hay errores
   */
  campoValido(campo: string) {
    return this.miFormulario.controls[campo].errors
      && this.miFormulario.controls[campo].touched
  }

  /**
   * Obtiene los datos del formulario y llama al servicio para obtener un usuario.
   * Si encuentra un usuario, lo guarda en el LocalStorage
   * @returns 
   */
  guardar() {
    if (this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched();
      return;
    } else {
      let { username, password } = this.miFormulario.value;
      this.authService.obtenerUsuario(username, password)
        .subscribe({
          next: (res: Usuario) => {
            if (res == null) {
              Swal.fire({
                icon: 'warning',
                title: 'Error',
                text: 'Username o contraseña incorrecta',
                footer: "<a href='/auth/register'>Crea aqui tu cuenta</a>"
              });
            } else {
              Swal.fire({
                icon: 'success',
                title: 'Bienvenido',
                text: 'Bienvenido ' + res.nombre
              });
              let usuario = JSON.stringify(res);
              localStorage.setItem("usuario", usuario);
              this.miFormulario.reset();
              if (res.tipoUsuario == "Comun") {
                this.router.navigate(["/comun"])
              } else if (res.tipoUsuario == "Paqueteria") {
                this.router.navigate(["/paqueteria"])
              } else if (res.tipoUsuario == "Administrador") {
                this.router.navigate(["/admin"])
              } else {
                console.log('Error');
              }
            }
          }
        })
    }
  }

}
