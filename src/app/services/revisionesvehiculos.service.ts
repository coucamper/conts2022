import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RevisionesVehiculo } from '../models/revisionesVehiculo';



@Injectable({
  providedIn: 'root'
})
export class RevisionesvehiculosService {

  url = 'http://localhost:8093/revisiones';

  constructor( private http:HttpClient , private activatedRoute: ActivatedRoute) {
    console.log("Servicio de revisiones funcionando");
  }

  getRevisiones(){
    return this.http.get(this.url);
  }

  getRevision( idx:number ){
    return this.http.get( `${ this.url }/${ idx }`);
  }



}
