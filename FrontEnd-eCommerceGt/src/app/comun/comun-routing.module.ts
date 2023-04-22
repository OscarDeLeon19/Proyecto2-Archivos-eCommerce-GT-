import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { VerProductosComponent } from './pages/ver-productos/ver-productos.component';
import { CarritoComponent } from './pages/carrito/carrito.component';
import { ManejoTarjetasComponent } from './pages/manejo-tarjetas/manejo-tarjetas.component';
import { RastrearPedidoComponent } from './pages/rastrear-pedido/rastrear-pedido.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {path: "productos", component: VerProductosComponent},
      {path: "carrito", component: CarritoComponent},
      {path: "tarjeta", component: ManejoTarjetasComponent},
      {path: "pedidos", component: RastrearPedidoComponent},
      {path: "**", redirectTo: "productos" },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComunRoutingModule { }
