import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/interfaces/interfaces';
import { AdminService } from '../../services/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  usuarios: Usuario[] = [];

  constructor(private adminService: AdminService, private router:Router) {

  }

  ngOnInit(): void {
    const usuario = this.adminService.getUsuario();
    this.adminService.verUsuariosAdmin(usuario!.username)
      .subscribe({
        next: (res: Usuario[]) => { this.usuarios = res },
        error: (e) => { console.log(e); }
      });
  }

  modificarUsuario(i:number){
    const usuario = this.usuarios[i];
    this.router.navigate(["/admin/modificarUsuario"], { queryParams: { "username": usuario.username } })
  }
}
