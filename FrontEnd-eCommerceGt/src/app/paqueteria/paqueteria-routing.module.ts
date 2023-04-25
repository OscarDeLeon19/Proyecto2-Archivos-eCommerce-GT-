import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { PrincipalComponent } from './pages/principal/principal.component';
import { PedidosComponent } from './pages/pedidos/pedidos.component';
import { ModificarFechaComponent } from './pages/modificar-fecha/modificar-fecha.component';

const routes: Routes = [{
  path: '',
  component: MainComponent,
  children: [
    {path: "principal", component: PrincipalComponent},
    {path: "pedidos", component: PedidosComponent},
    {path: "modificarFecha", component: ModificarFechaComponent},
    {path: "**", redirectTo: "principal" },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaqueteriaRoutingModule { }
