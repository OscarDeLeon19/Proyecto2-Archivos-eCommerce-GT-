import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { PrincipalComponent } from './pages/principal/principal.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { CrearUsuarioComponent } from './pages/crear-usuario/crear-usuario.component';
import { ModificarUsuarioComponent } from './pages/modificar-usuario/modificar-usuario.component';
import { ReportesPrincipalComponent } from './pages/reportes-principal/reportes-principal.component';
import { Reporte1Component } from './components/reporte1/reporte1.component';
import { Reporte2Component } from './components/reporte2/reporte2.component';
import { Reporte3Component } from './components/reporte3/reporte3.component';
import { Reporte4Component } from './components/reporte4/reporte4.component';
import { Reporte5Component } from './components/reporte5/reporte5.component';

const routes: Routes = [{
  path: '',
  component: MainComponent,
  children: [
    { path: "principal", component: PrincipalComponent },
    { path: "usuarios", component: UsuariosComponent },
    { path: "crearUsuario", component: CrearUsuarioComponent },
    { path: "modificarUsuario", component: ModificarUsuarioComponent },
    { path: "reportes", component: ReportesPrincipalComponent },
    { path: "reporte1", component: Reporte1Component},
    { path: "reporte2", component: Reporte2Component},
    { path: "reporte3", component: Reporte3Component},
    { path: "reporte4", component: Reporte4Component},
    { path: "reporte5", component: Reporte5Component},
    { path: "**", redirectTo: "principal" },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
