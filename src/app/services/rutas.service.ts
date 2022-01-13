import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { rutaModel } from '../models/rutaModel';


@Injectable({
  providedIn: 'root'
})
export class RutasService {

  url = 'http://localhost:8093/ruta'

  constructor( private http: HttpClient,
               private activatedRoute:ActivatedRoute) {
    console.log("Servicio rutas funcionando! ");
  }


  getRutas(){
    return this.http.get(`${ this.url }`)
    .pipe( map( (data:any) => {
      return data;
    }));
  }

  getRuta( idx: number ) {
    return this.http.get(`${this.url}/${ idx }`);
  }

  saveRuta( ruta:rutaModel ){
    return this.http.post(`${ this.url }`,ruta);
  }

  updateRuta( idx:number, ruta:rutaModel ){
    return this.http.put(`${ this.url }/${ idx }`, ruta);
  }

  deleteRuta( idx:number ){
    return this.http.delete(`${ this.url }/${ idx }`);
  }





}
