import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { ContenedorVOModule } from '../models/contenedor-vo/contenedorModel';



@Injectable({
  providedIn: 'root'
})
export class ContenedoresRutasService {

  url = "http://localhost:8093/";

  constructor( private http: HttpClient,
               private activatedRoute:ActivatedRoute
    ) {
    console.log("servicio de contenedoresRutas funcionando ");
  }


  getContenedoresRuta(){
    return this.http.get('http://localhost:8093/contenedoresrutasws')
    .pipe( map( (data:any) => {
      return data;
    }));
  }

  getContenedorRuta( idx : number){
    return this.http.get(`${this.url}contenedorruta/${idx}`);
  }


  saveContenedorRuta( idx:number,  contenedor: ContenedorVOModule){
    return this.http.post(`${this.url}contenedorruta/${idx}`, contenedor );
  }


}

