import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { EmpleadoModel } from '../models/empleado';


@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {


  empleadoURL = 'http://localhost:8093/empleado';
  url = 'http://localhost:8093';

  constructor( private http: HttpClient, private activatedRoute: ActivatedRoute ) {
    console.log("servicio de empleados funcionando ");
  }


  getEmpleados(){
    return this.http.get( this.empleadoURL )
    .pipe( map( (data:any) => {
      return data;
    }));
  }


  getEmpleado( idx:number){
    return this.http.get( `${ this.url}/empleado/${ idx }`);
  }


  postEmpleado( empleado: EmpleadoModel ){
    return this.http.post('http://localhost:8093/empleado', empleado);
  }


  deleteEmpleado( idx:number){
    return this.http.delete<any>( `${ this.url}empleado/${ idx }` );
  }


  putEmpleado( idx:number, empleado: EmpleadoModel){
    return this.http.put( `${ this.empleadoURL }${ idx }`, empleado );
  }


}







