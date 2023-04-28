import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AdminService } from '../services/admin.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard {

  constructor(private adminService: AdminService, private router: Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      console.log('Comprobar Administracion');
      if (this.adminService.comprobarLogin() == false) {
        localStorage.removeItem("usuario");
        this.router.navigate(['/auth']);
        return false;
      }
      return true;
  }
  
}
