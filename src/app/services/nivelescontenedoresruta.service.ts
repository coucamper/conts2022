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
export class NivelesContenedoresRutaService {

  url = "http://localhost:8093/nivelescontenruta";
  url2 = "http://localhost:8093/nivelescontenidruta";

  contenedor:ContenedorVOModule;

  constructor( private http: HttpClient,
               private activatedRoute:ActivatedRoute
              ) {
                  console.log("servicio de contenedoresRutas funcionando ");
                }


  getNivelesContenedoresRuta(){
    return this.http.get(`${ this.url }`)
    .pipe( map( (data:any) => {
      return data;
    }));
  }

  getNivelContenedorRuta( idx : number){
    return this.http.get(`${this.url2}/${idx}`);
  }


  // saveContenedorRuta( idx:number,  contenedor: ContenedorVOModule){
  //   return this.http.post(`${this.url}contenedorruta/${idx}`, contenedor );
  // }


  // addContenedorRuta( idx : number, contenedor : ContenedoresRutasModel){
  //   return this.http.post(`http://localhost:8093/addcontenedorruta/${idx}`, contenedor );
  // }

  // asociarContenedorARuta( idruta:number, idconten:number, contenruta:ContenedoresRutasModel ){
  //   return this.http.post(`http://localhost:8093/contenedoraruta/${idconten}`, contenruta);
  // }



}

