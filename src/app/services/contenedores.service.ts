import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { ContenedorVOModule } from '../models/contenedor-vo/contenedorModel';



@Injectable({
  providedIn: 'root'
})
export class ContenedoresService {

  url = 'http://localhost:8093/contenedor';

  constructor( private http: HttpClient,
               private activatedRoute:ActivatedRoute ) {
    console.log("servicio de contenedores funcionando ");
  }


  getContenedores(){
    return this.http.get(`${ this.url }`);
  }

  getContenedor( idx : number){
    return this.http.get(`${ this.url}/${ idx }`);
  }

  postContenedor( contenedor:ContenedorVOModule ){
    return this.http.post(`${ this.url }`, contenedor );
  }

  putContenedor( idx:number, contenedor:ContenedorVOModule ){
    return this.http.put(`${ this.url }/${ idx}`, contenedor );
  }

  deleteContenedor( idx:number ){
    return this.http.delete(`${ this.url }/${ idx }`);
  }




}

