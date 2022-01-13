import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ExportacionesService {

  constructor( private http: HttpClient, private activatedRoute:ActivatedRoute ) { 
    console.log("servicio de exportaciones funcionando ");
  }

  
  getExportaciones(){
    return this.http.get('http://localhost:8093/claseexport')
    .pipe( map( (data:any) => {
      return data; 
    }));
  }


  getClases(){
    return this.http.get('http://localhost:8093/clase')
    .pipe( map( (data:any) => {
      return data;
    }) )
  }

  getClientes(){
    return this.http.get('http://localhost:8093/cliente')
    .pipe( map( (data:any) =>{
      return data;
    } ) )
  }

  // getClasesExport(){
  //   return.this.http.get('')
  // }

  getContenedor( idx : number){
    return this.http.get('http://localhost:8093/contenedor/["idx"]')
    .pipe( map ( (data:any) => {
      return data;
    }));

  }

  /*
    
  getMensajes(){
    return this.http.get('http://localhost:8093/mensaje')
    .pipe( map( (data:any) => {
      return data; 
    }));
  }
  */



}
