import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { MainComponent } from './pages/main/main.component';
import { PrincipalComponent } from './pages/principal/principal.component';
import { MenuComponent } from './shared/menu/menu.component';
import { MenubarModule } from 'primeng/menubar';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { CrearUsuarioComponent } from './pages/crear-usuario/crear-usuario.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModificarUsuarioComponent } from './pages/modificar-usuario/modificar-usuario.component';
import { ReportesPrincipalComponent } from './pages/reportes-principal/reportes-principal.component';
import { Reporte1Component } from './components/reporte1/reporte1.component';
import { Reporte2Component } from './components/reporte2/reporte2.component';
import { Reporte3Component } from './components/reporte3/reporte3.component';
import { Reporte4Component } from './components/reporte4/reporte4.component';
import { Reporte5Component } from './components/reporte5/reporte5.component';


@NgModule({
  declarations: [
    MainComponent,
    PrincipalComponent,
    MenuComponent,
    UsuariosComponent,
    CrearUsuarioComponent,
    ModificarUsuarioComponent,
    ReportesPrincipalComponent,
    Reporte1Component,
    Reporte2Component,
    Reporte3Component,
    Reporte4Component,
    Reporte5Component
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MenubarModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class AdminModule { }
