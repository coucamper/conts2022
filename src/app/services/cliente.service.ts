import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteModel } from '../models/clienteModel';
import { throwError } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  isNotAuth(error:any):boolean {
    if(error.status == 401 || error.status == 403 ){
      this._router.navigate(['/login']);
      return true;
    }else{
      return false;
    }
  }

  url = 'http://localhost:8093/api/clientes';

  constructor( private http: HttpClient,
               private activatedRoute:ActivatedRoute,
               private _router: Router
    ) {
    console.log("servicio de clientes funcionando ");
  }


  getClientes(){
    return this.http.get(`${ this.url}`).pipe(catchError(e => {
      this.isNotAuth(e);
      return throwError(e);
    }));
  }

  getClientePorID( idcli:number){
    return this.http.get(`${ this.url}/${idcli}`).pipe(catchError(e => {
      this.isNotAuth(e);
      return throwError(e);
    }));
  }

  postCliente(cliente:ClienteModel){
    return this.http.post(`${this.url}`, cliente);
  }


}
