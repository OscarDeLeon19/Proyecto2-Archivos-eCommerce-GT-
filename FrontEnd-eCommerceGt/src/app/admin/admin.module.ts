import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { MainComponent } from './pages/main/main.component';
import { PrincipalComponent } from './pages/principal/principal.component';
import { MenuComponent } from './shared/menu/menu.component';
import { MenubarModule } from 'primeng/menubar';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { CrearUsuarioComponent } from './pages/crear-usuario/crear-usuario.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ModificarUsuarioComponent } from './pages/modificar-usuario/modificar-usuario.component';


@NgModule({
  declarations: [
    MainComponent,
    PrincipalComponent,
    MenuComponent,
    UsuariosComponent,
    CrearUsuarioComponent,
    ModificarUsuarioComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MenubarModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
