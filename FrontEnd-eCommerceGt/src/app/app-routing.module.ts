import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "auth",
    loadChildren: () => import("./auth/auth.module").then(m => m.AuthModule)
  },
  {
    path: "comun",
    loadChildren: () => import("./comun/comun.module").then(m => m.ComunModule)
  },
  {
    path: "paqueteria",
    loadChildren: () => import("./paqueteria/paqueteria.module").then(m => m.PaqueteriaModule)
  },
  {
    path: "**",
    redirectTo: "auth"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
