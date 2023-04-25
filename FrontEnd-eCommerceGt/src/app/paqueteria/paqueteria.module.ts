import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaqueteriaRoutingModule } from './paqueteria-routing.module';
import { MainComponent } from './pages/main/main.component';
import { MenuComponent } from './shared/menu/menu.component';
import { PrincipalComponent } from './pages/principal/principal.component';
import { MenubarModule } from 'primeng/menubar';
import { PedidosComponent } from './pages/pedidos/pedidos.component';


@NgModule({
  declarations: [
    MainComponent,
    MenuComponent,
    PrincipalComponent,
    PedidosComponent
  ],
  imports: [
    CommonModule,
    PaqueteriaRoutingModule,
    MenubarModule
  ]
})
export class PaqueteriaModule { }
