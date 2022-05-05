import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, tap } from 'rxjs/operators';
import { URL_BACKEND } from '../config/config';
import { ObjetoExportacion } from '../inserciones/salvarempleado/salvarcategoria/salvarcategoria.component';
import { EmpleadocategoriaModel } from '../models/empleadocategoria';
import { AuthService } from './auth-service.service';



export class Empleadocategoria {

  idempleadocategoria:number;
  empleado:string;
  categoria:string;

}


@Injectable({
  providedIn: 'root'
})
export class EmpleadocategoriaService {

  //url = 'http://localhost:8093/categoriaempleado';
  //urlAddCategoria = 'http://localhost:8093/addcategoriaempleado';
  //urlPage = 'http://localhost:8093/categoriaempleadopage';

   url = URL_BACKEND+'/categoriaempleado';
   urlAddCategoria = URL_BACKEND+'/addcategoriaempleado';
   urlPage = URL_BACKEND+'/categoriaempleadopage';


  idx:number;

  emp:any[] = [];

  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor( private http: HttpClient,
               private activatedR: ActivatedRoute,
               public _authService: AuthService ) {}

   private agregarAuthorizationHeader() {
    let token = this._authService.token;
    if (token != null) {
      return this.httpHeaders.append('Authorization', 'Bearer ' + token);
    }
    return this.httpHeaders;
  }

  getEmpleadosCategorias(){
    return this.http.get(`${ this.url }`,{ headers: this.agregarAuthorizationHeader() });
    }

    getEmpleadosCategoriasPage(page:number){
      return this.http.get(`${ this.urlPage }/${page}`,{ headers: this.agregarAuthorizationHeader() })
      .pipe
      (tap((response:any) =>{
        //console.log("Clientes service tap1");
        (response.content as Empleadocategoria[]).forEach(empleadocategoria => {
          //console.log(localidad)
          this.emp.push(empleadocategoria);
        });
      }),
      map(response => {
        (response.content as Empleadocategoria[]).map(empleadocategoria =>{

          return empleadocategoria;
        });
        return response;
      }),
      tap(response =>{
       // console.log("Clientes tap 2");
        response.content.forEach((empleadocategoria:any) =>{
         // console.log(localidad.denom)
        })
      }));
    }

  getCategoriaEmpleado( idx:number ){
    return this.http.get(`${ this.url }/${ idx }`,{ headers: this.agregarAuthorizationHeader() });
  }

  postCategoriaEmpleado( categoriaempleado:ObjetoExportacion ){
    return this.http.post(`${ this.url }`, categoriaempleado, { headers: this.agregarAuthorizationHeader() } );
  }

  addcategoriaEmpleado( idempleado:number, idcategoria:number){
    return this.http.post(`${this.urlAddCategoria}/${idempleado}/${idcategoria}`, { headers: this.agregarAuthorizationHeader() });
  }

  putCategoriaEmpleado( idEmpleadoCategoria:number, categoriaempleado:EmpleadocategoriaModel ){
    return this.http.put(`${ this.url }/${ idEmpleadoCategoria }`, categoriaempleado, { headers: this.agregarAuthorizationHeader() } );
  }

  deleteCategoriaEmpleado( idx:number ){
    return this.http.delete(`${ this.url }/${ idx }`,{ headers: this.agregarAuthorizationHeader() });
  }


}
