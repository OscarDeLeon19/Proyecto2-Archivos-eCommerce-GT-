import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/interfaces/interfaces';
import { AdminService } from '../../services/admin.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  usuarios: Usuario[] = [];

  constructor(private adminService: AdminService, private router: Router) {

  }

  ngOnInit(): void {
    const usuario = this.adminService.getUsuario();
    this.adminService.verUsuariosAdmin(usuario!.username)
      .subscribe({
        next: (res: Usuario[]) => { this.usuarios = res },
        error: (e) => { console.log(e); }
      });
  }

  modificarUsuario(i: number) {
    const usuario = this.usuarios[i];
    this.router.navigate(["/admin/modificarUsuario"], { queryParams: { "username": usuario.username } })
  }

  eliminarUsuario(i: number) {
    const usuario = this.usuarios[i];
    Swal.fire({
      title: `¿Estas seguro de eliminar al usuario: ${usuario.nombre}`,
      text: "No podras recuperar los datos",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, borralo'
    }).then((result) => {
      if (result.isConfirmed) {
        this.adminService.borrarUsuario(usuario.username)
          .subscribe({
            next: (res: any) => {
              if (res.deletedCount == 1) {
                Swal.fire({
                  position: 'top-end',
                  icon: 'success',
                  title: 'Usuario Eliminado',
                  showConfirmButton: false,
                  timer: 1500
                })
                this.usuarios.splice(i, 1);
              }
            },
            error: (e) => {
              console.log(e);
            }
          });
      }
    })

  }
}
