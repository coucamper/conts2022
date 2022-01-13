import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { ContenedorVOModule } from 'src/app/models/contenedor-vo/contenedorModel';

@Injectable({
  providedIn: 'root'
})
export class SalvarcontendorService {




  constructor( private http: HttpClient,
               private activatedRoute : ActivatedRoute ) {
                 console.log("Servicio de insercion de contenedor funcionando!");
  }



}

