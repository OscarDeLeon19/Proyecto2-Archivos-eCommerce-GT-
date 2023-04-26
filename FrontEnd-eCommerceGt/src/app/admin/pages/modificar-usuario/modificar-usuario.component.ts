import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../../services/admin.service';
import { Usuario } from 'src/app/interfaces/interfaces';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import Swal from 'sweetalert2';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-modificar-usuario',
  templateUrl: './modificar-usuario.component.html',
  styleUrls: ['./modificar-usuario.component.css']
})
export class ModificarUsuarioComponent implements OnInit {

  usernameUsuario: string = "";
  usuario?: Usuario;

  fechaMaxima: string = "";
  fechaMinima: string = "";

  // Formulario para ingresar los datos requeridos
  miFormulario: FormGroup = this.fb.group({
    nombre: ["", [Validators.required]],
    telefono: ["", [Validators.required, Validators.maxLength(10)]],
    correo: ["", [Validators.required, Validators.maxLength(100), Validators.email]],
    direccion: ["", [Validators.required]],
    fechaNacimiento: ["", [Validators.required]]
  })

  constructor(private route: ActivatedRoute, private adminService: AdminService, private fb: FormBuilder, private authService: AuthService,
    private router: Router) {

  }

  ngOnInit(): void {
    this.fechaMinima = moment().subtract("65", "year").format("YYYY-MM-DD");
    this.fechaMaxima = moment().subtract("19", "year").format("YYYY-MM-DD");
    this.route.queryParams.subscribe((params: any) => {
      this.usernameUsuario = params.username;
    });


    this.adminService.buscarUsuarioUsername(this.usernameUsuario)
      .subscribe({
        next: (resp: Usuario) => {
          if (resp) {
            this.usuario = resp;
            this.miFormulario.setValue({
              nombre: resp.nombre,
              telefono: resp.telefono,
              correo: resp.correo,
              direccion: resp.direccion,
              fechaNacimiento: resp.fechaNacimiento,
            });
          } else {
            this.router.navigate(["/admin/usuarios"])
          }
        },
        error: () => { }
      });

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
        text: "No has llenado bien todos los campos",
      });
      this.miFormulario.markAllAsTouched();
      return;
    } else {
      let { nombre, telefono, correo, direccion, fechaNacimiento } = this.miFormulario.value;
      const body = {
        username: this.usernameUsuario, nombre, telefono, correo, direccion, fechaNacimiento
      }
      this.authService.actualizarUsuario(body)
        .subscribe({
          next: (resp: any) => {
            if (resp.modifiedCount == 1) {
              Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Los datos del usuario se modificaron',
                showConfirmButton: false,
                timer: 1500
              })
            }
          },
          error: (e) => { console.log(e); }
        });
    }
  }

  volver() {
    this.router.navigate(["/admin/usuarios"]);
  }
}
