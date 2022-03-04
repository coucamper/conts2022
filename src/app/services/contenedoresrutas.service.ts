import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { ContenedorVOModule } from '../models/contenedor-vo/contenedorModel';
import { ContModule } from '../models/contModel';
import { ContenedoresRutasModel } from '../models/contenedoresRutaModel';



@Injectable({
  providedIn: 'root'
})
export class ContenedoresRutasService {

  url = "http://localhost:8093/";

  urlanadir = "http://localhost:8093/addcontenedorruta?idcontenedor=";
  urlAnadir2 = "&idruta=";
  contenedor:ContenedorVOModule;

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


  // addContenedorRuta( idx : number, contenedor : ContenedoresRutasModel){
  //   return this.http.post(`http://localhost:8093/addcontenedorruta/${idx}`, contenedor );
  // }

  asociarContenedorARuta( idruta:number, idconten:number, contenruta:ContenedoresRutasModel ){
    return this.http.post(`http://localhost:8093/contenedoraruta/${idruta}/${idconten}`, contenruta);
  }



}

