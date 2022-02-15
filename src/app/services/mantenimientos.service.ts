import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MantenimientosService {

  url = 'http://localhost:8093/mantenimiento';

  constructor(private http: HttpClient, private activatedRoute: ActivatedRoute) {
    console.log("servicio de mantenimientos funcionando ");
   }


   getMantenimientos(){
      return this.http.get(`${this.url}`);
   }

   getMantenimiento( idx:number ){
    return this.http.get(`${ this.url}/${ idx }`);
   }





}
