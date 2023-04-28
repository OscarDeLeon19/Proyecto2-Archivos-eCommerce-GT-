import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { PaqueteriaService } from '../services/paqueteria.service';

@Injectable({
  providedIn: 'root'
})
export class PaqueteriaGuard {

  constructor(private paqueteriaService: PaqueteriaService, private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    console.log('Comprobar Paqueteria');
    if (this.paqueteriaService.comprobarLogin() == false) {
      localStorage.removeItem("usuario");
      this.router.navigate(['/auth']);
      return false;
    }
    return true;
  }

}
