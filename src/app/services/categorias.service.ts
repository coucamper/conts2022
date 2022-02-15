import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoriaModel } from '../models/categoriaModel';



@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  url = 'http://localhost:8093/categoria';

  idx:number;

  constructor( private http: HttpClient, private activatedR: ActivatedRoute ) {
    console.log("Servicio categorias funcionando");
   }

  getCategorias(){
    return this.http.get(`${ this.url }`);
    }

  getCategoria( idx:number ){
    return this.http.get(`${ this.url }/${ idx }`);
  }

  postCategoria( categoria:CategoriaModel ){
    return this.http.post(`${ this.url }`, categoria );
  }

  putCategoria( idx:number, categoria:CategoriaModel ){
    return this.http.put(`${ this.url }/${ idx }`, categoria );
  }

  deleteCategoria( idx:number ){
    return this.http.delete(`${ this.url }/${ idx }`);
  }

}
