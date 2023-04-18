import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { VerProductosComponent } from './pages/ver-productos/ver-productos.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {path: "productos", component: VerProductosComponent},
      { path: "**", redirectTo: "productos" },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComunRoutingModule { }
