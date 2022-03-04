import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TipocontratoService {

  url = 'http://localhost:8093/tipocontrato'

  constructor( private http: HttpClient, private activatedRoute: ActivatedRoute) { console.log("tipo contrato funcionando"); }

  getTiposContrato(){
    return this.http.get(`${this.url}`);
  }

}
