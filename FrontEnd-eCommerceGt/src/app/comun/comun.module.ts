import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComunRoutingModule } from './comun-routing.module';
import { SharedComponent } from './shared/shared.component';
import { MainComponent } from './pages/main/main.component';

//Prime NG
import {MenubarModule} from 'primeng/menubar';

@NgModule({
  declarations: [
    SharedComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    ComunRoutingModule,
    MenubarModule
  ]
})
export class ComunModule { }
