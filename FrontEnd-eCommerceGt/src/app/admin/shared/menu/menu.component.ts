import { Component } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { Usuario } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  items: MenuItem[] = [];
  usuario?: Usuario;

  constructor(private adminService: AdminService, private router: Router) {

  }

  ngOnInit() {
    this.usuario = this.adminService.getUsuario();
    this.items = [
      {
        label: 'Usuarios',
        icon: 'pi pi-fw pi-user',
        items: [
          { label: "Crear Usuario",  icon: "pi pi-user-plus", routerLink: ["/admin/crearUsuario"]},
          { label: "Ver Usuarios",  icon: "pi pi-users", routerLink: ["/admin/usuarios"]},
        ]
      },
      {
        label: 'Reportes',
        icon: 'pi pi-file-o',
        routerLink: ["/admin/reportes"]
      }
    ];
  }

  salir() {
    localStorage.removeItem("usuario");
    this.router.navigate(['/']);
  }

}
