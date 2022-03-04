import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TipoimportanciamensajeService {


  url = 'http://localhost:8093/tipoimportancia';

  constructor(  private http: HttpClient, private activatedRoute:ActivatedRoute ) {

   }

   getTiposimportancia(){
    return this.http.get(`${ this.url }`);
  }

  getTipoimportancia( idimport:number ){
    return this.http.get(`${ this.url }/${ idimport }`);
  }

}
