import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { ClienteModel } from '../models/clienteModel';



@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  url = 'http://localhost:8093/';

  constructor( private http: HttpClient,
               private activatedRoute:ActivatedRoute
    ) {
    console.log("servicio de clientes funcionando ");
  }


  getClientes(){
    return this.http.get(`${ this.url}cliente`);
  }


}
