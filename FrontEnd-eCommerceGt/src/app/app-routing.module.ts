import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/guard/auth.guard';
import { ComunGuard } from './comun/guard/comun.guard';
import { PaqueteriaGuard } from './paqueteria/guard/paqueteria.guard';
import { AdminGuard } from './admin/guards/admin.guard';

const routes: Routes = [
  {
    path: "auth",
    loadChildren: () => import("./auth/auth.module").then(m => m.AuthModule)
  },
  {
    path: "comun",
    loadChildren: () => import("./comun/comun.module").then(m => m.ComunModule),
    canActivate: [ComunGuard]
  },
  {
    path: "paqueteria",
    loadChildren: () => import("./paqueteria/paqueteria.module").then(m => m.PaqueteriaModule),
    canActivate:[PaqueteriaGuard]
  },
  {
    path: "admin",
    loadChildren: () => import("./admin/admin.module").then(m => m.AdminModule),
    canActivate:[AdminGuard]
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
