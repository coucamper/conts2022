import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class SalvarexportacionService {

  constructor( private http: HttpClient, private activatedRoute: ActivatedRoute) {
    console.log("Servicio de insercion de exportacion funcionando!");

   }

    

}
