import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaqueteriaRoutingModule } from './paqueteria-routing.module';
import { MainComponent } from './pages/main/main.component';
import { MenuComponent } from './shared/menu/menu.component';
import { PrincipalComponent } from './pages/principal/principal.component';
import { MenubarModule } from 'primeng/menubar';
import { PedidosComponent } from './pages/pedidos/pedidos.component';
import { ModificarFechaComponent } from './pages/modificar-fecha/modificar-fecha.component';
import { FormsModule } from '@angular/forms';
import { SolicitudesComponent } from './pages/solicitudes/solicitudes.component';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';


@NgModule({
  declarations: [
    MainComponent,
    MenuComponent,
    PrincipalComponent,
    PedidosComponent,
    ModificarFechaComponent,
    SolicitudesComponent
  ],
  imports: [
    CommonModule,
    PaqueteriaRoutingModule,
    MenubarModule,
    FormsModule,
    CardModule,
    ButtonModule
  ]
})
export class PaqueteriaModule { }
