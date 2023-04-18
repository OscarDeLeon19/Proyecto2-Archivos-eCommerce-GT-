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

@NgModule({
  declarations: [
    SharedComponent,
    MainComponent,
    VerProductosComponent
  ],
  imports: [
    CommonModule,
    ComunRoutingModule,
    MenubarModule,
    CardModule,
    ButtonModule
  ]
})
export class ComunModule { }
