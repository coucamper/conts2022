import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { ContenedorVOModule } from '../models/contenedor-vo/contenedorModel';
import { ContModule } from '../models/contModel';
import { ContenedoresRutasModel } from '../models/contenedoresRutaModel';
import { AuthService } from './auth-service.service';
import { rutaModel } from '../models/rutaModel';
import { EmpleadoModel } from '../models/empleado';
import { NivelContenedorModel } from '../models/NivelContenedorModel';
import { NivelContenedorRuta } from '../models/NivelContenedorRutaModel';
import { URL_BACKEND } from '../config/config';






export class NivelContenedorR {

  idnivelcontenedor:number;
  contenedor:ContenedorVOModule;
  ruta:rutaModel;
  empleado:EmpleadoModel;

}


@Injectable({
  providedIn: 'root'
})
export class NivelesContenedoresRutaService {

  //url = "http://localhost:8093/nivelescontenruta";
  //url2 = "http://localhost:8093/nivelescontenruta";
  //url3 = 'http://localhost:8093/nivelespesaje';
  //urlPage = 'http://localhost:8093/nivelescontenrutapage';
  //urlPage2 = 'http://localhost:8093/nivelescontenidrutapage';


  url = URL_BACKEND + "/nivelescontenruta";
  url2 = URL_BACKEND + "/nivelescontenruta";
  url3 = URL_BACKEND + '/nivelespesaje';
  urlPage = URL_BACKEND + '/nivelescontenrutapage';
  urlPage2 = URL_BACKEND + '/nivelescontenidrutapage';

  nivs:any[] = [];

  contenedor:ContenedorVOModule;
  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor( private http: HttpClient,
               private activatedRoute:ActivatedRoute,
               public _authService: AuthService
              ) {
                  console.log("servicio de contenedoresRutas funcionando ");
                }

                private agregarAuthorizationHeader() {
                  let token = this._authService.token;
                  if (token != null) {
                    return this.httpHeaders.append('Authorization', 'Bearer ' + token);
                  }
                  return this.httpHeaders;
                }

  getNivelesContenedoresRuta(){
    return this.http.get(`${ this.url }`,{ headers: this.agregarAuthorizationHeader() })
    .pipe( map( (data:any) => {
      return data;
    }));
  }



  getNivelesContensRutaPageSize( ruta:number,page:number){
    return this.http.get(`${ this.urlPage2 }/${ruta}/${page}`,{ headers: this.agregarAuthorizationHeader() })
    .pipe
    (tap((response:any) =>{
      //console.log(response);
      // (response.content as NivelContenedorRuta[]).forEach(nivelContenedorRuta => {
      //   //console.log(localidad)
      //   this.nivs.push(nivelContenedorRuta);
      // });
    })

    );
  }

  // 	@PostMapping("/nivelescontenruta/{idcontenedor}/{idempleado}/{idpesaje}/{idllenado}/{fecha}")

  postNivelContenedorRuta( idcont:any, idempleado:number, idpesaje:number, idllenado:number, fechapesaje:string, contenruta:NivelContenedorRuta ){
    return this.http.post(`${ this.url }/${idcont}/${idempleado}/${idpesaje}/${idllenado}/${fechapesaje}`, contenruta,{ headers: this.agregarAuthorizationHeader() });
  }



  getNivelContenedorRuta( ruta:number){
    return this.http.get(`${this.url2}/${ruta}`,{ headers: this.agregarAuthorizationHeader() });
  }


  getNivelesPorpesaje( ruta:number){
    return this.http.get(`${ this.url }/${ruta}`, { headers: this.agregarAuthorizationHeader() })
  }




}

