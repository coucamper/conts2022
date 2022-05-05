import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { EmpleadoModel } from '../models/empleado';
import { AuthService } from './auth-service.service';
import { URL_BACKEND } from '../config/config';


export class Empleado{

  idempleado: number;
  nomemp: string;
  ape1emp:string;
  ape2emp:string;
  nif: string;
  nss: string;
  antiguedad: string;
  telecontacto: string;
  emailemp: string;
  fechanac: string;
  iban: string;
  estudios: string;
  numhijos: string;
  domicilio: string;
  tipocontrato: string;


 }


@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {


  //empleadoURL = 'http://localhost:8093/empleado';
  //url = 'http://localhost:8093';
  //urlPage = 'http://localhost:8093/empleadopage';
  //urlNif = 'http://localhost:8093/empleadobynif';



   empleadoURL = URL_BACKEND+'/empleado';
   url = URL_BACKEND;
   urlPage = URL_BACKEND+'/empleadopage';
   urlNif = URL_BACKEND+'/empleadobynif';




  emp:any[] = [];

  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor( private http: HttpClient, private activatedRoute: ActivatedRoute, public _authService: AuthService ) {

  }

  private agregarAuthorizationHeader() {
    let token = this._authService.token;
    if (token != null) {
      return this.httpHeaders.append('Authorization', 'Bearer ' + token);
    }
    return this.httpHeaders;
  }

  getEmpleados(){
    return this.http.get( this.empleadoURL, { headers: this.agregarAuthorizationHeader() } )
    .pipe( map( (data:any) => {
      return data;
    }));
  }


/*
  getLocalidades( page:number ){
    return this.http.get(`${ this.urlPage }/${page}`,{ headers: this.agregarAuthorizationHeader() })
    .pipe
    (tap((response:any) =>{
      //console.log("Clientes service tap1");
      (response.content as localidad[]).forEach(localidad => {
        //console.log(localidad)
        this.localidades.push(localidad);
      });
    }),
    map(response => {
      (response.content as localidad[]).map(localidad =>{
        localidad.denom = localidad.denom.toUpperCase();
        return localidad;
      });
      return response;
    }),
    tap(response =>{
     // console.log("Clientes tap 2");
      response.content.forEach((localidad:any) =>{
       // console.log(localidad.denom)
      })
    }));
  }

*/






  getEmpleadosPage(page:number){
    return this.http.get(`${ this.urlPage }/${page}`,{ headers: this.agregarAuthorizationHeader() })
    .pipe
    (tap((response:any) =>{
      //console.log("Clientes service tap1");
      (response.content as Empleado[]).forEach(empleado => {
        //console.log(localidad)
        this.emp.push(empleado);
      });
    }),
    map(response => {
      (response.content as Empleado[]).map(empleado =>{
        empleado.nomemp = empleado.nomemp;
        return empleado;
      });
      return response;
    }),
    tap(response =>{
     // console.log("Clientes tap 2");
      response.content.forEach((empleado:any) =>{
       // console.log(localidad.denom)
      })
    }));
  }






  getEmpleado( idx:number){
    return this.http.get( `${ this.url}/empleado/${ idx }`,{ headers: this.agregarAuthorizationHeader() });
  }

  getEmpleadoByNif( nif:string ){
    return this.http.get(`${ this.urlNif}/${nif}`, { headers: this.agregarAuthorizationHeader() });
  }


  postEmpleado( empleado: EmpleadoModel ){
    return this.http.post(`${ this.empleadoURL }`, empleado, { headers: this.agregarAuthorizationHeader() });
  }


  deleteEmpleado( idx:number){
    return this.http.delete<any>( `${ this.url}empleado/${ idx }`, { headers: this.agregarAuthorizationHeader() } );
  }


  putEmpleado( idx:number, empleado: EmpleadoModel){
    return this.http.put( `${ this.empleadoURL }${ idx }`, empleado, { headers: this.agregarAuthorizationHeader() } );
  }


}







