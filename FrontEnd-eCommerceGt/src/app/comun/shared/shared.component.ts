import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { ComunService } from '../services/comun.service';
import { Usuario } from 'src/app/interfaces/interfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shared',
  templateUrl: './shared.component.html',
  styleUrls: ['./shared.component.css']
})
export class SharedComponent {
  items: MenuItem[] = [];
  usuario?: Usuario;

  constructor(private comunService: ComunService, private router: Router){
    
  }

  ngOnInit() {
    this.usuario = this.comunService.getUsuario();
    this.items = [
      {
        label: 'Informacion',
        icon: 'pi pi-fw pi-user',
        items: [
        { label: 'Modificar Informacion', icon: "pi pi-fw pi-user-edit" },
        { label: 'Agregar Tarjeta', icon: "pi pi-fw pi-wallet", routerLink: "/comun/tarjeta" },
        ]
      },
      {
        label: 'Productos',
        icon: 'pi pi-fw pi-inbox',
        items: [
          { label: 'Ver Productos', icon: 'pi pi-fw pi-box', routerLink: "/comun/productos" },
          { label: 'Agregar Producto', icon: 'pi pi-fw pi-plus' },
          { label: 'Rastrear Pedido', icon: 'pi pi-fw pi-truck' }
        ]
      },
      {
        label: "Carrito",
        icon: 'pi pi-fw pi-shopping-cart',
        routerLink: "/comun/carrito"
      }
    ];
  }

  salir(){
    localStorage.removeItem("usuario");
    this.router.navigate(['/']);
  }
}
