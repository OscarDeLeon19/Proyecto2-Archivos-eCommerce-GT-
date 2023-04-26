import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from '../../services/admin.service';
import { Usuario } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-modificar-usuario',
  templateUrl: './modificar-usuario.component.html',
  styleUrls: ['./modificar-usuario.component.css']
})
export class ModificarUsuarioComponent implements OnInit {

  usernameUsuario: string = "";

  constructor(private route: ActivatedRoute, private adminService: AdminService) {

  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params: any) => {
      this.usernameUsuario = params.username;
    });

    this.adminService.buscarUsuarioUsername(this.usernameUsuario)
      .subscribe({
        next: (e: Usuario) => { },
        error: () => { }
      });
  }
}
