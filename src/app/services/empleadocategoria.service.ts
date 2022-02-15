import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoriaModel } from '../models/categoriaModel';



@Injectable({
  providedIn: 'root'
})
export class EmpleadocategoriaService {

  url = 'http://localhost:8093/categoriaempleado';

  idx:number;

  constructor( private http: HttpClient, private activatedR: ActivatedRoute ) {
    console.log("Servicio categorias empleados funcionando");
   }

  getEmpleadosCategorias(){
    return this.http.get(`${ this.url }`);
    }

  getCategoriaEmpleado( idx:number ){
    return this.http.get(`${ this.url }/${ idx }`);
  }

  postCategoriaEmpleado( categoriaempleado:CategoriaModel ){
    return this.http.post(`${ this.url }`, categoriaempleado );
  }

  putCategoriaEmpleado( idx:number, categoriaempleado:CategoriaModel ){
    return this.http.put(`${ this.url }/${ idx }`, categoriaempleado );
  }

  deleteCategoriaEmpleado( idx:number ){
    return this.http.delete(`${ this.url }/${ idx }`);
  }

}
