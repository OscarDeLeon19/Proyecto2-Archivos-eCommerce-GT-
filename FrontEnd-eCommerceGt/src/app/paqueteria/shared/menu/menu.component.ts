
import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Usuario } from 'src/app/interfaces/interfaces';
import { Router } from '@angular/router';
import { PaqueteriaService } from '../../services/paqueteria.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  items: MenuItem[] = [];
  usuario?: Usuario;

  constructor(private paqueteriaService: PaqueteriaService, private router: Router){
    
  }

  ngOnInit() {
    this.usuario = this.paqueteriaService.getUsuario();
    this.items = [
      {
        label: 'Seguimiento de pedidos',
        icon: 'pi pi-fw pi-truck',
        routerLink: ["/paqueteria/pedidos"]
      },
      {
        label: 'Solicitudes de productos',
        icon: 'pi pi-fw pi-inbox',
        routerLink: ["/paqueteria/solicitudes"]
      }
    ];
  }

  salir(){
    localStorage.removeItem("usuario");
    this.router.navigate(['/']);
  }
}
