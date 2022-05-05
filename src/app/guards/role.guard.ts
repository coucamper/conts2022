import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth-service.service';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {

  Role:any;

  constructor( private _authService: AuthService, private router: Router ){

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      //console.log(route.data['role'] as string)
      this.Role = route.data['role'] as string;
      console.log(this.Role)
      if(this._authService.hasRole(this.Role)){
        return true;
      }else{
        Swal.fire('Acceso Denegado', `${this._authService.usuario.username}, no tiene acceso a este contenido`, 'error');
        this.router.navigate(['/inicio']);
        return false;
      }
  }

}
