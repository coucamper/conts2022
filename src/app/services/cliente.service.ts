import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteModel } from '../models/clienteModel';
import { Observable, of, throwError } from 'rxjs';
import Swal from 'sweetalert2';
import { typeWithParameters } from '@angular/compiler/src/render3/util';
import { UsersAuthService } from './users-auth.service';
import { AuthService } from './auth-service.service';
import { URL_BACKEND } from '../config/config';







@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  Cliente:ClienteModel;


  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

/*   url = 'http://localhost:8093/api/clientes';

  urlEndPoint = 'http://localhost:8093/api/clientes'; */


  url = URL_BACKEND + '/api/clientes';

  urlEndPoint = URL_BACKEND + '/api/clientes';

  constructor( private http: HttpClient,
               private activatedRoute:ActivatedRoute,
               private _router: Router,
               public _authService: AuthService
               ) {}

               private agregarAuthorizationHeader() {
                let token = this._authService.token;
                if (token != null) {
                  return this.httpHeaders.append('Authorization', 'Bearer ' + token);
                }
                return this.httpHeaders;
              }


  agregarAuth(){

    let token = this._authService.token;
  }


  // isNotAuth(error:any):boolean {
  //   if(error.status == 401 || error.status == 403 ){
  //     this._router.navigate(['/login']);
  //     return true;
  //   }else{
  //     return false;
  //   }
  // }


  // getClientes(){
  //   return this.http.get(`${ this.urlEndPoint}`).pipe(catchError(e => {
  //     //this.isNotAuth(e);
  //     return throwError(e);
  //   }));
  // }

  // { headers: this.agregarAuthorizationHeader() }


  getClientes() {
    return this.http.get(this.urlEndPoint,{ headers: this.agregarAuthorizationHeader() });
  }



  getCliente(id:number) {
    return this.http.get(`${this.urlEndPoint}/${id}`,{ headers: this.agregarAuthorizationHeader() })
  }

  postCliente(cliente:ClienteModel){
    return this.http.post(`${this.url}`, cliente).pipe(
      catchError(e =>{
        this._router.navigate(['/clientes']); // Si hay error redirige a clientes
        console.error(e.error.mensaje);
        Swal.fire("Error al editar", e.error.mensaje, 'error'); // Muestra el alert
        return throwError(e); // Devuelve el error si se produce
      })
    );
  }


}
