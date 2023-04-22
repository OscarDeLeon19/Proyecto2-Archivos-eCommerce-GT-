import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComunRoutingModule } from './comun-routing.module';
import { SharedComponent } from './shared/shared.component';
import { MainComponent } from './pages/main/main.component';
import { VerProductosComponent } from './pages/ver-productos/ver-productos.component';

//Prime NG
import {MenubarModule} from 'primeng/menubar';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { CarritoComponent } from './pages/carrito/carrito.component';
import { AgregarTarjetaComponent } from './components/agregar-tarjeta/agregar-tarjeta.component';
import { ManejoTarjetasComponent } from './pages/manejo-tarjetas/manejo-tarjetas.component';
import { TarjetasUsuarioComponent } from './components/tarjetas-usuario/tarjetas-usuario.component';
import { RastrearPedidoComponent } from './pages/rastrear-pedido/rastrear-pedido.component';

@NgModule({
  declarations: [
    SharedComponent,
    MainComponent,
    VerProductosComponent,
    CarritoComponent,
    AgregarTarjetaComponent,
    ManejoTarjetasComponent,
    TarjetasUsuarioComponent,
    RastrearPedidoComponent
  ],
  imports: [
    CommonModule,
    ComunRoutingModule,
    MenubarModule,
    CardModule,
    ButtonModule,
    FormsModule
  ]
})
export class ComunModule { }
