import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ComunService } from '../services/comun.service';

@Injectable({
  providedIn: 'root'
})
export class ComunGuard {

  constructor(private comunService: ComunService, private router: Router) {

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      
    console.log('Comprobar Comun');
    if (this.comunService.comprobarLogin() == false) {
      localStorage.removeItem("usuario");
      this.router.navigate(['/auth']);
      return false;
    }
    return true;
  }
}
