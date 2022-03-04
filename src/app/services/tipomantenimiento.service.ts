import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TipomantenimientoService {

  url = 'http://localhost:8093/tipomantenimiento';

  constructor( private http: HttpClient, private activatedRoute:ActivatedRoute ) {
    console.log("servicio de tiposmantenimiento funcionando!");
  }


  getTiposmantenimiento(){
    return this.http.get(`${ this.url }`);
  }



}
