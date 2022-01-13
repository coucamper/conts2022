import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MensajesService {


  constructor( private http: HttpClient, private activatedRoute: ActivatedRoute ) {
    console.log("servicio de mensajes funcionando ");
  }


  getMensajes(){
    return this.http.get('http://localhost:8093/mensaje')
    .pipe( map( (data:any) => {
      return data;
    }));
  }

}
